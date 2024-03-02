import { randomUUID } from "crypto";
import express from "express";
import * as http from "http";
import * as https from "https";
import fs from "fs";


/// ngrok start --config ngrok.yml --all

import WebSocket, { WebSocketServer } from "ws";

//const secure = false;

let server;

const app = express();

const port = 8443;

app.use(express.static("public"));
/*
if (!secure) {
  server = http.createServer(app);
} else {
  // # Generate a private key
  // openssl genpkey -algorithm RSA -out private-key.pem

  // # Generate a self-signed certificate
  // openssl req -x509 -new -key private-key.pem -out certificate.pem

  const options = {
    //requestCert: true,
    //rejectUnauthorized: true,

    cert: fs.readFileSync("./server-certificate.pem"),
    key: fs.readFileSync("./server-private-key.pem"),
    ca: fs.readFileSync("./ca-certificate.pem"),
  };
  server = https.createServer(options, app);
}
*/
  server = http.createServer(app);
server.listen(port, () => {
  console.log("server start http:localhost:", port);
});

const wss = new WebSocketServer({ server });

const rooms = new Map();
const MAX_PEOPLE = 2;

wss.on("connection", (ws) => {
  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });

ws["seenPeople"] = []
ws["id"] = randomUUID();

  ws.on("message", (msg) => {
    const data = JSON.parse(msg);

    if (!data) {
      return;
    }

    switch (data.type) {
      case "create":
        createRoom(ws);

        break;

      case "join":
        if (!ws["room"]) {
          joinRandomRoom(ws);
        } else {
          leaveRoom(ws);
          joinRandomRoom(ws);
        }
        break;
      case "leave":
        leaveRoom(ws);
        break;

      case "offer":
        sendData(ws, data);
        break;
      case "answer":
        sendData(ws, data);
        break;
      case "candidate":
        sendData(ws, data);
        break;
      case "bye":
        sendData(ws, data);
        break;

      case "message":
        if (ws["room"]) {
          const room = rooms.get(ws["room"]);
          if (room) {
            room.users.forEach((u) => {
              u.send(JSON.stringify({ msg }));
            });
          }
        }

        break;
    }
  });
});

function sendData(ws, data) {
  if (ws["room"]) {
    const room = rooms.get(ws["room"]);
    if (room) {
      room.users.forEach((u) => {
        if (u !== ws) {
	
          u.send(JSON.stringify(data));
        }
      });
    }

  }
}

function leaveRoom(ws) {
  const roomId = ws["room"];
  ws["room"] = undefined;

  const curRoom = rooms.get(roomId);
  const otherUsers = curRoom.users.filter((u) => u !== ws);

for(let i =0;i<otherUsers.length;i++){
	ws["seenPeople"].push(otherUsers[i]["id"])
	otherUsers[i]["seenPeople"].push(ws["id"])
}


  if (otherUsers.length === 0) {
    rooms.delete(roomId);
  } else {
    curRoom.users = otherUsers;
    curRoom.isFull = false;
    rooms.set(roomId, curRoom);
  }
}

function createRoom(ws) {
 
  const randId = randomUUID();
  const room = { isFull: false, users: [ws] };
  rooms.set(randId, room);

  ws["room"] = randId;

  ws.send(JSON.stringify({ msg: "room created", room }));
}

function joinRandomRoom(ws) {
  const freeRooms = availableRooms(rooms,ws);

  if (freeRooms.length > 0) {
    const randomRoomId = freeRooms[rand(0, freeRooms.length)];
    const randRoom = rooms.get(randomRoomId);

    if (randRoom && !randRoom.isFull) {
      const user = randRoom.users[0];
      randRoom.users.push(ws);
      randRoom.isFull = randRoom.users.length === MAX_PEOPLE;
      ws["room"] = randomRoomId;
      user.send(JSON.stringify({ msg: "joined room", type: "ready" }));
    } else {
      ws.send(JSON.stringify({ msg: "room either full or doesnt exist" }));
    }
  } else {
    ws.send(JSON.stringify({ msg: "all rooms are full" }));
    createRoom(ws);
  }
}

function availableRooms(rooms,ws) {

  return Array.from(rooms.entries())
    .filter(([key, val]) => !val.isFull && !ws["seenPeople"].includes(val.users[0]["id"]))
    .map(([key]) => key);
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

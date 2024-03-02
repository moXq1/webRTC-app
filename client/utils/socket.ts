const configuration = {
  iceServers: [
    {
      urls: "stun:stun.l.google.com:19302",
    },
  ],
};

let room;

let pc: RTCPeerConnection | null;

export function upgradeConn(ws: WebSocket, localStream: MediaStream) {
  if (!pc) {
    return;
  }
  const [videoTrack] = localStream.getVideoTracks();
  const sender = pc.getSenders().find((s) => s.track!.kind === videoTrack.kind);

  sender?.replaceTrack(videoTrack);

  // ws.send(JSON.stringify({ type: "upgrade" }));
}

export function nextConn(
  ws: WebSocket,
  localStream: MediaStream | null,
  setRemoteStream: (val: null | MediaStream) => void
) {
  // hangup(ws, localStream, setLocalStream);
  if (pc) {
    ws.send(JSON.stringify({ type: "bye" }));
    hangup(ws, localStream, setRemoteStream);
  }

  ws.send(JSON.stringify({ type: "join" }));
}

export function stopConn(
  ws: WebSocket,
  localStream: MediaStream | null,
  setRemoteStream: (val: null | MediaStream) => void
) {
  ws.send(JSON.stringify({ type: "bye" }));
  hangup(ws, localStream, setRemoteStream);
}

async function hangup(
  ws: WebSocket,
  localStream: MediaStream | null,
  setRemoteStream: (val: null | MediaStream) => void
) {
  if (pc) {
    pc.close();
    pc = null;
  }

  // localStream!.getTracks().forEach((track) => track.stop());
  // setLocalStream(null);

  setRemoteStream(null);
}

export function wsConnection(
  ws: WebSocket,
  localStream: MediaStream | null,
  setLocalStream: (val: null | MediaStream) => void,
  remoteStream: MediaStream | null,
  setRemoteStream: (val: null | MediaStream) => void
) {
  function createPeerConnection() {
    pc = new RTCPeerConnection(configuration);

    pc.addEventListener("icecandidate", handleConnection);
    pc.addEventListener("track", ({ track, streams }) => {
      track.onmute = () => {
        if (remoteStream) {
          return;
        }
      };

      console.log("set Remote stream");
      setRemoteStream(streams[0]);
    });

    console.log("dddddd", localStream);
    if (localStream) {
      console.log("uuuuu");
      for (const track of localStream.getTracks()) {
        console.log("adding track");
        pc.addTrack(track, localStream);
      }
    }
  }

  function handleConnection(e: RTCPeerConnectionIceEvent) {
    const msg: {
      type: string;
      candidate: any;
      sdpMid?: any;
      sdpMLineIndex?: any;
    } = { type: "candidate", candidate: null };

    const iceCandidate = e.candidate;

    if (iceCandidate) {
      msg.candidate = e.candidate.candidate;
      msg.sdpMid = e.candidate.sdpMid;
      msg.sdpMLineIndex = e.candidate.sdpMLineIndex;
    }

    console.log("sendind ice candidate");
    ws.send(JSON.stringify(msg));

    ///triger candidate ev
  }

  async function handleCandidate(candidate: RTCIceCandidate) {
    if (!pc) {
      console.error("no peerconnection");
      return;
    }

    console.log("handle candidate");
    console.log(candidate);

    if (!candidate.candidate) {
      await pc.addIceCandidate(undefined);
    } else {
      await pc.addIceCandidate(candidate);
    }
  }

  async function handleAnswer(answer: any) {
    if (!pc) {
      console.error("no peerconnection");
      return;
    }
    console.log("receive answer");
    console.log(answer);
    pc.setRemoteDescription(answer);
  }

  async function makeCall() {
    console.log("make call");
    createPeerConnection();
    const offer = await pc!.createOffer();
    console.log("sent offer");
    ws.send(JSON.stringify({ type: "offer", sdp: offer.sdp }));

    //siganl offer offer.sdp
    pc!.setLocalDescription(offer);
  }

  async function handleOffer(offer: any) {
    console.log("receive offer");
    console.log(offer);
    if (pc) {
      console.error("existing peer connection");
      return;
    }

    createPeerConnection();
    console.log(pc);
    //@ts-ignore
    await pc.setRemoteDescription(offer);
    //@ts-ignore
    const answer = await pc.createAnswer();
    console.log("send answer");
    ws.send(JSON.stringify({ type: "answer", sdp: answer.sdp }));
    //send our answer with aswer.sdp
    //@ts-ignore
    pc.setLocalDescription(answer);
  }

  console.log(ws);

  ws.onmessage = async ({ data: d }) => {
    const data = JSON.parse(d);

    const { msg, code, type } = data;

    console.log(msg, code, type);

    if (code) {
      room = code;
    }

    switch (type) {
      case "offer":
        handleOffer(data);
        break;

      case "answer":
        handleAnswer(data);
        break;
      case "ready":
        if (pc) {
          console.log("already in call");
          return;
        }
        makeCall();
        break;
      case "candidate":
        handleCandidate(data);
        break;
      case "bye":
        if (pc) {
          hangup(ws, localStream, setRemoteStream);
        }
        break;
    }
  };

  return {};
}

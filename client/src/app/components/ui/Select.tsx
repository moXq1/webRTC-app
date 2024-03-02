"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Select.module.css";

interface SelectProps {
  label?: string;
  list: any[];
  position?: "top" | "bottom";
  playceholder?: string;
  type: "video" | "audio";
  selectHandler: (type: "video" | "audio", value: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  label,
  list,
  position,
  playceholder,
  type,
  selectHandler,
}) => {
  const [isActive, setActive] = useState(false);
  const [checked, setChecked] = useState({ id: "", index: -1 });
  const [hovered, setHover] = useState<null | { id: string; index: number }>(
    null
  );
  const [name, setName] = useState<undefined | string>(playceholder);

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const length = list.length;

  const selectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function clickOutside(e: Event) {
      if (isActive) {
        const isOutside = !selectRef.current!.contains(e.target as Node);

        if (isOutside) {
          setHover(null);
          setActive(false);
          setHoveredIndex(checked.index);
        }
      }
    }

    function keyboardNav(e: KeyboardEvent) {
      if (!isActive) {
        return;
      }
      e.preventDefault();

      let index = checked.index;

      if (hoveredIndex !== -1) {
        index = hoveredIndex;
      }

      if (e.code === "ArrowDown" && index < length - 1) {
        if (hovered) {
          setHover(null);
        }
        setHoveredIndex(index + 1);
      }
      if (e.code === "ArrowUp" && index > 0) {
        if (hovered) {
          setHover(null);
        }
        setHoveredIndex(index - 1);
      }

      if (e.key === "Enter" || e.code == "Space") {
        setHover(null);
        setActive(false);
        if (hovered) {
          setName(list[hovered.index].label);
          setChecked({ id: hovered.id, index: hovered.index });
        }

        if (hoveredIndex !== -1) {
          setName(list[hoveredIndex].label);
          setChecked({ id: list[hoveredIndex].deviceId, index: hoveredIndex });
        }
      }

      if (e.key === "Escape") {
        setHover(null);
        setActive(false);
        setHoveredIndex(checked.index);
      }
    }

    document.addEventListener("click", clickOutside);
    document.addEventListener("keydown", keyboardNav);

    return () => {
      document.removeEventListener("click", clickOutside);
      document.removeEventListener("keydown", keyboardNav);
    };
  }, [checked.index, hovered, hoveredIndex, isActive, length, list]);

  useEffect(() => {
    const data = localStorage.getItem(`selected${type}`);

    if (!data) {
      return;
    }

    const checkedSelect = JSON.parse(data);

    if (list.length === 0) {
      return;
    }

    setChecked({ ...checkedSelect });
    handleName(list[checkedSelect.index].label);
  }, [list]);

  const handleChecked = useCallback((value: string, index: number) => {
    setChecked({ id: value, index });
    localStorage.setItem(
      `selected${type}`,
      JSON.stringify({ id: value, index })
    );
    selectHandler(type, value);
  }, []);
  const handleHovered = useCallback((value: string, index: number) => {
    setHover({ id: value, index });
  }, []);

  const handleName = useCallback((value: string) => {
    setName(value);
  }, []);

  const handleHoveredIndex = useCallback((value: number) => {
    setHoveredIndex(value);
  }, []);

  return (
    <div
      onClick={(e) => {
        e.target;
      }}
      ref={selectRef}
      className={`${styles.select} ${isActive ? styles.isActive : ""}`}>
      {label && (
        <h2 id={`${label}Label`} className={styles.selectLabel}>
          {label}
        </h2>
      )}

      <div aria-labelledby={`${label}Label`} className={styles.selectWrapper}>
        <SelectTrigger
          def={name}
          handleClick={() => {
            setActive((prev) => !prev);
          }}
        />
        <SelectOptions position={position}>
          {list.map((l, i) => {
            return (
              <SelectItem
                index={i}
                checked={checked.id === l.deviceId}
                handleHovered={handleHovered}
                hovered={hovered}
                handleChecked={handleChecked}
                handleName={handleName}
                key={l.deviceId}
                hoveredIndex={hoveredIndex}
                handleHoveredIndex={handleHoveredIndex}
                id={l.deviceId}
                value={l.label}
                closeHandler={() => {
                  setActive((prev) => {
                    if (!prev === false) {
                      setHoveredIndex(-1);
                      setHover(null);
                    }
                    return !prev;
                  });
                }}
              />
            );
          })}
        </SelectOptions>
      </div>
    </div>
  );
};

interface SelectTriggerProps {
  def?: string;
  handleClick: () => void;
}

const SelectTrigger: React.FC<SelectTriggerProps> = ({
  def = "Select value...",
  handleClick,
}) => {
  return (
    <div
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.code == "Space") {
          handleClick();
        }
      }}
      tabIndex={0}
      title={def}
      onClick={handleClick}
      className={styles.selectTrigger}>
      <p className={styles.selectTriggerText}>{def}</p>
    </div>
  );
};

interface SelectOptionsProps {
  children: React.ReactNode;
  position?: "top" | "bottom";
}

const SelectOptions: React.FC<SelectOptionsProps> = ({
  children,
  position,
}) => {
  return (
    <ul
      className={`${styles.selectOptions} ${
        position === "top" ? styles.top : ""
      }`}>
      {children}
    </ul>
  );
};

interface SelectItemProps {
  value: string;
  id?: string;
  checked: boolean;
  hovered: null | { id: string; index: number };
  handleChecked: (value: string, id: number) => void;
  handleHovered: (value: string, index: number) => void;
  handleHoveredIndex: (value: number) => void;
  handleName: (value: string) => void;
  closeHandler: () => void;
  index: number;
  hoveredIndex: number;
}

const SelectItem: React.FC<SelectItemProps> = ({
  value,
  id,
  checked,
  handleChecked,
  closeHandler,
  handleName,
  hovered,
  handleHovered,
  hoveredIndex,
  handleHoveredIndex,
  index,
}) => {
  const item = useRef<null | HTMLLIElement>(null);
  useEffect(() => {
    if (hoveredIndex === index) {
      item.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });

      if (hoveredIndex === -1 && index === 0) {
        item.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      }
    }
  }, [hoveredIndex, index]);

  return (
    <li
      ref={item}
      onKeyDown={(e) => {
        // e.stopPropagation();
        // if (e.key === "Enter" || e.code == "Space") {
        //   // if (index === hoveredIndex) {
        //   //   return;
        //   // }
        //   alert(2);
        //   handleChecked(id!, index);
        //   closeHandler();
        //   handleName(value);
        // }
      }}
      onMouseEnter={(e) => {
        if (hoveredIndex > -1) {
          handleHoveredIndex(index);
        }
        handleHovered(id!, index);
      }}
      onClick={() => {
        handleChecked(id!, index);

        closeHandler();
        handleName(value);
      }}
      data-value={id}
      className={`${styles.selectOption} ${
        checked &&
        (hovered?.id === id || !hovered) &&
        (hoveredIndex === index || hoveredIndex === -1)
          ? styles.checked
          : ""
      } 
       ${!checked && hovered?.id === id ? styles.hovered : ""} 
       ${!checked && hoveredIndex === index ? styles.hov : ""}
       
       `}>
      <p title={value} className={styles.selectText}>
        {value}
      </p>
    </li>
  );
};

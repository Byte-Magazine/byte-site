import { ReactElement, useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

export default function Tooltip({ children, tip }): ReactElement {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <span
      className={styles.wrapper}
      onClick={() => {
        setIsVisible(true);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      }}
      onMouseEnter={() => {
        setIsVisible(true);
      }}
      onMouseLeave={() => {
        setIsVisible(false);
      }}
    >
      <span className={styles.text}>{children}</span>
      <span
        className={clsx(styles.tooltip, {
          [styles.show]: isVisible,
          [styles.hide]: !isVisible,
        })}
      >
        {tip}
      </span>
    </span>
  );
}

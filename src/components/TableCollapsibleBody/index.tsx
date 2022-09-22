import React from "react";
import { useEffect, useRef } from "react";
import styles from "./index.module.css";

const TableCollapsibleBody = ({
  children,
  open,
}: {
  children: React.ReactNode;
  open: boolean;
}) => {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      if (open) {
        bodyRef.current.style.maxHeight = `${bodyRef.current.scrollHeight}px`;
      } else {
        bodyRef.current.style.maxHeight = "0px";
      }
    }
  }, [open]);

  return (
    <div className={styles.container} ref={bodyRef}>
      {children}
    </div>
  );
};

export default TableCollapsibleBody;

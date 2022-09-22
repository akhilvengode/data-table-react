import React from "react";
import styles from "./index.module.css";

const TableContainer = ({ children }: { children: React.ReactNode }) => (
  <div className={styles["table-container"]}>{children}</div>
);

export default TableContainer;

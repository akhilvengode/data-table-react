import React from "react";
import { joinClasses } from "../../utils";
import styles from "./index.module.css";

const TableContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={joinClasses(styles["table-container"], className || "")}>
    {children}
  </div>
);

export default TableContainer;

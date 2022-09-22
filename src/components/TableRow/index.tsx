import React from "react";
import { joinClasses } from "../../utils";
import styles from "./index.module.css";

const TableRow = ({
  children,
  onClick = () => {},
  clickable = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  clickable?: boolean;
}) => {
  return (
    <tr
      className={joinClasses(
        styles["table-row"],
        (clickable && styles["table-row--clickable"]) || ""
      )}
      onClick={onClick}
    >
      {children}
    </tr>
  );
};

export default TableRow;

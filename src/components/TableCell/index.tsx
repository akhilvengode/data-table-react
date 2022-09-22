import React from "react";
import { joinClasses } from "../../utils";
import styles from "./index.module.css";

interface TableCellType {
  isHead?: boolean;
  children: React.ReactNode;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
  colspan?: number;
  width?: string;
}

const TableCell = ({
  isHead,
  children,
  onClick = () => {},
  clickable = false,
  className,
  colspan = 1,
  width,
}: TableCellType) => {
  return isHead ? (
    <th
      style={{ width }}
      colSpan={colspan}
      className={joinClasses(
        styles["table-cell"],
        styles["table-cell--header"],
        className || ""
      )}
      onClick={onClick}
    >
      {children}
    </th>
  ) : (
    <td
      colSpan={colspan}
      onClick={onClick}
      className={joinClasses(
        styles["table-cell"],
        (clickable && styles["table-cell--clickable"]) || "",
        className || ""
      )}
    >
      {children}
    </td>
  );
};

export default TableCell;

import React from "react";
import { joinClasses } from "../../utils";
import styles from "./index.module.css";

const TableCaption = ({
  children,
  position,
}: {
  children: React.ReactNode;
  position: "top" | "bottom";
}) => {
  return (
    <caption
      className={joinClasses(
        styles["table-caption"],
        (position === "bottom" && styles["table-caption--bottom"]) || ""
      )}
    >
      {children}
    </caption>
  );
};

export default TableCaption;

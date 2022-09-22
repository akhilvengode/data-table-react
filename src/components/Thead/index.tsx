import { ColumnType } from "../../types/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons/faSortUp";
import { faSortDown } from "@fortawesome/free-solid-svg-icons/faSortDown";
import TableCell from "../TableCell";
import TableRow from "../TableRow";
import styles from "./index.module.css";
import { joinClasses } from "../../utils";
import { useRef } from "react";
import React from "react";

const Thead = ({
  columns,
  onSort,
  sortField,
  sortDir,
  collapsible,
}: {
  columns: Array<ColumnType>;
  onSort: (field: number, sortable: boolean) => void;
  sortField?: number;
  sortDir?: "asc" | "dec";
  collapsible?: boolean;
}) => {
  const offset = useRef(0);
  const renderHeader = () => {
    const columnsClone = columns.slice();
    if (collapsible) {
      offset.current = 1;
      columnsClone.unshift({
        id: "collapsible",
        content: "",
        name: "collapse", // here it is not required, added to remove type error.
        width: "6%",
      });
    }

    return columnsClone.map(({ id, content, sortable, width }, idx) => (
      <TableCell
        width={width}
        isHead
        key={id || idx}
        onClick={() => onSort(idx - offset.current, !!sortable)}
      >
        <div
          className={joinClasses(
            styles.thead__content,
            (sortable && styles["thead__content--sortable"]) || "",
            (sortField === idx - 1 &&
              styles["thead__content--current-sort-field"]) ||
              ""
          )}
        >
          {content}
          {sortable && (
            <FontAwesomeIcon
              icon={(sortDir === "dec" && faSortDown) || faSortUp}
              className={styles.thead__icon}
            />
          )}
        </div>
      </TableCell>
    ));
  };
  return (
    <thead>
      <TableRow>{renderHeader()}</TableRow>
    </thead>
  );
};

export default Thead;

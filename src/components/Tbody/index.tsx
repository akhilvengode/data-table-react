import React, { useState, Fragment } from "react";
import { ColumnType, RowType, TbodyTypes } from "../../types/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown";
import Button from "../Button";
import TableCell from "../TableCell";
import TableCollapsibleBody from "../TableCollapsibleBody";
import TableRow from "../TableRow";
import styles from "./index.module.css";
import { joinClasses } from "../../utils";

const Tbody = ({
  data,
  columns,
  onRowClick,
  collapsible,
  collapsibleBody,
  rowStyle,
  className,
}: TbodyTypes) => {
  const [collapsibleState, setCollapsibleState] = useState<Array<boolean>>([]);
  const handleClick = (rowData: RowType) => {
    if (onRowClick) {
      onRowClick(rowData);
    }
  };

  const handleCellClick = (
    rowData: RowType,
    clickCallback: ((rowData: RowType) => void) | undefined
  ) => {
    if (clickCallback) {
      clickCallback(rowData);
    }
  };

  const renderCells = (rowData: RowType, rowIndex: number) => {
    const columnsClone = columns.slice();
    if (collapsible) {
      columnsClone.unshift({
        id: "collapsible",
        content: "",
        name: () => (
          <Button
            className={styles["tbody__collapsible-button"]}
            onClick={(event) => {
              event.stopPropagation();
              const currentState = collapsibleState.slice();
              currentState[rowIndex] = !currentState[rowIndex];
              setCollapsibleState(currentState);
            }}
          >
            <FontAwesomeIcon
              icon={collapsibleState[rowIndex] ? faArrowUp : faArrowDown}
            />
          </Button>
        ),
      });
    }

    return columnsClone.map(({ name, onClick, className }, idx) => (
      <TableCell
        key={idx}
        clickable={!!onClick}
        onClick={() => handleCellClick(rowData, onClick)}
        className={joinClasses(styles.tbody__cell, className || "")}
      >
        {typeof name === "string"
          ? rowData[name as keyof typeof rowData]
          : name(rowData)}
      </TableCell>
    ));
  };

  return (
    <tbody className={joinClasses(styles.tbody, className || "")}>
      {data.map((rowData, rowIdx) => {
        const row = (
          <Fragment key={rowData.id || rowIdx}>
            <TableRow
              className={rowStyle}
              onClick={() => handleClick(rowData)}
              clickable={!!onRowClick}
            >
              {renderCells(rowData, rowIdx)}
            </TableRow>
            {collapsible && collapsibleBody && (
              <TableRow>
                <TableCell
                  className={styles["collapsible-body"]}
                  colspan={columns.length + 1}
                >
                  <TableCollapsibleBody open={collapsibleState[rowIdx]}>
                    {collapsibleBody(rowData)}
                  </TableCollapsibleBody>
                </TableCell>
              </TableRow>
            )}
          </Fragment>
        );

        return row;
      })}
    </tbody>
  );
};

export default Tbody;

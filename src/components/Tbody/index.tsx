import { useState, Fragment } from "react";
import { ColumnType, RowType } from "../../types/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown";
import Button from "../Button";
import TableCell from "../TableCell";
import TableCollapsibleBody from "../TableCollapsibleBody";
import TableRow from "../TableRow";
import styles from "./index.module.css";
import React from "react";

const Tbody = ({
  data,
  columns,
  onRowClick,
  collapsible,
  collapsibleKey,
}: {
  data: Array<RowType>;
  columns: Array<ColumnType>;
  onRowClick?: (rowData: RowType) => void;
  collapsible?: boolean;
  collapsibleKey?: string;
}) => {
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
        name: (data) => (
          <Button
            onClick={() => {
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

    return columnsClone.map(({ name, onClick }, idx) => (
      <TableCell
        key={idx}
        clickable={!!onClick}
        onClick={() => handleCellClick(rowData, onClick)}
      >
        {typeof name === "string"
          ? rowData[name as keyof typeof rowData]
          : name(rowData)}
      </TableCell>
    ));
  };

  return (
    <tbody>
      {data.map((rowData, rowIdx) => {
        const row = (
          <Fragment key={rowData.id || rowIdx}>
            <TableRow
              onClick={() => handleClick(rowData)}
              clickable={!!onRowClick}
            >
              {renderCells(rowData, rowIdx)}
            </TableRow>
            {collapsible && collapsibleKey && (
              <TableRow>
                <TableCell
                  className={styles["collapsible-body"]}
                  colspan={columns.length + 2}
                >
                  <TableCollapsibleBody open={collapsibleState[rowIdx]}>
                    {rowData[collapsibleKey as keyof typeof rowData]}
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

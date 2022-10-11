import React from "react";
import { useData } from "./useData";
import TableContainer from "../TableContainer";
import Thead from "../Thead";
import { TableTypes } from "../../types/Table";
import Tbody from "../Tbody";
import TableCaption from "../TableCaption";
import Pagination from "../Pagination";
import styles from "./index.module.css";
import { joinClasses } from "../../utils";

const Table = ({
  columns,
  rows,
  caption,
  captionPosition = "top",
  pagination,
  perPage,
  itemsPerPageOptions,
  defaultSortField,
  collapsible,
  collapsibleBody,
  onRowClick,
  wrapperStyle,
  containerStyle,
  headerStyle,
  tbodyStyle,
  rowStyle,
  fixedHeader,
}: TableTypes) => {
  const {
    rowsState,
    onNextPage,
    onPerPageChange,
    onPreviousPage,
    onSort,
    itemsPerPage,
    pageNo,
    sortField,
    sortDir,
  } = useData(rows, columns, perPage, pagination, defaultSortField);

  return (
    <TableContainer className={containerStyle}>
      <div className={joinClasses(styles.table__wrapper, wrapperStyle || "")}>
        <table className={styles.table}>
          {caption && (
            <TableCaption position={captionPosition}>{caption}</TableCaption>
          )}
          <Thead
            collapsible={collapsible}
            columns={columns}
            onSort={onSort}
            sortField={sortField}
            sortDir={sortDir}
            fixedHeader={fixedHeader}
            headerStyle={headerStyle}
          />
          <Tbody
            className={tbodyStyle}
            collapsible={collapsible}
            collapsibleBody={collapsibleBody}
            columns={columns}
            data={rowsState}
            onRowClick={onRowClick}
            rowStyle={rowStyle}
          />
        </table>
        {pagination && (
          <Pagination
            onNextPage={onNextPage}
            onPreviousPage={onPreviousPage}
            perPage={itemsPerPage}
            onPerPageChange={onPerPageChange}
            totalItems={rows.length}
            startIndex={(pageNo - 1) * itemsPerPage + 1}
            endIndex={
              pageNo * itemsPerPage > rows.length
                ? rows.length
                : pageNo * itemsPerPage
            }
          />
        )}
      </div>
    </TableContainer>
  );
};

export default Table;

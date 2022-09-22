import { useData } from "./useData";
import TableContainer from "../TableContainer";
import Thead from "../Thead";
import { TableTypes } from "../../types/Table";
import Tbody from "../Tbody";
import TableCaption from "../TableCaption";
import Pagination from "../Pagination";
import styles from "./index.module.css";
import React from "react";

const Table = ({
  columns,
  rows,
  caption,
  captionPosition = "top",
  pagination,
  perPage,
  defaultSortField,
  collapsible,
  collapsibleKey,
  onRowClick,
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
  } = useData(rows, columns, perPage, pagination);

  return (
    <TableContainer>
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
        />
        <Tbody
          collapsible={collapsible}
          collapsibleKey={collapsibleKey}
          columns={columns}
          data={rowsState}
          onRowClick={onRowClick}
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
    </TableContainer>
  );
};

export default Table;

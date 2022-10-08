import styles from "./index.module.css";
import PaginationButton from "../PaginationButton";
import Dropdown from "../Dropdown";
import React from "react";

interface PaginationType {
  onNextPage: () => void;
  onPreviousPage: () => void;
  perPage: number;
  totalItems: number;
  startIndex: number;
  endIndex: number;
  onPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Pagination = ({
  onNextPage,
  onPreviousPage,
  perPage,
  onPerPageChange,
  totalItems,
  startIndex,
  endIndex,
}: PaginationType) => {
  return (
    <div className={styles.pagination}>
      <div>
        <Dropdown
          label="Rows per page"
          value={perPage}
          options={[5, 10, 15, 20]}
          onChange={onPerPageChange}
        />
      </div>
      <div
        className={styles.pagination__pageno}
      >{`${startIndex} - ${endIndex} of ${totalItems}`}</div>
      <div>
        <PaginationButton type="button" dir="left" onClick={onPreviousPage} />
        <PaginationButton type="button" dir="right" onClick={onNextPage} />
      </div>
    </div>
  );
};

export default Pagination;

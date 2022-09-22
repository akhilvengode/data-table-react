import { useEffect, useRef, useState } from "react";
import { stringSort } from "../../utils";
import { ColumnType, RowType } from "../../types/Table";

interface SortData {
  rows: Array<RowType>;
  columns: Array<ColumnType>;
  sortField: number;
  sortDir: "asc" | "dec";
}

const getRows = (rows: Array<RowType>, pageNo: number, perPage: number) => {
  const result = rows.slice((pageNo - 1) * perPage, pageNo * perPage);

  return result;
};

const sortRows = ({ rows, columns, sortField, sortDir = "asc" }: SortData) => {
  const { sortFunction, name } = columns[sortField];
  const rowClone = rows.slice();
  if (typeof name === "string") {
    rowClone.sort((first, second) => {
      const item1 = first[name as keyof typeof first]!;
      const item2 = second[name as keyof typeof second]!;
      if (sortFunction) {
        return sortFunction(item1, item2);
      }
      return stringSort(item1, item2);
    });
  } else {
    rowClone.sort((first, second) => {
      const item1 = name(first);
      const item2 = name(second);
      if (sortFunction) {
        return sortFunction(item1, item2);
      }

      return stringSort(item1 as string, item2 as string);
    });
  }

  if (sortDir === "dec") {
    return rowClone.reverse();
  }

  return rowClone;
};

export const useData = (
  rows: Array<RowType>,
  columns: Array<ColumnType>,
  perPage?: number,
  pagination?: boolean
) => {
  const [pageNo, setPageNo] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(perPage || 5);
  const [rowsState, setRows] = useState(
    (pagination && getRows(rows, 1, perPage as number)) || rows
  );
  const [columnState, setColumnState] = useState(columns);

  useEffect(() => {
    if (pagination) {
      let sortedList;
      if (sortField !== undefined) {
        sortedList = sortRows({
          rows,
          columns: columnState,
          sortField,
          sortDir: sortDir || "asc",
        });
      }

      const updatedList = getRows(sortedList || rows, pageNo, itemsPerPage);
      if (rows.length !== 0 && updatedList.length === 0) {
        setPageNo((prev) => prev - 1);
      } else {
        setRows(updatedList);
      }
    } else {
      setRows(rows);
    }
  }, [rows, itemsPerPage, pageNo, pagination]);

  useEffect(() => {
    setItemsPerPage(perPage || 5);
  }, [perPage]);

  const [sortField, setSortField] = useState<number>();
  const [sortDir, setSortDir] = useState<"asc" | "dec">();
  const isSortFieldChange = useRef(false);

  useEffect(() => {
    if (sortField !== undefined) {
      isSortFieldChange.current = true;
      const { dir } = columns[sortField];
      const sortedList = sortRows({
        rows,
        columns,
        sortField,
        sortDir: dir || "asc",
      });
      setRows(getRows(sortedList, pageNo, itemsPerPage));
      setSortDir(dir || "asc");
    }
  }, [sortField]);

  useEffect(() => {
    if (isSortFieldChange.current) {
      isSortFieldChange.current = false;
    } else {
      if (sortField !== undefined) {
        const sortedList = sortRows({
          rows,
          columns,
          sortField,
          sortDir: sortDir || "asc",
        });

        setRows(getRows(sortedList, pageNo, itemsPerPage));
      }
    }
  }, [sortDir]);

  const onNextPage = () => {
    if (pageNo * itemsPerPage < rows.length) {
      setPageNo((prev) => prev + 1);
    }
  };

  const onPreviousPage = () => {
    if (pageNo !== 1) {
      setPageNo((prev) => prev - 1);
    }
  };

  const onPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(+event.target.value);
  };

  const onSort = (field: number, sortable: boolean) => {
    if (sortable) {
      if (field !== sortField) {
        setSortField(field);
      } else {
        setSortDir((prev) => (prev === "asc" ? "dec" : "asc"));
      }
    }
  };

  return {
    onNextPage,
    onPreviousPage,
    onPerPageChange,
    onSort,
    rowsState,
    itemsPerPage,
    pageNo,
    sortField,
    sortDir,
  };
};

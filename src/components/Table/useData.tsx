import { useEffect, useRef, useState } from "react";
import { stringSort } from "../../utils";
import { ColumnType, RowType } from "../../types/Table";

interface SortData {
  rows: Array<RowType>;
  columns: Array<ColumnType>;
  sortField: number;
  sortDir: "asc" | "dec";
}

const getRows = (
  rows: Array<RowType>,
  pageNo: number,
  perPage: number,
  pagination?: boolean
) => {
  if (!pagination) {
    return rows;
  }
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
  pagination?: boolean,
  defaultSortField?: number
) => {
  const [pageNo, setPageNo] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(perPage || 5);
  const [rowsState, setRows] = useState(
    getRows(rows, 1, perPage as number, pagination)
  );

  useEffect(() => {
    if (pagination) {
      let sortedList;
      if (sortData.current?.sortField !== undefined) {
        sortedList = sortRows({
          rows,
          columns,
          sortField: sortData.current.sortField,
          sortDir: sortData.current.sortDir,
        });
      }

      const updatedList = getRows(
        sortedList || rows,
        pageNo,
        itemsPerPage,
        pagination
      );
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

  const sortData = useRef<{ sortField: number; sortDir: "asc" | "dec" } | null>(
    defaultSortField !== undefined
      ? {
          sortField: defaultSortField,
          sortDir: columns[defaultSortField]?.dir || "asc",
        }
      : null
  );

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
    if (!sortable) {
      return;
    }

    if (sortData.current) {
      const { sortField, sortDir } = sortData.current;
      if (field !== sortField) {
        const { dir = "asc" } = columns[field];
        const sortedList = sortRows({
          rows,
          columns,
          sortField: field,
          sortDir: dir,
        });
        setRows(getRows(sortedList, pageNo, itemsPerPage, pagination));
        sortData.current = { sortField: field, sortDir: dir };
      } else {
        const sortedList = sortRows({
          rows,
          columns,
          sortField: field,
          sortDir: sortDir === "asc" ? "dec" : "asc",
        });
        setRows(getRows(sortedList, pageNo, itemsPerPage, pagination));
        sortData.current.sortDir = sortDir === "asc" ? "dec" : "asc";
      }
    } else {
      const { dir = "asc" } = columns[field];
      const sortedList = sortRows({
        rows,
        columns,
        sortField: field,
        sortDir: dir,
      });
      setRows(getRows(sortedList, pageNo, itemsPerPage, pagination));
      sortData.current = { sortField: field, sortDir: dir };
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
    sortField: sortData.current?.sortField,
    sortDir: sortData.current?.sortDir,
  };
};

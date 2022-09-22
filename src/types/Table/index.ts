type GetNameFunctionType = (rowData: Record<string, any>) => React.ReactNode;

export interface ColumnType {
  name: string | GetNameFunctionType;
  id?: string;
  content?: string;
  sortable?: boolean;
  dir?: "asc" | "dec";
  sortKey?: string;
  sortFunction?: (first: any, second: any) => number;
  onClick?: (rowData: RowType) => void;
  width?: string;
}

export interface RowType {
  id?: string;
}

export interface TableTypes {
  columns: Array<ColumnType>;
  rows: Array<RowType>;
  caption?: string;
  captionPosition?: "bottom" | "top";
  pagination?: boolean;
  perPage?: number;
  defaultSortField?: number;
  onRowClick?: (rowData: RowType) => void;
  collapsible?: boolean;
  collapsibleKey?: string;
}

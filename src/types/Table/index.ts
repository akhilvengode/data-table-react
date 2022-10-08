type GetNameFunctionType = (rowData?: Record<string, any>) => React.ReactNode;

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
  className?: string;
}

export type RowType = Record<string, any>;

export interface TableTypes {
  columns: Array<ColumnType>;
  rows: Array<RowType>;
  caption?: string;
  captionPosition?: "bottom" | "top";
  pagination?: boolean;
  itemsPerPageOptions?: Array<number>;
  perPage?: number;
  defaultSortField?: number;
  onRowClick?: (rowData: RowType) => void;
  collapsible?: boolean;
  collapsibleBody?: (row: RowType) => React.ReactNode;
  wrapperStyle?: string;
  containerStyle?: string;
  tableStyle?: string;
  headerStyle?: string;
  rowStyle?: string;
  tbodyStyle?: string;
  fixedHeader?: boolean;
}

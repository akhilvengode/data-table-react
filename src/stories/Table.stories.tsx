import React from "react";
import { Meta, Story } from "@storybook/react";
import { Table } from "..";
import { RowType, TableTypes } from "../types/Table";
import constants from "./constants";
import styles from "./Table.module.css";

const { columns, rows, customColumn1, customRows1, customColumn2 } = constants;

export default {
  title: "Table",
  component: Table,
  argTypes: {
    perPage: { control: "number", if: { arg: "pagination" } },
    collapsibleKey: { control: "string", if: { arg: "collapsible" } },
    captionPosition: { controls: "radio", if: { arg: "caption" } },
  },
} as Meta;

const Template: Story<TableTypes> = (args) => <Table {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  columns,
  rows: rows.slice(0, 7),
};
Simple.parameters = { controls: { include: [] } };

export const TableCaption = Template.bind({});
TableCaption.args = {
  columns,
  rows: rows.slice(0, 7),
  onRowClick: undefined,
  caption: "Table Caption",
};
TableCaption.parameters = {
  controls: { include: ["caption", "captionPosition"] },
};

export const Pagination = Template.bind({});
Pagination.args = {
  columns,
  rows,
  pagination: true,
  onRowClick: undefined,
};
Pagination.parameters = { controls: { include: ["pagination", "perPage"] } };

export const CustomColumn = Template.bind({});
const columnClone = columns.slice();
columnClone.push({
  id: "4",
  name: (row) => (row?.age > 18 ? "Adult" : "Not Adult"),
  content: "Adult or Not",
});
CustomColumn.args = {
  columns: columnClone,
  rows: rows.slice(0, 7),
  onRowClick: undefined,
};

CustomColumn.parameters = { controls: { include: [] } };

export const BasicSort = Template.bind({});
const sortColumns = columns.slice();
sortColumns[0] = { ...sortColumns[0], sortable: true };
BasicSort.args = {
  columns: sortColumns,
  rows: rows.slice(0, 7),
  onRowClick: undefined,
};
BasicSort.parameters = { controls: { include: ["columns"] } };

export const DefaultSortField = Template.bind({});
DefaultSortField.args = {
  columns: sortColumns,
  rows: rows.slice(0, 7),
  onRowClick: undefined,
  defaultSortField: 0,
};
DefaultSortField.parameters = {
  controls: { include: [] },
};

export const CustomSortFunction = Template.bind({});
const customSortColumns = columns.slice();
customSortColumns[1] = {
  ...customSortColumns[1],
  sortable: true,
  sortFunction: (a, b) => a - b,
};
CustomSortFunction.args = {
  columns: customSortColumns,
  rows: rows.slice(0, 7),
  onRowClick: undefined,
  defaultSortField: 1,
};

export const Collapsible = Template.bind({});

const getCustomUI = (row: RowType) => {
  const { name, sex, age } = row;

  return (
    <div style={{ padding: "1rem", backgroundColor: "lightblue" }}>
      <h1>Information</h1>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Sex: {sex}</li>
      </ul>
    </div>
  );
};
Collapsible.args = {
  columns,
  rows: rows.slice(0, 7),
  collapsible: true,
  collapsibleBody: getCustomUI,
};

export const Overflow = Template.bind({});

Overflow.args = {
  columns,
  rows,
  onRowClick: undefined,
  wrapperStyle: styles.table__wrapper,
};

Overflow.parameters = {
  controls: { include: [] },
};

export const FixedHeader = Template.bind({});

FixedHeader.args = {
  columns,
  rows,
  onRowClick: undefined,
  wrapperStyle: styles.table__wrapper,
  fixedHeader: true,
};

export const CustomTable1 = Template.bind({});

CustomTable1.args = {
  columns: customColumn1,
  rows: customRows1,
  onRowClick: undefined,
  containerStyle: styles["custom-table1__container"],
  headerStyle: styles["custom-table1__header"],
  rowStyle: styles["custom-table1__row"],
};

export const CustomTable2 = Template.bind({});

CustomTable2.args = {
  columns: customColumn2,
  rows: customRows1,
  onRowClick: undefined,
  headerStyle: styles["custom-table2__header"],
  rowStyle: styles["custom-table2__row"],
  tbodyStyle: styles["custom-table2__body"],
};

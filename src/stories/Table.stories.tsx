import React from "react";
import { Meta, Story } from "@storybook/react";
import { Table } from "..";
import { ColumnType, TableTypes } from "../types/Table";

export default {
  title: "Table",
  component: Table,
} as Meta;

const columns: Array<ColumnType> = [
  {
    name: "name",
    id: "1",
    content: "Name",
    // onClick: (rowData: Record<string, any>) => {
    //   console.log(rowData.id, rowData.name);
    // },
  },
  {
    name: "age",
    id: "2",
    content: "Age",
  },
  {
    name: "sex",
    id: "3",
    content: "Sex",
  },
  //   {
  //     name: (row: Record<string, number>) =>
  //       row.age > 18 ? "Adult" : "Not Adult",
  //     id: "4",
  //     content: "Adult or Not",
  //   },
];

const rows = [
  { id: "1", name: "Akhil M L", age: 26, sex: "Male" },
  { id: "2", name: "Tony C J", age: 25, sex: "Male" },
  { id: "3", name: "Aparna V K", age: 25, sex: "Female" },
  { id: "4", name: "Amal S R", age: 25, sex: "Male" },
  { id: "5", name: "Akhil M L", age: 26, sex: "Male" },
  { id: "6", name: "Tony C J", age: 25, sex: "Male" },
  { id: "7", name: "Aparna V K", age: 25, sex: "Female" },
  { id: "8", name: "Amal S R", age: 25, sex: "Male" },
  { id: "9", name: "Akhil M L", age: 26, sex: "Male" },
  { id: "10", name: "Tony C J", age: 25, sex: "Male" },
  { id: "11", name: "Aparna V K", age: 25, sex: "Female" },
  { id: "12", name: "Amal S R", age: 25, sex: "Male" },
  { id: "13", name: "Akhil M L", age: 26, sex: "Male" },
  { id: "14", name: "Tony C J", age: 25, sex: "Male" },
  { id: "15", name: "Aparna V K", age: 25, sex: "Female" },
  { id: "16", name: "Amal S R", age: 25, sex: "Male" },
  { id: "17", name: "Akhil M L", age: 26, sex: "Male" },
  { id: "18", name: "Tony C J", age: 25, sex: "Male" },
  { id: "19", name: "Aparna V K", age: 25, sex: "Female" },
  { id: "20", name: "Amal S R", age: 25, sex: "Male" },
  { id: "21", name: "Akhil M L", age: 26, sex: "Male" },
  { id: "22", name: "Tony C J", age: 25, sex: "Male" },
  { id: "23", name: "Aparna V K", age: 25, sex: "Female" },
  { id: "24", name: "Amal S R", age: 25, sex: "Male" },
];

const Template: Story<TableTypes> = (args) => <Table {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  columns,
  rows,
};

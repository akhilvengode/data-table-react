import { ColumnType } from "../types/Table";
import styles from "./Table.module.css";

// console.log(styles["custom-table1__clickable-cell"]);
console.log(styles);

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

const columns: Array<ColumnType> = [
  {
    name: "name",
    id: "1",
    content: "Name",
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
];

const customColumn1: Array<ColumnType> = [
  { content: "Order", name: "order", id: "1" },
  {
    content: "Name",
    name: "name",
    id: "2",
    onClick: () => {},
    className: styles["custom-table1__clickable-cell"],
  },
  { content: "Occupation", name: "occupation", id: "3" },
  { content: "Contact", name: "contact", id: "4" },
  { content: "Education", name: "education", id: "5" },
  {
    content: "",
    name: () => "Details",
    id: "6",
    onClick: () => {},
    className: styles["custom-table1__clickable-cell"],
  },
];

const customRows1 = [
  {
    order: "1392",
    name: "James Yates",
    occupation: "Web Designer",
    contact: "+63 983 0962 971",
    education: "NY University",
  },
  {
    order: "4616",
    name: "Matthew Wasil",
    occupation: "Graphic Designer",
    contact: "+63 983 0962 971",
    education: "London College",
  },
  {
    order: "9841",
    name: "Gaspar Semenov",
    occupation: "Mobile Dev",
    contact: "+63 983 0962 971",
    education: "Senior High",
  },
  {
    order: "9548",
    name: "Sampson Murphy",
    occupation: "Illustrator",
    contact: "+63 983 0962 971",
    education: "Senior High",
  },
  {
    order: "4616",
    name: "James Yates",
    occupation: "Web Designer",
    contact: "+63 983 0962 971",
    education: "London College",
  },
  {
    order: "9548",
    name: "Matthew Wasil",
    occupation: "Illustrator",
    contact: "+63 983 0962 971",
    education: "NY University",
  },
];

const customColumn2: Array<ColumnType> = [
  { content: "Order", name: "order", id: "1" },
  {
    content: "Name",
    name: "name",
    id: "2",
  },
  { content: "Occupation", name: "occupation", id: "3" },
  { content: "Contact", name: "contact", id: "4" },
  { content: "Education", name: "education", id: "5" },
  {
    content: "",
    name: () => "Details",
    id: "6",
  },
];

const constants = {
  columns,
  rows,
  customColumn1,
  customRows1,
  customColumn2,
};

// {
//     name: (row) => (row?.age > 18 ? "Adult" : "Not Adult"),
//     id: "4",
//     content: "Adult or Not",
//   },

export default constants;

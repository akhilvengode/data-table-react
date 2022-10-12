# data-table-react
### A data table component for react projects.

Main features
  - Pagination
  - Sorting
  - Collapsible rows
  - Custom styling
### Documentation [https://akhilvengode.github.io/data-table-react](https://akhilvengode.github.io/data-table-react)

### Installation and Usage

```
npm install @akhilvengode/data-table-react@0.0.7
```

```js
import React from "react";
import { Table } from "@akhilvengode/data-table-react";

const rows = [
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
  }
];

const columns = [
  { content: "Order", name: "order", id: "1" },
  { content: "Name", name: "name", id: "2" },
  { content: "Occupation", name: "occupation", id: "3" },
  { content: "Contact", name: "contact", id: "4" },
  { content: "Education", name: "education", id: "5" }
];

const App = () => {
  return (
    <div style={{ margin: '1rem' }}>
      <Table rows={rows} columns={columns} />
    </div>
  );
};

export default App;
```

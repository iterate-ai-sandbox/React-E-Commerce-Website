import React from "react";
import { Select } from "@chakra-ui/react";
export default function Sorting({
  setSort
}) {
  return <Select onChange={e => setSort(e.target.value)} placeholder="All" bg="var(--lightBorderColor3)" outline="none" border="none">
      <option value="increment" data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiYzE2OTQ0MjEtNTY4ZS00M2VjLWEzNWItNmFmNDk4M2FjYzM3IiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9ob21lL1NvcnRpbmcuanN4In0=">Price: Low to High</option>
      <option value="decrement" data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiYWEwNGY0NGUtNDc4My00ZjU1LWEyYmMtODQ3NzViZGM1NmJhIiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9ob21lL1NvcnRpbmcuanN4In0=">Price: High to Low</option>
    </Select>;
}
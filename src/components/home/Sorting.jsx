import React from "react";
import { Select } from "@chakra-ui/react";
export default function Sorting({
  setSort
}) {
  return <Select onChange={e => setSort(e.target.value)} placeholder="All" bg="var(--lightBorderColor3)" outline="none" border="none">
      <option value="increment" data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiODFkM2E3NjYtMzZiNS00NDI1LWIyMjQtNWVhNGMzZDU4Mjg2IiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9ob21lL1NvcnRpbmcuanN4In0=">Price: Low to High</option>
      <option value="decrement" data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiM2FkYjcxYTMtYWVlZS00NzZlLWI0M2MtZGFlNDg4ZmQ0NDA3IiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9ob21lL1NvcnRpbmcuanN4In0=">Price: High to Low</option>
    </Select>;
}
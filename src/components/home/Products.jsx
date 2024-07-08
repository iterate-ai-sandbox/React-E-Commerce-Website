import { Grid } from "@chakra-ui/react";
import mixpanel from "mixpanel-browser";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategory, getProducts } from "../../redux/productSlice";
import Loading from "../Loading";
import Product from "./Product";
import IterateWrapper from "../../IterateUtil";
const IterateProduct = IterateWrapper(Product, {
  "data-iterate": "eyJldmVudHMiOlt7Im5hbWUiOiJwcm9kdWN0X2NsaWNrZWQiLCJhdHRyaWJ1dGVzIjp7InByb2R1Y3QiOiJNZW1iZXJFeHByZXNzaW9uIiwicHJpY2UiOiJNZW1iZXJFeHByZXNzaW9uIiwiY2F0ZWdvcnkiOiJNZW1iZXJFeHByZXNzaW9uIn19XSwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9ob21lL1Byb2R1Y3RzLmpzeCIsImlkIjoiODc5ODEzM2ItYThkMi00OTA5LWFlMDItMGZlZTFiN2Y0ZTk1In0="
});
export default function Products({
  category,
  sort
}) {
  const dispatch = useDispatch();
  const {
    products,
    productsStatus
  } = useSelector(state => state.products);
  useEffect(() => {
    if (category) {
      dispatch(getProductCategory(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);
  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const handlePageClick = event => {
    const newOffset = event.selected * itemsPerPage % products.length;
    setItemOffset(newOffset);
  };
  return <div data-iterate="eyJldmVudHMiOm51bGwsImlkIjoiNTc5Y2RkZGQtZGNkZi00Yjg1LThhZWYtNWZkZDYzMmQ0ODAzIiwiZmlsZVBhdGgiOiJzcmMvY29tcG9uZW50cy9ob21lL1Byb2R1Y3RzLmpzeCJ9">
      {productsStatus === "LOADING" ? <Loading /> : <>
          <Grid templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)"
      }} gap={6} w="full">
            {currentItems?.sort((a, b) => sort === "increment" ? a.price - b.price : b.price - a.price).map((product, id) => <IterateProduct onClick={() => {
          mixpanel.track("product_clicked", {
            product: product.name,
            price: product.price,
            category: product.category
          });
        }} key={id} product={product} />)}
          </Grid>
          <ReactPaginate className="paginate" breakLabel="..." nextLabel=">" onPageChange={handlePageClick} pageRangeDisplayed={5} pageCount={pageCount} previousLabel="<" renderOnZeroPageCount={null} />
        </>}
    </div>;
}
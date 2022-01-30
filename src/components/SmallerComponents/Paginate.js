import React, { useState } from "react";
import { ContainerDiv, InnerDiv } from "../styleComponents/divStyles";
import products from "../../products";
import Thumbnail from "./Thumbnail";
import { Pagination } from "@mui/material";
import usePagination from "./usePagination";
import { CenterDiv20 } from "../styleComponents/FlexDivs";
import { BreakDiv20 } from "../styleComponents/BreakDivs";

function Paginate(props) {
  let { data, dataLimit } = props;
  let [page, setPage] = useState(1);
  const count = Math.ceil(data.length / dataLimit);

  const dataList = usePagination(data, dataLimit);
  console.log(dataList.currentData());

  const handleChange = (e, p) => {
    setPage(p);
    dataList.jump(p);
    console.log(e);
  };

  return (
    <ContainerDiv>
      <CenterDiv20>
        {dataList.currentData().map((product) => {
          return (
            <Thumbnail
              key={product.name}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              sale={product.sale}
              description={product.details}
            ></Thumbnail>
          );
        })}
      </CenterDiv20>
      <CenterDiv20>
        <Pagination
          count={count}
          size="small"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          showFirstButton
          showLastButton
        />
      </CenterDiv20>
    </ContainerDiv>
  );
}

export default Paginate;

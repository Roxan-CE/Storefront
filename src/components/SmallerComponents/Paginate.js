import React, { useEffect, useState } from "react";
import { ContainerDiv } from "../styleComponents/divStyles";
import Thumbnail from "./Thumbnail";
import { Pagination, PaginationItem } from "@mui/material";
import usePagination from "./usePagination";
import { CenterDiv20 } from "../styleComponents/FlexDivs";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";

function Paginate(props) {
  let { data, dataLimit } = props;
  let [page, setPage] = useState(1);
  const count = Math.ceil(data.length / dataLimit);

  const dataList = usePagination(data, dataLimit);

  useEffect(() => {
    if (props.roomChanged) {
      setPage(1);
      dataList.jump(1);

      props.resetRoomChange(false);
    }
  }, [props.roomChanged]);

  const handleChange = (e, p) => {
    setPage(p);
    dataList.jump(p);
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
          shape="rounded"
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem
              components={{
                previous: ArrowLeftOutlined,
                next: ArrowRightOutlined,
              }}
              {...item}
            />
          )}
        />
      </CenterDiv20>
    </ContainerDiv>
  );
}

export default Paginate;

import React from "react";
import products from "../products";
import { BreakDiv, StyledDiv } from "./styleComponents/divStyles";
import { Dropdown } from "./styleComponents/DropdownStyles";

function DropdownBar(props) {
  const listReset = props.room
    ? products.filter((product) => product.category === props.room)
    : products;

  return (
    <Dropdown>
      <StyledDiv>
        <label for="touch">
          <h4>Sort</h4>
        </label>
        <input type="checkbox" id="touch" />

        <ul className="slide">
          <li
            onClick={() => {
              props.setList(
                listReset.sort((a, b) => a.name.localeCompare(b.name))
              );
            }}
          >
            <p>Alphabetical</p>
          </li>
          <li
            onClick={() => {
              props.setList(
                listReset.sort((a, b) => b.itemsSold - a.itemsSold)
              );
            }}
          >
            <p>Bestseller</p>
          </li>
          <li
            onClick={() => {
              props.setList(listReset.sort((a, b) => a.price - b.price));
            }}
          >
            <p>Price - Low to High</p>
          </li>
          <li
            onClick={() => {
              props.setList(listReset.sort((a, b) => b.price - a.price));
            }}
          >
            <p>Price - High to Low</p>
          </li>
          <li
            onClick={() => {
              props.setList(
                listReset.sort((a, b) => b.dateAdded - a.dateAdded)
              );
            }}
          >
            <p>Newest</p>
          </li>
          <li
            onClick={() => {
              props.setList(
                listReset.sort((a, b) => a.dateAdded - b.dateAdded)
              );
            }}
          >
            <p>Oldest</p>
          </li>
          <li
            onClick={() => {
              props.setList(listReset.filter((product) => product.sale));
            }}
          >
            <p>On Sale</p>
          </li>
          <li>
            <BreakDiv></BreakDiv>
          </li>
        </ul>
      </StyledDiv>
    </Dropdown>
  );
}

export default DropdownBar;

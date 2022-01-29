import React from "react";
import products from "../products";
import { BreakDiv } from "./styleComponents/BreakDivs";
import { StyledDiv } from "./styleComponents/divStyles";
import { Dropdown } from "./styleComponents/DropdownStyles";
import { Title1 } from "./styleComponents/TextStyles";

function DropdownBar(props) {
  const listReset = props.room
    ? products.filter((product) => product.category === props.room)
    : products;

  const options = [
    {
      name: "Alphabetical",
      action() {
        props.setList(listReset.sort((a, b) => a.name.localeCompare(b.name)));
      },
    },
    {
      name: "Bestseller",
      action() {
        props.setList(listReset.sort((a, b) => b.itemsSold - a.itemsSold));
      },
    },
    {
      name: "Price - Low to High",
      action() {
        props.setList(listReset.sort((a, b) => a.price - b.price));
      },
    },
    {
      name: "Price - High to Low",
      action() {
        props.setList(listReset.sort((a, b) => b.price - a.price));
      },
    },
    {
      name: "Newest",
      action() {
        props.setList(listReset.sort((a, b) => b.dateAdded - a.dateAdded));
      },
    },
    {
      name: "Oldest",
      action() {
        props.setList(listReset.sort((a, b) => a.dateAdded - b.dateAdded));
      },
    },
    {
      name: "On Sale",
      action() {
        props.setList(listReset.filter((product) => product.sale));
      },
    },
  ];

  return (
    <Dropdown>
      <StyledDiv>
        <label htmlFor="touch">
          <Title1>Sort</Title1>
        </label>
        <input type="checkbox" id="touch" />

        <ul className="slide">
          {options.map((option, index) => {
            return (
              <li key={index} onClick={option.action}>
                <p>{option.name}</p>
              </li>
            );
          })}
          <li>
            <BreakDiv></BreakDiv>
          </li>
        </ul>
      </StyledDiv>
    </Dropdown>
  );
}

export default DropdownBar;

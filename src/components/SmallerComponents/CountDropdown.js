import React, { useEffect, useState } from "react";
import { BreakDiv } from "../styleComponents/BreakDivs";
import { StyledDiv } from "../styleComponents/divStyles";
import { CountDropdownStyled } from "../styleComponents/DropdownStyles";
import { Title1 } from "../styleComponents/TextStyles";

function CountDropdown(props) {
  const options = [
    {
      name: "8",
      action() {
        props.resetCount(8);
      },
    },
    {
      name: "16",
      action() {
        props.resetCount(16);
      },
    },
    {
      name: "32",
      action() {
        props.resetCount(32);
      },
    },
  ];

  return (
    <CountDropdownStyled>
      <StyledDiv>
        <label htmlFor="touch2">
          <h4>Results per page</h4>
        </label>
        <input type="checkbox" id="touch2" />

        <ul className="slide2">
          {options.map((option, index) => {
            return (
              <li key={index} onClick={option.action}>
                <p>{option.name}</p>
              </li>
            );
          })}
        </ul>
      </StyledDiv>
    </CountDropdownStyled>
  );
}

export default CountDropdown;

import { createGlobalStyle } from "styled-components";
import { device } from "./components/styleComponents/device.js";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 16px;
    ${"" /* transition: background 0.2s ease-in, color 0.2s ease-in; */}
    margin: 0;
    padding: 0; 
    width: 100vw;
    letter-spacing: 1px;

    @media ${device.mobileL} {


  }
  @media ${device.laptop} {
  }

  .css-w05zow-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    border: none;
    background-color: white;
    border-bottom: solid 1px;
    border-radius: 0;
    min-width: 20px;
  }

  .css-w05zow-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover {
   background-color: white;

  }

  }

  a {
    text-decoration: none;
    color: inherit;
   
   :hover {
    letter-spacing: 3px;
   }
  }

  em {
    font-family: 'Tangerine', cursive;  
    letter-spacing: 2px;
    font-size: 1.5rem;
    font-weight: 400;

  }

  h1 {
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-weight: 300;
  }

  h3 {
    font-size: 10px;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-weight: 300;
    margin: 0;
    letter-spacing: 2px;
  }

  h4 {
    font-size: 13px;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-weight: 300;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;

  }

  ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
  }



  
  `;

import { createGlobalStyle } from "styled-components";
import { device } from "./components/styleComponents/device.js";

export const GlobalStyles = createGlobalStyle`

:root {
  font-size: 16px;
}

  body {
    background: ${({ theme }) => theme.body};
    color: rgba(0, 0, 0, 0.6);
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 16px;
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



  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    :hover {
      font-weight: 700;
      transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
    }

  }

  link {
    
  }

  em {
    font-family: 'Tangerine', cursive;  
    letter-spacing: 2px;
    font-size: 1.3rem;
    font-weight: 700;
    
  }

  h1 {
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 1rem;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-weight: 300;
  }

  h3 {
    font-size: 12px;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-weight: 300;
    margin: 0;
    letter-spacing: 2px;
  }

  h4 {
    font-size: 14px;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-weight: 300;
    margin: 0;
    padding: 0;
  }

  p {
    align-self: center;

  }

  ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
  }


}

  
  `;

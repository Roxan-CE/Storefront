import styled from "styled-components";

const FormDiv = styled.div`
  flex-wrap: wrap;
  margin: 20px 0;
  width: 300px;

  input[type="text"],
  input[type="email"],
  textarea {
    outline: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid;
    margin-bottom: 5px;
    height: 45px;
    font-family: "Cormorant Garamond", serif;
    font-size: 16px;

    ::placeholder {
    }
  }

  textarea {
    margin-top: 20px;
    resize: none;
    overflow: hidden;
  }

  input[type="button"],
  input[type="submit"] {
    border: 1px solid;
    display: inline-block;
    background-color: transparent;
    cursor: pointer;
    padding: 10px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 13px;
    font-family: "Lato", sans-serif;
    text-transform: uppercase;
    font-weight: 300;
    margin: 5px 0;
  }

  input[type="button"]:hover,
  input[type="submit"]:hover {
  }
`;

export { FormDiv };

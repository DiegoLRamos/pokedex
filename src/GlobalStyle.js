import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  }

  #root{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #2B3151;
    color: #FFF;
  }

`;
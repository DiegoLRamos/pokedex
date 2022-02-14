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

  body{
    height: 100vh;
  }

  button{
    cursor: pointer;
  }

  #root{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${ ({theme}) => theme.body };


    .btn-theme{
      position: relative;
      left: 100px;
      top: 10px;


      border: none;



      background: ${ ({theme}) => theme.btnCard };

      border-radius: 50%;

      img{
        width: 25px;
      }

    }
  }

`;
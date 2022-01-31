import styled from "styled-components";

export const PageActions = styled.div`
  display: flex;
  justify-content: center;


  button{
    padding: 10px;
    border: 0;

    margin-right: 5px;

    background: #F7B916;
    color: #2B3151;

    cursor: pointer;

    &:disabled{
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

`;


export const ListPokemons = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  list-style: none;

  @media only screen and (min-width: 560px) and (max-width: 1023px){
    justify-content: space-evenly;
  }

  @media only screen and (min-width: 1024px){
    justify-content: space-around;

    max-width: 1440px;
  }

`;
import styled from 'styled-components';

export const PageActions = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 20px;

  @media only screen and (min-width: 1024px){
    justify-content: space-between;
    margin: 40px 0;
    width: 230px;
  }

`;

const Button = styled.button`
  border-radius: 50%;
  border: 0;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);
  
  margin-right: 5px;

  &:disabled{
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover{
    transform: scale(1.1);
  }

  img{
    height: 50px;
  }

  @media only screen and (min-width: 1024px){
    position: static;
    border-radius: 10px;
    width: 100px;
  }
`;

export const BtnNext = styled(Button)`
  position: fixed;
  bottom: 10px;
  right: 10px;

  z-index: 2;

  @media only screen and (min-width: 1024px){
    position: static;
    border-radius: 10px;
    width: 100px;
  }
`;

export const BtnPrevious = styled(Button)`
  position: fixed;
  bottom: 10px;
  left: 10px;

  z-index: 2;

  @media only screen and (min-width: 1024px){
    position: static;
    border-radius: 10px;
    width: 100px;
  }
`;


export const ListPokemons = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  list-style: none;

  @media only screen and (min-width: 450px){
    justify-content: space-around;
    max-width: 1440px;
  }
`;


export const LoadingScreen = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p{
    font-size: 1.5rem;
    color: #FFFFFF;
  }
`;
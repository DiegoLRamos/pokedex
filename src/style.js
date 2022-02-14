import styled from 'styled-components';

export const PageActions = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 20px;
`;

const Button = styled.button`
  border: 0;
  margin-right: 5px;
  color: white;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);
  border-radius: 50%;

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
`;

export const BtnNext = styled(Button)`
  position: fixed;
  bottom: 10px;
  right: 10px;

  z-index: 2;
`;

export const BtnPrevious = styled(Button)`
  position: fixed;
  bottom: 10px;
  left: 10px;

  z-index: 2;
`;


export const ListPokemons = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  list-style: none;

  @media only screen and (min-width: 450px) and (max-width: 1023px){
    justify-content: space-around;
  }

  @media only screen and (min-width: 1024px){
    justify-content: space-around;

    max-width: 1440px;
  }

`;


export const Eitapreula = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p{
    font-size: 2rem;
    color: #FFF;
  }
`;
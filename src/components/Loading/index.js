import pokeball from '../../assets/img/pokeball.svg';
import pokedex from '../../assets/img/bg_pokedex.svg';

import styled, { keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Diego = styled.div`
  /* height: 300px; */
  /* width: 300px; */

  
  img{
    animation: ${rotate} 2s linear infinite;
    height: 300px;
    width: 300px;
  }
`;



export default function Loading(){
  return(
    <Diego>
      {/* <img src={pokeball} /> */}
      <img src={pokeball} />
    </Diego>
  );
}
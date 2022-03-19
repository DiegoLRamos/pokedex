import React, { useState } from 'react';
import * as S from './style';

import pokeball from '../../assets/img/pokeball.svg';
import Modal from '../Modal';

export default function CardPokemon({ data }){
  const [showModal, setShowModal] = useState(false);

  return(
    <>
      <S.CardContainer>
        <S.CardHeader>
          <ul className='types'>
            {data.types.map((e) => (
              <li key={e.type.name}>
                <img className='icon-type' src={require(`../../assets/img/poke-types/${e.type.name}.png`)} alt={`${e.type.name}`} title={`${e.type.name}`} />
                <span>{e.type.name}</span>
              </li>
            ))}
          </ul>
        </S.CardHeader>

        <S.CardBody>
          <img className='img-pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`} alt={`${data.name}`} title={`${data.name}`} />  
          <img className='img-pokeball' src={pokeball} />
        </S.CardBody>

        <S.CardFooter>
          <h2>{data.name}</h2>
          <h4>Nº {data.id}</h4>
          <button 
            className='btn-skills' 
            onClick={() => setShowModal(true)} 
          >
            skills
          </button>
        </S.CardFooter>

      </S.CardContainer>

      {showModal && (
          <Modal closeModal={() => setShowModal(false)} datapokemon={data} />
        )}  

    </>

  );
}
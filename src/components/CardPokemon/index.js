import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import * as S from './style';

import pokeball from '../../assets/img/pokeball.svg';

import Loading from '../Loading/index';

import Modal from '../Modal';



export default function CardPokemon({data}){
  const [evolution, setEvolution] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    async function getEvolution(){
      // const response = await api.get(`evolution-chain/60/`)
      // const response = await api.get(`evolution-chain/${data.id}/`)
      
      // console.log(response.data.chain.evolves_to[0].evolves_to)


      // console.log(response.data.chain.evolves_to[0].evolves_to.map((item) => {
        // return item.species.name
      // }))

    }

    getEvolution();
  }, []);


  return(
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

        {showModal && (
          <Modal closeModal={() => setShowModal(false)} datapokemon={data} />
        )}
      </S.CardFooter>

      
    </S.CardContainer>
  );
}
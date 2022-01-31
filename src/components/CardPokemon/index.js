import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import * as S from './style';
import './style.css';

import pokeball from '../../assets/img/pokeball.svg';


export default function CardPokemon({ data }){
  const [evolution, setEvolution] = useState([]);

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
        <S.Types>
          {data.types.map((e) => (
            <li key={e.type.name}>
              <img className='icon-type' src={require(`../../assets/img/poke-types/${e.type.name}.png`)} alt={`${e.type.name}`} title={`${e.type.name}`} />
              <span>{e.type.name}</span>
            </li>
          ))}
        </S.Types>

        <img className='img-pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`} alt={`${data.name}`} title={`${data.name}`} />  

        <img className='img-pokeball' src={pokeball} />
      </S.CardHeader>

      <S.CardBody>
        <h2>{data.name}</h2>
        <h4>Nº {data.id}</h4>
      </S.CardBody>

      <button className='btn-skills'>+ Skills</button>

    </S.CardContainer>

    // <S.Card>
    //   <S.CardHeader>
    //     <img className='img-pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`} alt={`${data.name}`} title={`${data.name}`} />   
    //     <img className='img-pokeball' src={pokeball} />
    //   </S.CardHeader>

    //   <S.CardBody>
    //     <span>{data.name}</span>

    //     <ul>
    //       {data.types.map((e) => (
    //         <li key={e.type.name}>
    //           <img className='icon-type' src={require(`../../assets/img/poke-types/${e.type.name}.png`)} alt={`${e.type.name}`} title={`${e.type.name}`} />
    //           <span>{e.type.name}</span>
    //         </li>
    //       ))}
    //     </ul>

    //     <span>Nº {data.id}</span>
    //   </S.CardBody>

    //   <S.CardFooter>

    //   </S.CardFooter>


        

    //       {/* {data.stats.map((item) => (
    //         <li key={item.stat.name}>
    //           <label>
    //             {item.stat.name}:{item.base_stat}
    //           <progress title={`${item.base_stat}`} value={item.base_stat} max="100">{item.base_stat}</progress>
    //           </label>
    //         </li>
    //       ))} */}


    // </S.Card>
  );
}
import React, { useState, useEffect } from 'react';
import api from './services/api';
import * as S from './style';
import { GlobalStyle } from './GlobalStyle';

import CardPokemon from './components/CardPokemon';


function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [nextPage, setNextPage] = useState(''); 
  const [previousPage, setPreviousPage] = useState(''); 
  const [currentPage, setCurrentPage] = useState('/pokemon'); 
  const [loading, setLoading] = useState(false);

  const [generationPokemon, setGenerationPokemon] = useState([]);
  const [option, setOption] = useState('');


  useEffect(() => {
    setLoading(true);

    async function loadPokemons(){
      try{
        const { data } = await api.get(currentPage);
        setNextPage(data.next);
        setPreviousPage(data.previous);

        console.log(data)

        const resp = await Promise.all(data.results.map((item) => api.get(item.url)));
        const format = resp.map((req) => req.data);
        setAllPokemons(format);


        const r = await api.get(`generation`)

    
        setGenerationPokemon(r.data.results)

        // console.log(r.data.results)

      } catch(error){
        console.log(error)
      }
    }

    loadPokemons();
  }, [currentPage]);

  function next(){
    setCurrentPage(nextPage.split('v2/')[1]);
  }

  function previous(){
    setCurrentPage(previousPage.split('v2/')[1]);
  }

  async function handleSelectedGeneration(event){
    setOption(event.target.value)
    console.log(event.target.value.split('v2/')[1])

    const teste = await api.get(event.target.value.split('v2/')[1])

    // setAllPokemons(teste.data.pokemon_species)
  }



  return (
    <main>
      <GlobalStyle />


      <select value={option} onChange={handleSelectedGeneration}>
        <option defaultValue="Geração pokémons" >Geração pokémons</option>
        {generationPokemon.map((item) => (
          <option key={item.name} value={item.url}>Geração {item.name.split('-')[1].toUpperCase()}</option>
        ))}
      </select>


      <S.ListPokemons>
        {allPokemons.map((item) => (
          <CardPokemon data={item} />
        ))}
      </S.ListPokemons>

      <S.PageActions>
        <button onClick={previous} disabled={previousPage === null}>Previous</button>
        <button onClick={next} disabled={nextPage === null}>Next</button>
      </S.PageActions>
    </main>
  );
}

export default App;

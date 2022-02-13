import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from './style';
import { GlobalStyle } from './GlobalStyle';
import {lightTheme, darkTheme} from './components/UI/themes';

import api from './services/api';

import Loading from './components/Loading/index';
import CardPokemon from './components/CardPokemon';


import Logo from './assets/img/logo.png';


function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [nextPage, setNextPage] = useState(''); 
  const [previousPage, setPreviousPage] = useState(''); 
  const [currentPage, setCurrentPage] = useState('/pokemon'); 
  const [loading, setLoading] = useState(false);

  const [generationPokemon, setGenerationPokemon] = useState([]);
  const [option, setOption] = useState('');

  const [isDark, setIsDark] = useState(false);




  useEffect(() => {
    setLoading(true);

    async function loadPokemons(){
      try{
        const { data } = await api.get(currentPage);
        setNextPage(data.next);
        setPreviousPage(data.previous);

        
        const resp = await Promise.all(data.results.map((item) => api.get(item.url)));
        
        const format = resp.map((req) => req.data);
        // console.log(format)
        setAllPokemons(format);

        const r = await api.get(`generation`)

    
        setGenerationPokemon(r.data.results)

    setLoading(false);


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
    setLoading(true);
    setAllPokemons([]);
    setOption(event.target.value)
    // console.log(event.target.value.split('v2/')[1])

    const selectedGeneration = await api.get(event.target.value.split('v2/')[1])
    // console.log(selectedGeneration.data.pokemon_species)

    
    const resp = await Promise.all(selectedGeneration.data.pokemon_species.map((item) => 
                        {
                          try {
                            const a = api.get(`pokemon/${item.name}`)
                            console.log(a)
                            
                          } catch (error) {
                            if(error.response.status === 400){
                            }
                          }
                        }
    
    
              ));
    
    // const format = resp.map((req) => req.data);
    // console.log(format)
    // setAllPokemons(format);
    setLoading(false);




    // console.log(teste.data.pokemon_species)

    // setAllPokemons(teste.data.pokemon_species)
  }



  return (
      <ThemeProvider theme={isDark ? darkTheme : lightTheme} >
      <GlobalStyle />

      <button onClick={ () => setIsDark(!isDark) }>Thema</button>

      <img src={Logo} alt='Logo Pokémon' style={{width: 200}} />

      {loading ? (
        <Loading />
      ) : (
        <>
          <select value={option} onChange={handleSelectedGeneration}>
            <option defaultValue="Todos" selected>Todos</option>
            {generationPokemon.map((item) => (
              <option key={item.name} value={item.url}>Geração {item.name.split('-')[1].toUpperCase()}</option>
            ))}
          </select>


          <S.ListPokemons>
            {allPokemons.map((item) => (
              <CardPokemon key={item.id} data={item} />
            ))}
          </S.ListPokemons>

          <S.PageActions>
            <button onClick={previous} disabled={previousPage === null}>Previous</button>
            <button onClick={next} disabled={nextPage === null}>Next</button>
          </S.PageActions>
        </>
      )}


    
      </ThemeProvider>

  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from './style';
import { GlobalStyle } from './GlobalStyle';
import {lightTheme, darkTheme} from './components/UI/themes';

import api from './services/api';

import Loading from './components/Loading/index';
import CardPokemon from './components/CardPokemon';

import pokeball from './assets/img/pokeball.svg';
import leftArrow from './assets/img/left-arrow.png';
import rightArrow from './assets/img/right-arrow.png';

import Logo from './assets/img/logo.png';


function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [nextPage, setNextPage] = useState(''); 
  const [previousPage, setPreviousPage] = useState(''); 
  const [currentPage, setCurrentPage] = useState('/pokemon'); 
  const [loading, setLoading] = useState(false);

  const [generationPokemon, setGenerationPokemon] = useState([]);
  const [option, setOption] = useState('');

  const [isDark, setIsDark] = useState(true);


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

      {loading ? (
        <S.Eitapreula>
          <Loading />
          <p>Carregando...</p>
        </S.Eitapreula>
      ) : (
        <>
          <img src={Logo} alt='Logo Pokémon' style={{width: 200}} />

          <button className='btn-theme' onClick={ () => setIsDark(!isDark) }> <img src={pokeball} /> </button>
          
          {/* <select value={option} onChange={handleSelectedGeneration}>
            <option defaultValue="Todos" selected>All Pokémons</option>
            {generationPokemon.map((item) => (
              <option key={item.name} value={item.url}>Generation {item.name.split('-')[1].toUpperCase()}</option>
            ))}
          </select> */}


          <S.ListPokemons>
            {allPokemons.map((item) => (
              <CardPokemon key={item.id} data={item} />
            ))}
          </S.ListPokemons>

          <S.PageActions>
            <S.BtnPrevious onClick={previous} disabled={previousPage === null}> 
              <img src={leftArrow} /> 
            </S.BtnPrevious>
            
            <S.BtnNext onClick={next} disabled={nextPage === null}> 
              <img src={rightArrow} /> 
            </S.BtnNext>
          </S.PageActions>

        </>
      )}


    
      </ThemeProvider>

  );
}

export default App;

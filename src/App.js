import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/UI/GlobalStyle';
import * as S from './styleApp';
import api from './services/api';

import {lightTheme, darkTheme} from './components/UI/themes';
import CardPokemon from './components/CardPokemon';
import Loading from './components/Loading/index';

import Logo from './assets/img/logo.png';
import leftArrow from './assets/img/left-arrow.png';
import rightArrow from './assets/img/right-arrow.png';

import dark from './assets/img/dark.svg';
import light from './assets/img/light.svg';

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [nextPage, setNextPage] = useState(''); 
  const [previousPage, setPreviousPage] = useState(''); 
  const [currentPage, setCurrentPage] = useState('/pokemon'); 
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function loadPokemons(){
        const { data } = await api.get(currentPage);
        setNextPage(data.next);
        setPreviousPage(data.previous);

        const response = await Promise.all(data.results.map((item) => api.get(item.url)));
        const format = response.map((req) => req.data);
        setAllPokemons(format);
        setLoading(false);
    }

    loadPokemons();
  }, [currentPage]);

  function next(){
    setCurrentPage(nextPage.split('v2/')[1]);
  }

  function previous(){
    setCurrentPage(previousPage.split('v2/')[1]);
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme} >
      <GlobalStyle />

      {loading ? (
        <S.LoadingScreen>
          <Loading />
          <p>Carregando...</p>
        </S.LoadingScreen>
      ) : (
        <>
          <img src={Logo} alt='Logo Pokémon' style={{width: 200, marginTop: '10px'}} />

          <button 
            className='btn-theme' 
            onClick={ () => setIsDark(!isDark) }
          > 
            {isDark ? (
              <img src={light} />
            ) : (
              <img src={dark} />)
            }
          </button>
            
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

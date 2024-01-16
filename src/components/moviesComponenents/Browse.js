import React from 'react'
import HeaderMovies from './HeaderMovies';

import useNowPlayingMovies from './useNowPlayingMovies';
import MainContainer from './MainContainer';

const Browse = () => {
  
  useNowPlayingMovies();
  return (
    <div>
      <HeaderMovies/>
      <MainContainer/></div>
  )
}

export default Browse;
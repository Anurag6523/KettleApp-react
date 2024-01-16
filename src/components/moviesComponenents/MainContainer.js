import React from 'react'
import BackgroundTitle from './BackgroundTitle'
import BackgroundVideo from './BackgroundVideo'
import { useSelector } from 'react-redux'


const MainContainer = () => {

    const movies= useSelector((store)=>store.movie?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie= movies[0];
    const {original_title, overview}= mainMovie;
    console.log(mainMovie);

  return (
    <div className=''>
       <BackgroundTitle/>
       <BackgroundVideo/>
    </div>
  )
}

export default MainContainer
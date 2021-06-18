import React, {useState, useEffect, useRef} from 'react';
// import {config} from './config.js';
import './styles/App.css';
import PagiNation from './lib/pagiNation';
import Background from './components/background';
import LogoNlogin from './components/logoNlogin';
import InnerContents from './components/innerContents';

const App = () => {
  const [movieList, setMovieList] = useState();
  // const imageUrl = 'https://image.tmdb.org/t/p/w500';
  // const images = '&append_to_response=videos,images';
  // let movieUrl = 'https://api.themoviedb.org/3/movie/76341?api_key=c704cfb4ce76a400c7935140981997d8';

  useEffect(() => {
    fetch('http://localhost:3000/posterList.json')
    .then(res => res.json())
    .then(json => setMovieList(json));
  }, [])

  
  return (
    <div className="homeWrapper">
    <LogoNlogin logo={movieList ? movieList.logo : ""} />
    <PagiNation movie_img={movieList ? movieList.movie_img : ""} />
    <Background movie_img={movieList ? movieList.movie_img : ""} />
    </div>
  )
}

export default App;

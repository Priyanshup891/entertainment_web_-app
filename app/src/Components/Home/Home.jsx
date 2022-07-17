import React, {useEffect, useState} from 'react';
import './home.css';

import Trending from '../Trending/Trending';
import Sections from '../Sections/Sections';

import {fetchTrendingData, fetchMovies, fetchTvShowes} from '../../Services/api';

const Home = () => {

    const [trending, setTrending] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tvShowes, setTvShowes] = useState([]);

  useEffect(() => {
    const getTrendingData = async () => {
      const response = await fetchTrendingData();
      console.log(response.data.results);
      setTrending(response.data.results);
    }

    const getMovies = async () => {
      const response = await fetchMovies();
      console.log(response.data.results);
      setMovies(response.data.results);
    }

    const getTvShowes = async () => {
      const response = await fetchTvShowes();
      console.log(response.data.results);
      setTvShowes(response.data.results);
    }


    getTrendingData();
    getMovies();
    getTvShowes();
  }, [])

  return (
    <div className='App'>
        <div className='entertainment-showcase'>
        <Trending trend={trending}/>
        <div className='section'>
        <Sections datas={movies} title="movies"/>
        <Sections datas={tvShowes} title="tvshowes"/>
        </div>
        </div>
    </div>
  )
}

export default Home
import React, {useEffect, useState, useContext} from 'react';
import './home.css';
import EntertainContext from '../../Context/EntertainContext';
import Trending from '../Trending/Trending';
import Sections from '../Sections/Sections';
import Loader from '../Loader/Loader';

const Home = () => {

  const {trending,fetchTrendingData,movies,fetchMovies,tvShowes,fetchTvShowes,isLoading,setIsLoading} = useContext(EntertainContext);

   


  useEffect(() => {
    setIsLoading(true);
    fetchTrendingData();
    fetchMovies();
    fetchTvShowes();
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, [])

  return (
    <div className='App'>
      {
        isLoading ? <Loader/> :
        <div className='entertainment-showcase'>
        <Trending trend={trending}/>
        <div className='section'>
        <Sections datas={movies} title="movies"/>
        <Sections datas={tvShowes} title="tvshowes"/>
        </div>
        </div>
}
    </div>
  )
}

export default Home
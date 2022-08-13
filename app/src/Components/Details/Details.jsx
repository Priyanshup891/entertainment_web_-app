import React, {useEffect, useState} from 'react';

import {fetchMoviesDetails} from '../../Services/api';

import { useParams } from 'react-router-dom';


const Details = () => {

  const [movieDetail, setMovieDetail] = useState({});

  const {id} = useParams();

  useEffect(() => {
    const getMoviesDetails = async () => {
      const response = await fetchMoviesDetails(id);
      console.log(response.data);
      setMovieDetail(response.data)
    }

    getMoviesDetails();
  },[])

  return (
    <div>Details</div>
  )
}

export default Details;
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/trending/all/day?api_key=7a6eb72a45fd621fa981631b9589959b";
const MOVIE_API = "https://api.themoviedb.org/3/movie/popular?api_key=7a6eb72a45fd621fa981631b9589959b&language=en-US&page=1";
const TV_API = "https://api.themoviedb.org/3/tv/popular?api_key=7a6eb72a45fd621fa981631b9589959b&language=en-US&page=1";


export const fetchTrendingData = async () => {
    try{
        return await axios.get(API_URL);
    } catch(error){
        console.log(error);
    }
} 

export const fetchMovies = async () => {
    try{
        return await axios.get(MOVIE_API);
    } catch(error){
        console.log(error);
    }
}

export const fetchTvShowes = async () => {
    try{
        return await axios.get(TV_API);
    } catch(error){
        console.log(error);
    }
}
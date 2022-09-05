import React, { useEffect,useContext } from "react";
import styled from "styled-components";
import EntertainContext from "../../Context/EntertainContext";
import Trending from "../Trending/Trending";
import Sections from "../Sections/Sections";
import Loader from "../Loader/Loader";

const Home = () => {
  const {
    trending,
    fetchTrendingData,
    movies,
    fetchMovies,
    tvShowes,
    fetchTvShowes,
    isLoading,
    setIsLoading,
  } = useContext(EntertainContext);

  useEffect(() => {
    setIsLoading(true);
    fetchTrendingData();
    fetchMovies();
    fetchTvShowes();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <EntertainShowcase>
          <Trending trend={trending} />
          <SectionContainer>
            <Sections datas={movies} title="movie" />
            <Sections datas={tvShowes} title="tv" />
          </SectionContainer>
        </EntertainShowcase>
      )}
    </div>
  );
};

const EntertainShowcase = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SectionContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  margin-bottom:2rem ;
  padding: 0 7rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export default Home;

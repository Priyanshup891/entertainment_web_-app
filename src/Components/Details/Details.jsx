import React, { useEffect, useContext } from "react";
import EntertainContext from "../../Context/EntertainContext";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./details.css";
import styled from "styled-components";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};

const Details = () => {
  const { detail, fetchDetail, isLoading, setIsLoading, videos, fetchVideos } =
    useContext(EntertainContext);
  let { id, type } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchVideos(id, type);
    fetchDetail(id, type);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            {detail && (
              <DetailContainer>
                <BackgroundImage>
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${detail.backdrop_path}`}
                    alt="poster"
                  />
                </BackgroundImage>
                <DetailContent>
                  <DetailContentImage>
                    <img
                      src={`https://image.tmdb.org/t/p/w1280${detail.poster_path}`}
                      alt=""
                    />
                  </DetailContentImage>
                  <DetailContentInfo>
                    <h1>{detail.original_title}</h1>
                    <p>{detail.overview}</p>

                    <DetailContentInfoData>
                      <span>Rating:</span>
                      <Rating
                        name="read-only"
                        value={detail.vote_average / 2}
                        precision={0.5}
                        readOnly
                      />
                    </DetailContentInfoData>

                    <DetailContentInfoData>
                      <span>
                        Film genres:
                      </span>
                      <Genres>
                        {detail.genres.map((genre) => (
                          <p>{genre.name}</p>
                        ))}
                      </Genres>
                    </DetailContentInfoData>
                  </DetailContentInfo>
                </DetailContent>
              </DetailContainer>
            )}
          </div>

          <VideoContainer>
            <Carousel
              responsive={responsive}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              swipeable={false}
              draggable={false}
            >
              {videos.map((video) => (
                <iframe
                  src={`https://www.youtube.com/embed/${video.key}`}
                ></iframe>
              ))}
            </Carousel>
          </VideoContainer>
        </>
      )}
    </>
  );
};

const DetailContainer = styled.div`
  width: 100%;
`;

const BackgroundImage = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  z-index: -1;

  &::after {
    content: "";
    background: linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.8),
      var(--dark-blue)
    );
    position: absolute;
    width: 100%;
    height: calc(100vh - 70px);
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }

  img {
    width: 100%;
  }
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 4rem 6rem;
`;

const DetailContentImage = styled.div`
  width: 350px;
  height: auto;
  margin-right: 2rem;
  flex: 1;

  img {
    width: 100%;
    object-fit: cover;
    display: block;
    border-radius: 20px;
  }
`;

const DetailContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;

  h1 {
    font-size: 3rem;
    color: #fff;
    letter-spacing: 2px;
  }

  p {
    font-size: 1rem;
    color: rgb(163, 163, 163);
    line-height: 1.5;
    margin-top: 1rem;
    letter-spacing: 0.5px;
  }
`;

const DetailContentInfoData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;

  span {
    font-size: 1.2rem;
    font-weight: 600;
    color: rgb(192, 192, 192);
    margin-right: 0.5rem;
  }
`;

const Genres = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    margin-top: 0;
    background-color: var(--red);
    padding: 0 1rem;
    border-radius: 1rem;
    color: #fff;
    font-size: 1rem;
  }
`;

const VideoContainer = styled.div`
  padding: 0 6rem;

  iframe{
    width: 420px;
   height: 315px;
   border: none;
   border-radius: 2rem;
  }
`;

export default Details;

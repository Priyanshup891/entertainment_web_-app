import React from "react";
import styled from "styled-components";
import bg from '../../assets/images/ott.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Rating } from "@mui/material";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Trending = ({ trend }) => {
  return (
    <TrendingContainer>
      <Carousel
        className="carousel"
        responsive={responsive}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        slidesToSlide={1}
      >
        {trend.map((tren) => (
          <Content>
            <TrendingInfo>
              <h1>{tren.original_title || tren.original_name}</h1>
              <Rating
                name="read-only"
                value={tren.vote_average / 2}
                precision={0.5}
                readOnly
              />
              <p>{tren.overview}</p>
              <h3>
                Average Vote: <span>{tren.vote_average}</span>
              </h3>
              <h3>
                Release Date: <span>{tren.release_date}</span>
              </h3>
              <h3>
                Media Type: <span>{tren.media_type}</span>
              </h3>
              <ButtonsContainer>
                <WatchNowBtn type="button" className="btn">
                  watch now
                </WatchNowBtn>
                <WatchTrailerBtn type="button" className="btn trailer">
                  watch trailer
                </WatchTrailerBtn>
              </ButtonsContainer>
            </TrendingInfo>
            <TrendingImage>
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/w1280${tren.poster_path}`}
                alt=""
              />
            </TrendingImage>
          </Content>
        ))}
      </Carousel>
    </TrendingContainer>
  );
};

const TrendingContainer = styled.div`
  background-image: linear-gradient(
      var(--dark-blue),
      rgba(0, 0, 0, 0.8),
      var(--dark-blue)
    ),
    url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2rem 1rem;
  width: 100%;
  height: calc(100vh - 70px);
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
`;

const TrendingInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 2px;
  }

  p {
    font-size: 1.2rem;
    color: rgb(163, 163, 163);
    line-height: 1.5;
    margin-top: 1rem;
    letter-spacing: 0.5px;
  }

  h3 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 1rem;

    span {
      color: rgb(214, 214, 214);
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
`;

const WatchNowBtn = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 50px;
  border: transparent;
  background-color: var(--red);
  border: 4px solid rgb(148, 1, 1);
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-right: 1rem;
  font-weight: 600;
`;

const WatchTrailerBtn = styled.div`
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 50px;
  background: transparent;
  transition: 0.3s ease-in-out;
  border: 4px solid rgb(148, 1, 1);
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-right: 1rem;
  font-weight: 600;

  &:hover {
    background-color: var(--red);
  }
`;

const TrendingImage = styled.div`
  display: flex;
  flex: 1;
  margin-left: 2rem;

  img {
    width: 100%;
    border-radius: 30px;
  }
`;

export default Trending;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Rating } from "@mui/material";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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

const Sections = ({ datas, title }) => {
  return (
    <SectionsContainer>
      <h2>{title}</h2>
      <Carousel
        className="carousel"
        responsive={responsive}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        swipeable={false}
        draggable={false}
      >
        {datas.map((data) => (
          <Link
            style={{ textDecoration: "none" }}
            to={`/details/${title}/${data.id}`}
          >
            <div>
              <div>
                <img
                  className="image"
                  src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`}
                  alt=""
                />
                <SectionsInfo>
                  <h4>{data.original_title || data.original_name}</h4>
                  <Rating
                    name="read-only"
                    value={data.vote_average / 2}
                    precision={0.5}
                    readOnly
                  />
                </SectionsInfo>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </SectionsContainer>
  );
};

const SectionsContainer = styled.div`

  h2 {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 2px solid var(--red);
    width:100px ;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    color: rgb(177, 177, 177);
  }

  img {
    width: 100%;
    padding: 1rem;
    border-radius: 30px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const SectionsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.5;

  h4 {
    font-size: 0.9rem;
    color: #fff;
    margin-bottom: 0.5rem;
  }
`;

export default Sections;

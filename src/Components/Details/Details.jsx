import React, { useEffect, useContext } from "react";
import EntertainContext from "../../Context/EntertainContext";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./details.css";

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
  const {
    detail,
    fetchDetail,
    isLoading,
    setIsLoading,
    videos,
    fetchVideos,
  } = useContext(EntertainContext);
  let { id, type } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchVideos(id,type);
    fetchDetail(id, type)
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
              <div className="movieContainer">
                <div className="movieContainer-poster_image">
                  <img
                    className="poster_image"
                    src={`https://image.tmdb.org/t/p/w1280${detail.backdrop_path}`}
                    alt="poster"
                  />
                </div>
                <div className="movieContainer-detail">
                  <div className="detail-movie_image">
                    <img
                      className="movie_image"
                      src={`https://image.tmdb.org/t/p/w1280${detail.poster_path}`}
                      alt=""
                    />
                  </div>
                  <div className="detail-movie_info">
                    <h1>{detail.original_title}</h1>
                    <p>{detail.overview}</p>

                    <div className="detail-movie_info-data">
                      <span className="detail-movie_info-title">Rating:</span>
                      <Rating
                        name="read-only"
                        value={detail.vote_average / 2}
                        precision={0.5}
                        readOnly
                      />
                    </div>

                    <div className="detail-movie_info-data">
                      <span className="detail-movie_info-title">
                        Film genres:
                      </span>
                      <div className="genres">
                        {detail.genres.map((genre) => (
                          <p className="genres-title">{genre.name}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="videoContainer">
            <Carousel
              responsive={responsive}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              swipeable={false}
              draggable={false}
            >
              {videos.map((video) => (
                <iframe
                  className="video"
                  src={`https://www.youtube.com/embed/${video.key}`}
                ></iframe>
              ))}
            </Carousel>
          </div>
        </>
      )}
    </>
  );
};

export default Details;

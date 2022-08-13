import React, {useEffect} from 'react';
import './trending.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Rating } from '@mui/material';

import { fetchTrailer } from '../../Services/api';




const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Trending = ({trend}) => {


  
return(
    <Carousel className="carousel" responsive={responsive} 
    dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  swipeable={false}
  draggable={false}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
  slidesToSlide={1}
    >
        {
            trend.map((tren) => (
              <div className='container'>
                <div className='trending_info'>
                  <h1>{tren.original_title || tren.original_name}</h1>
                  <Rating name="read-only" value={tren.vote_average / 2} precision={0.5} readOnly />
                  <p>{tren.overview}</p>
                  <h3>Average Vote: <span>{tren.vote_average}</span></h3>
                  <h3>Release Date: <span>{tren.release_date}</span></h3>
                  <h3>Media Type: <span>{tren.media_type}</span></h3>
                  <div className='buttons'>
                    <button type='button' className='btn'>watch now</button>
                    <button type='button' className='btn trailer'>watch trailer</button>
                  </div>
                </div>
                <div className='trending_image'>
                <img className='img'  src={`https://image.tmdb.org/t/p/w1280${tren.poster_path}`} alt="" />
                </div>
              </div>
            ))
        }
   
    </Carousel>


)
}

export default Trending
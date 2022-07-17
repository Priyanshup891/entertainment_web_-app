import React from 'react';
import './sections.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Rating } from '@mui/material';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4
    }
  };


const Sections = ({datas,title}) => {


  return (
    <div>
      <h2>{title}</h2>
        <Carousel className="carousel" responsive={responsive}
    dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  swipeable={false}
  draggable={false}

  
    >
        {
            datas.map((data) => (
                <div className='content'>
                    <div className='section_image'>
                    <img className='image' src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`} alt="" />
                    <div className='section_info'>
                      <h4>{data.original_title || data.original_name}</h4>
                      <Rating name="read-only" value={data.vote_average / 2} precision={0.5} readOnly />
                    </div>
                    </div>
                </div>
            ))
        }
   
    </Carousel>

    </div>
  )
}

export default Sections
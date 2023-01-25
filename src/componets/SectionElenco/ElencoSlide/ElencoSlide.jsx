import React, { useRef, useState } from "react";

// Data
import {
    Elenco
} from '../../../data/data'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// CSS
import './Elencoslide.css'

// Component
import ElencoComponent from '../ComponentElenco/ElencoComponent'


const ElencoSlide = () => {
  return (
    <div id="container-slideElenco" className='w-[100%] items-center justify-center px-20'>
      <Swiper
      spaceBetween={10}
      loop={true}
      speed={500}
      navigation={true}
      pagination
      breakpoints={{
        480: {
          slidesPerView: 1,
          spaceBetween: -100,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: -50,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: -200,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: -100,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: -100,
          },
        1440: {
            slidesPerView: 5,
            spaceBetween: -150,
        },  
    }}
      className="w-[100%] flex items-center justify-center"
      modules={[Navigation, Pagination]}>
        {Elenco.map((Elenco) => (
          <SwiperSlide className="flex items-center justify-center">
            <ElencoComponent key={Elenco.id} Elenco={Elenco} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ElencoSlide
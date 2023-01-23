import React, { useRef, useState } from "react";

// Data
import {
    Products
} from '../../../data/data'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Components
import Shirt from '../ShirtComponent/Shirt'

// CSS
import './Slideshirt.css'

const SlideShirt = () => {
  return (
    <div className="w-100 py-10 px-5">
        <Swiper
        spaceBetween={10}
        loop={true}
        speed={500}
        autoplay={true}
        navigation={true}
        pagination
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            1440: {
                slidesPerView: 5,
                spaceBetween: 40,
            },  
          }}
        modules={[Navigation, Pagination, Autoplay]}
        className='w-100'>
            {Products.map((Products) => (
                <SwiperSlide className="flex items-center justify-center">
                    <Shirt key={Products.id} Products={Products}/>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default SlideShirt
import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

//CSS
import './Anuncio.css'

// Data
import {
  Anuncios
} from '../../../data/data'

const Anuncio = () => {
  return (
    <article className='h-[140px] mt-7 w-100'>
        <Swiper
        id='swiper'
        slidesPerView={1}
        loop={true}
        speed={500}
        autoplay={true}
        allowTouchMove={false}
        modules={[Autoplay]}
        className='xl:w-[1120px] w-[90%]'>
          {Anuncios.map((Anuncio) => (
            <SwiperSlide id='swiper-slide' className='' key={Anuncio.id} Anuncio={Anuncio}>
              <a className='xl:w-[1120px]' href={Anuncio.URL} target='_blank'>
                <img id="img-anuncio" className='xl:w-[1120px]' src={Anuncio.image} alt={Anuncio.name} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
    </article>
  )
}

export default Anuncio
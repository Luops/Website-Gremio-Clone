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
    <article className='h-[140px] bg-black mt-7 mx-[7%]'>
        <Swiper
        id='swiper'
        slidesPerView={1}
        loop={true}
        speed={500}
        autoplay={true}
        allowTouchMove={false}
        modules={[Autoplay]}
        className=''>
          {Anuncios.map((Anuncio) => (
            <SwiperSlide id='swiper-slide'className='' key={Anuncio.id} Anuncio={Anuncio}>
              <a className='w-100 h-100' href={Anuncio.URL} target='_blank'>
                <img id="img-anuncio" className='' src={Anuncio.image} alt={Anuncio.name} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
    </article>
  )
}

export default Anuncio
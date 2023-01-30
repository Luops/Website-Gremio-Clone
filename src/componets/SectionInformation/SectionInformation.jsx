import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay} from "swiper";

// Import Swiper styles
import "swiper/css";

// CSS
import './Sectioninformation.css'

// Data
import {
  Informations
} from '../../data/data'

// Component
import ComponentInformation from './ComponentInformation/ComponentInformation'


const SectionInformation = () => {
  return (
    <section className='flex w-100'>
      <Swiper
        id='swiper'
        slidesPerView={1}
        loop={true}
        speed={500}
        autoplay={true}
        allowTouchMove={false}
        modules={[Autoplay]}
        className='w-100'>
          {Informations.map((Info) => (
            <SwiperSlide> 
              <ComponentInformation key={Info} Info={Info}/>
            </SwiperSlide>
          ))}

        </Swiper>
    </section>
  )
}

export default SectionInformation
import React from 'react'

//CSS
import './home.css'

//Data
import {
  NextGame
} from '../../data/data'

//Icons
import {
  FaCalendarAlt
} from 'react-icons/fa'

//Components
import SectionGame from '../../componets/SectionGame/SectionGame'
import SectionNews from '../../componets/SectionNews/SectionNews'
import SectionGremioPlay from '../../componets/SectionGremioPlay/SectionGremioPlay'

const Home = () => {
  return (
    <div className=''>
      <SectionGame />
      <SectionNews />
      <SectionGremioPlay />
    </div>
  )
}

export default Home
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

const Home = () => {
  return (
    <div className=''>
      <SectionGame />
    </div>
  )
}

export default Home
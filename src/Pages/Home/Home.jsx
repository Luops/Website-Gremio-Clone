import React from 'react'

//CSS
import './home.css'

//Components
import SectionGame from '../../componets/SectionGame/SectionGame'
import SectionNews from '../../componets/SectionNews/SectionNews'
import SectionGremioPlay from '../../componets/SectionGremioPlay/SectionGremioPlay'
import SectionGremioRadio from '../../componets/SectionGremioRadio/SectionGremioRadio'

const Home = () => {
  return (
    <div className=''>
      <SectionGame />
      <SectionNews />
      <SectionGremioPlay />
      <SectionGremioRadio />
    </div>
  )
}

export default Home
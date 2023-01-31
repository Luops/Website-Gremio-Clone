import React from 'react'

//CSS
import './home.css'

//Components
import SectionGame from '../../componets/SectionGame/SectionGame'
import SectionNews from '../../componets/SectionNews/SectionNews'
import SectionGremioPlay from '../../componets/SectionGremioPlay/SectionGremioPlay'
import SectionGremioRadio from '../../componets/SectionGremioRadio/SectionGremioRadio'
import SectionGremioMania from '../../componets/SectionGremioMania/SectionGremioMania'
import SectionSocio from '../../componets/SectionSócio/SectionSocio'
import SectionElenco from '../../componets/SectionElenco/SectionElenco'
import SectionInformation from '../../componets/SectionInformation/SectionInformation'
import SectionNewsLetter from '../../componets/SectionNewsLetter/SectionNewsLetter'

const Home = () => {
  return (
    <div className=''>
      <SectionGame />
      <SectionNews />
      <SectionGremioPlay />
      <SectionGremioRadio />
      <SectionGremioMania />
      <SectionSocio />
      <SectionElenco />
      <SectionInformation />
      <SectionNewsLetter />
    </div>
  )
}

export default Home
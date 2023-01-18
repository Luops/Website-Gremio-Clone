import React from 'react'

// CSS
import './Gremioplay.css'

//Data
import {
  ButtonGremioPlay
} from '../../data/data'

// Button
function Button() {
  return (
    <>
      {ButtonGremioPlay.map((Play) => (
        <a 
        id="btn-desktop"
        key={Play.id}
        href={Play.URL} 
        target="_blank"
        className='text-white text-base uppercase bg-[#02A8E7] ease-in-out duration-300 hover:bg-[#2871ff] py-4 px-10 rounded-3xl'> 
          {Play.text}
        </a>
      ))}
    </>
  )
}

const SectionGremioPlay = () => {
  return (
    <section id='container-play' className='flex flex-row justify-center items-end pb-10'>
      <div className='flex flex-row gap-10 w-[100%] justify-center'>
        <Button />
        <a 
        id='btn-mobile' 
        href="https://gremio.net/" 
        className='max-w-none w-[80%] text-white text-base uppercase bg-[#02A8E7] ease-in-out duration-300 hover:bg-[#2871ff] py-4 px-10 rounded-3xl'
        >
          Saiba mais
        </a>
      </div>
    </section>
  )
}

export default SectionGremioPlay
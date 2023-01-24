import React from 'react'

// CSS
import './Sectionsocio.css'

// Icons
import {
    FiCheck
} from 'react-icons/fi'

// Data
import {
    QuadroSocial
} from '../../data/data'

const SectionSocio = () => {
  return (
    <section id='container' className='flex flex-row items-center justify-center w-100 py-20 px-5 gap-20'>
        <div className='flex flex-col items-center justify-center'>
            <h3 className='uppercase font-bold text-white text-4xl max-w-[550px] self-start'>
                Melhor que ser gremista, é ser sócio do grêmio
            </h3>
            <p className='text-[#FFEBDD] text-[1.1em] max-w-[550px] text-justify pr-10 mt-5 self-start'>
                Sócios do clube tem benefícios exclusivos e PASSE LIVRE em todos os jogos na Arena, de acordo com a modalidade escolhida.
            </p>
            <a href="https://gremio.net/" target='_blank'
            className='uppercase bg-[#2d2d2d] mt-10 text-white rounded px-8 py-4 self-start'>
                saiba mais
            </a>
        </div>
        <ul className='flex flex-col items-start justify-center gap-3 mt-[-50px]'>
            {QuadroSocial.map((Social) => (
                <li className='flex flex-row items-center justify-center text-white' key={Social.id} Social={Social}>
                    <i className='text-3xl'>{Social.icon}</i>
                    <p>{Social.text}</p>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default SectionSocio
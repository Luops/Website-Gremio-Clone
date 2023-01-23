import React from 'react'

// Components
import SlideShirt from './SlideShirt/SlideShirt'

// CSS
import './Sectionhremiomania.css'

// Images
import LogoGremioMania from '../../images/logo-gremiomania.png'


const SectionGremioMania = () => {
  return (
    <section className='w-100 flex flex-col py-5'>
        <div className='flex flex-row sm:justify-center md:justify-between items-center px-20 py-5 pb-0 border-b-2 border-b-gray-300'>
            <img src={LogoGremioMania} alt="Grêmio Mania" className='pb-3 border-b-4 border-b-blue-400'/>
            <p className='text-gray-500 italic sm:hidden md:block'>A loja oficial do Grêmio</p>
        </div>
        <SlideShirt />
        <article id='article-outlet' className='max-w-none flex flex-row items-center justify-center'>
            <a href="https://gremio.net/" target="_blank" className='max-w-[1366px] group w-[100%] flex flex-row items-center justify-center mx-20 py-6 cursor-pointer bg-[#FEDC00] ease-in-out duration-300 hover:bg-black'>
                <h4 className='max-w-none text-white text-center ease-in-out duration-300 group-hover:text-[#FEDC00] uppercase font-bold sm:text-xl md:text-2xl'>Outlet | ponta de estoque com descontos exclusivos</h4>
            </a>
        </article>
    </section>
  )
}

export default SectionGremioMania
import React from 'react'

// CSS
import './Sectionpartners.css'

// Data
import {
    Patrocinadores
} from '../../data/data'

const SectionPartners = () => {
  return (
    <section className='flex flex-col bg-black items-center justify-center py-20 px-[10%]'>
        <h4 className='text-[#4D4D4D] uppercase text-sm'>Patrocinadores</h4>
        <div className='flex flex-wrap items-center justify-center mt-5 gap-[100px]'>
        {Patrocinadores.map((Image) => (
            <img className='w-[100px] first:w-[300px] opacity-40 ease-in-out duration-300 hover:opacity-100 cursor-pointer' src={Image.image} alt={Image.title} />
        ))}
        </div>
    </section>
  )
}

export default SectionPartners
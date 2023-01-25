import React from 'react'

// CSS
import './Sectionelenco.css'

// Components
import ElencoSlide from './ElencoSlide/ElencoSlide'

const SectionElenco = () => {
  return (
    <section className='w-100 flex flex-col items-center justify-center py-20 gap-10'>
        <div id='container-txt-elenco' className='w-[100%] border-b-2 border-b-gray-300 flex flex-row px-[130px]'>
            <h4 id='txt-elenco' className='uppercase text-xl font-bold pb-3 border-b-4 border-b-blue-400 w-[195px]'>
                Elenco <span className='text-[#02A8E7]'>gremista</span>
            </h4>
        </div>
        <ElencoSlide />
    </section>
  )
}

export default SectionElenco
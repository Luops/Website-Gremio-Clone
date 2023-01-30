import React from 'react'

// CSS
import './Componentinformation.css'

const ComponentInformation = ({Info}) => {
  return (
    <div id='container-information' className='w-100 flex flex-row relative h-[450px] bg-[#E5E5E5] overflow-hidden'>
      <div className='w-[100%] h-[450px] flex flex-col absolute z-[1] 2xl:pl-[380px] lg:px-20 py-20 md:px-5 max-[767px]:items-center max-[767px]:px-5'>
        <h3 className='uppercase font-bold text-xl max-[767px]:text-center'>{Info.title}</h3>
        <p className='max-w-[450px] text-justify text-[#626262] mt-5'>{Info.text}</p>
        <h4 className='text-[#09AFEE] max-w-[300px] font-bold max-[767px]:text-center mt-5'>{Info.subText}</h4>
        <a target='_blank'
        className='flex flex-row items-center justify-center bg-[#09AFEE] hover:bg-[#034d6b] transition duration-400 ease-in-out rounded px-8 py-5 text-white uppercase max-w-none w-[150px] mt-5' href="https://gremio.net/">Saiba mais</a>
      </div>
      <img
      className='relative bg-cover bg-no-repeat z-0 ml-[100px] scale-[1.1] scale-x-[1.3] max-[767px]:ml-[250px] 2xl:' 
      src={Info.image} alt={Info.title} />
    </div>
  )
}

export default ComponentInformation
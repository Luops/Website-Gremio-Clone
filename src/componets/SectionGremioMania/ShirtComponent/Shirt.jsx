import React from 'react'

// CSS
import './Shirt.css'

const Shirt = ({Products}) => {
  return (
    <article className='flex flex-col justify-center items-center w-[250px]'>
      <a href="https://gremio.net/" target='_blank' className='flex flex-col justify-center items-center w-100'>
        <img src={Products.image} alt="" className='h-[200px]'/>
        <h4 className='w-100 flex items-center justify-center text-center uppercase font-bold h-[80px] mt-[-15px]'>{Products.title}</h4>
        <p className='w-100 text-[#02A8E7] uppercase font-bold text-3xl'>{Products.price}</p>
      </a>
    </article>
  )
}

export default Shirt
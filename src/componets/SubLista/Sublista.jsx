import React from 'react'

//CSS
import './sublista.css'
import '../Header/header.css'

const Sublista = ({Sublist}) => {
  return (
    <li className='mx-5 my-3'>
      <a href={Sublist.URL} className='block'>
        {Sublist.text}
      </a>
    </li>
  )
}

export default Sublista
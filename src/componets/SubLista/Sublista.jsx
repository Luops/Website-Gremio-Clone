import React from 'react'

//CSS
import './sublista.css'
import '../Header/header.css'

const Sublista = ({Sublist}) => {
  return (
    <>
    {Sublist.subText.length === 0 && (
      <a className='ml-2 my-4 block' href={Sublist.URL} >
        {Sublist.text}
      </a>
    )}
    {Sublist.subText.length !== 0 && (
      <div className='flex-col ml-5 my-4 block' href={Sublist.URL} >
        <p>{Sublist.text}</p>
        <ul className='flex-col my-2 pl-5'>
        {Sublist.subText.map((SubText) => (
          <a className='mt-2 text-xs text-gray-500 hover:text-black' href={SubText.URL}>
            {SubText.subText1}
          </a>
        ))}
        </ul>
      </div>
    )}
    </>
  )
}

export default Sublista
import React from 'react'

// CSS
import './Gridnews.css'

const GridNews = () => {
  return (
    <div id='container-grid' className='flex flex-row items-start justify-center mt-10 px-[0%]'>
        <div className='grid grid-cols-1'>
            <div className='grid grid-row sm:grid-cols-1 md:grid-cols-2 gap-3'>
                <article id="article-grid-1" className='xl:w-[360px] md:w-[295px] sm:w-[295px] h-[250px] bg-black p-[15px]'></article>
                <article id="article-side-grid" className='xl:w-[360px] md:w-[295px] h-[500px] bg-red-500 p-[15px] hidden sm:visible'></article>
                <article id="article-grid-2" className='xl:w-[360px] md:w-[295px] h-[250px] bg-blue-500 p-[15px] '></article>
                <article id="article-grid-3" className='xl:w-[360px] md:w-[295px] h-[250px] bg-gray-500 p-[15px] '></article>
                <article id="article-grid-4" className='xl:w-[360px] md:w-[295px] h-[250px] bg-yellow-500 p-[15px] '></article>
            </div>
        </div>
        <article id="article-side" className='xl:w-[360px] md:w-[295px] sm:w-[100px] h-[510px] md:h-[510px] bg-red-500 p-[15px] ml-7'></article>
    </div>
  )
}

export default GridNews
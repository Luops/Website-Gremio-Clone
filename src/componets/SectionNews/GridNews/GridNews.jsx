import React, {useState, useEffect} from 'react'

// CSS
import './Gridnews.css'

// Data
import {
  News
} from '../../../data/data'

// Icons
import {
  FaRegClock
} from 'react-icons/fa'

function useScreenWidth() {
  //Mudança de estado dos componentes pelo useState e largura de tela
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenWidth;
}

const GridNews = () => {
   //Dados das notícias
   const [dataNews, setDataNews] = useState([]);
   const [firstDataNews, setFirstDataNews] = useState([]);

   useEffect(() => {
     setDataNews(News);
   }, []);
   console.log(dataNews)

   useEffect(() => {
    const firstFourItems = News.slice(0, 4);
    setFirstDataNews(News);
  }, []);


  return (
    <div id='container-grid' className='flex flex-row items-start justify-center mt-10 w-[100%]'>
        <div className='grid grid-cols-1 w-[100%] '>
          <div id='mobile' className='flex flex-col hidden w-[100%]'>
            {firstDataNews.map((News) => (
              <div className='flex w-[100%]'>
                {News.fixed === "No" && (
                  <article id='article-mobile' className='flex flex-col w-[100%] mb-10 mx-5 border-b-2 border-b-gray-300'>
                    <a href={News.URL} className='flex flex-col max-w-none'>
                      <h4 className='absolute text-white text-sm px-2 py-1 bg-[#02A8E7] rounded-sm'>{News.kindOfNews}</h4>
                      <p className='relative mt-10 mb-2 max-w-none'>{News.title}</p>
                    </a>
                  </article>
                )}
              </div>
            ))}
          </div>
          <div id='grid' className='grid md:grid-rows-2 sm:grid-cols-2 md:grid-cols-3 gap-0 m-auto'>
              {firstDataNews.map((News) => (
                <div id="grid-desktop">
                {News.fixed === "No" && (
                  <article id="article-grid-1" className='xl:w-[360px] md:w-[295px] w-[295px] h-[240px]' key={News.id}>
                   <a href={News.URL}>
                    <div id='gradient-news'></div>
                    <div id='informations-news' className=''>
                      <div className='bg-[#5d5a5ac3] mt-1 ml-5 px-2 py-1 flex flex-row items-center gap-1'>
                        <i className='text-white'>
                          <FaRegClock/>
                        </i>
                        <p className='text-white text-sm'>{News.date} {News.hour}:{News.minutes}</p>
                      </div>
                      <h4 className='mt-1 ml-5 mb-4 text-white text-sm px-2 py-1 bg-[#02A8E7] mt-[100px] rounded-sm'>{News.kindOfNews}</h4>
                      <p className='text-base mt-1 ml-5 mb-4 text-white font-bold mt-[-10px] w-[290px] leading-4'>{News.title}</p>
                    </div>
                    <img id='image-news' src={News.image} alt={News.title} className=''/>
                   </a>
                  </article>
                )}
              </div>
              ))}
              {dataNews.map((News) => (
                  <>
                  {News.fixed === "Yes" && (
                    <article id="article-side"
                    className='row-start-1 md:col-start-3 xl:col-start-3 xl:w-[360px] md:w-[295px] sm:w-[100px] h-[495px] bg-red-500 ml-1'>
                      <a href={News.URL}>
                        <div id='gradient-news'></div>
                        <div id='informations-news' className='flex flex-col justify-between'>
                          <div className='bg-[#5d5a5ac3] mt-1 ml-5 px-2 py-1 flex flex-row items-center gap-1'>
                            <i className='text-white'>
                              <FaRegClock/>
                            </i>
                            <p className='text-white text-sm'>{News.date} {News.hour}:{News.minutes}</p>
                          </div>
                          <p className='text-base mt-1 ml-5 mb-4 text-white font-bold mt-[-10px] w-[290px] leading-4'>{News.title}</p>
                        </div>
                        <img id='image-news' src={News.image} alt={News.title} className='h-[100%] xl:w-[360px] md:w-[295px] sm:w-[100px]'/>
                      </a>
                    </article>
                  )}
                  </>
              ))}
          </div>
          <div id='container-btn'>
            <a id='btn-mais' href="https://gremio.net/" 
            className='flex max-w-none items-center justify-center py-3 bg-[#02A8E7] text-white text-base rounded ease-in-out duration-300 hover:bg-[#2871ff]'>
              Ver todas as notícias
            </a>
          </div>
        </div>
    </div>
  )
}

export default GridNews
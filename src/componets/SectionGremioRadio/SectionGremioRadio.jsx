import React from 'react'

// CSS
import './Gremioradio.css'

// Images
import GremioRadio from '../../images/logo_gremioradio.png'

//Icons
import {
    FaPlayCircle,
    FaMicrophone,
    FaCamera,
    FaYoutube
} from 'react-icons/fa'
import {
    BiFootball
} from 'react-icons/bi'

const SectionGremioRadio = () => {
  return (
    <section id="section-gremioradio" className='w-[100%] flex flex row items-center justify-center gap-20 bg-[#2D2D2D] py-10'>
        <a href="https://gremio.net/" target='_blank'>
            <img src={GremioRadio} alt="Gremio Rádio" />
        </a>
        <div id='container-options' className=' flex flex row items-center justify-center gap-20'>
            <div className='flex flex-col gap-1'>
                {/* div ao vivo */}
                <div id='container-aovivo' className='flex flex-row items-center justify-center'>
                    <div id="corpo" className=' bg-[#333333] h-[100px] flex flex-row items-center justify-center px-6'>
                        <a className=' flex flex-row items-center justify-center'
                        href="https://gremio.net/" target='_blank'>
                            <i className='text-[#02A8E7] text-5xl'>
                                <FaMicrophone />
                            </i>
                            <div className='ml-5'>
                                <p className='uppercase text-white max-w-none w-[120px]'>Grêmio rádio</p>
                                <p className='uppercase text-white font-bold text-2xl max-w-none w-[120px] mt-[-5px]'>ao vivo</p>
                            </div>
                            <i className='text-[#02A8E7] text-5xl'>
                                <FaPlayCircle />
                            </i>
                        </a>
                    </div>
                    <div id='ponta' className=''></div>
                </div>
                {/* div escute */}
                <div id='container-escute' className='flex flex-row items-center justify-center'>
                    <div id="corpo" className='bg-[#333333] h-[100px] flex flex-row items-center justify-center px-6'>
                        <a className='flex flex-row items-center justify-center'
                        href="https://gremio.net/" target='_blank'>
                            <i className='text-[#02A8E7] text-5xl'>
                                <BiFootball />
                            </i>
                            <div className='ml-5'>
                                <p className='uppercase text-white max-w-none w-[150px]'>Escute os gols do</p>
                                <p className='uppercase text-white font-bold text-2xl max-w-none w-[120px] mt-[-5px]'>tricolor</p>
                            </div>
                        </a>
                    </div>
                    <div id='ponta' className=''></div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                {/* div coberturas */}
                <div id='container-cobertura' className='flex flex-row items-center justify-center'>
                    <div id="corpo-blue" className='bg-[#02A8E7] h-[100px] flex flex-row items-center justify-center px-8 '>
                        <a className='flex flex-row items-center justify-center'
                        href="https://gremio.net/" target='_blank'>
                            <i className='text-white text-5xl'>
                                <FaCamera />
                            </i>
                            <div className='ml-5'>
                                <p className='uppercase text-white max-w-none w-[150px]'>Coberturas</p>
                                <p className='uppercase text-white font-bold text-2xl max-w-none w-[180px] mt-[-5px]'>fotográficas</p>
                            </div>
                        </a>
                    </div>
                    <div id='ponta-blue' className=''></div>
                </div>
                {/* div gremio tv */}
                <div id='container-gremiotv' className='flex flex-row items-center justify-center'>
                    <div id="corpo-blue" className='bg-[#02A8E7] h-[100px] flex flex-row items-center justify-center px-8'>
                        <a className='flex flex-row items-center justify-center'
                        href="https://gremio.net/" target='_blank'>
                            <i className='text-white text-5xl'>
                                <FaYoutube />
                            </i>
                            <div className='ml-5'>
                                <p className='uppercase text-white max-w-none w-[150px]'>Assista</p>
                                <p className='uppercase text-white font-bold text-2xl max-w-none w-[180px] mt-[-5px]'>grêmio tv</p>
                            </div>
                        </a>
                    </div>
                    <div id='ponta-blue' className=''></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionGremioRadio
import React from 'react'

// CSS
import './Footer.css'

// Images
import GremioLogo from '../../images/gremio-logo-escudo.png'

const Footer = () => {
  return (
    <footer className='flex flex-row max-[820px]:flex-col items-center justify-between px-20 max-[505px]:px-10 max-[415px]:px-2 py-3 border-t-[1px] border-[#4D4D4D] bg-black'>
        <div className='flex flex-row gap-3'>
            <a href="/" className='w-10'>
                <img src={GremioLogo} alt="Grêmio" className='w-100' />
            </a>
            <div className='flex flex-col justify-center items-start gap-1'>
                <p className='max-w-none uppercase text-[#4D4D4D] text-sm max-[415px]:text-[0.7em]'>GRÊMIO FOOT-BALL PORTO ALEGRENSE</p>
                <p className='max-w-none uppercase text-[#4D4D4D] text-xs max-[415px]:text-[0.7em]'>&copy; 2022 Todos os direitos reservados</p>
            </div>
        </div>
        <div className='flex flex-row max-[820px]:flex-col max-[820px]:items-center max-[820px]:mt-5 gap-10'>
            <a className='text-[#4D4D4D] border-[#4D4D4D] hover:border-b-[1px]' href="https://gremio.net/" target="_blank" rel="noopener noreferrer">
                Política de Privacidade
            </a>
            <a className='text-[#4D4D4D] border-[#4D4D4D] hover:border-b-[1px]' href="https://gremio.net/" target="_blank" rel="noopener noreferrer">
                HCM
            </a>
            <a className='text-[#4D4D4D] border-[#4D4D4D] hover:border-b-[1px]' href="https://gremio.net/" target="_blank" rel="noopener noreferrer">
                MAVE
            </a>
        </div>
    </footer>
  )
}

export default Footer
import React from 'react'

// CSS
import './Sectionnewsletter.css'

// Data
import {
    SocialIcons
} from '../../data/data'

const SectionNewsLetter = () => {
  return (
    <section id='container-newsletter' className='flex flex-row items-start justify-center w-100 px-[6em] max-[991px]:px-[3em] min-[1440px]:px-[11em] py-10 mt-[8em] gap-8'>
        <div className='w-[50%] flex flex-col gap-2 max-[767px]:hidden'>
            <h3 className='uppercase text-[#00A9E1] font-bold text-xl'>Newsletter</h3>
            <p className='text-white max-w-[90%]'>
                Seja um torcedor cadastrado e receba as novidades e promoções do Grêmio.
            </p>
            <a className='max-w-none flex flex-row items-center justify-center w-fit uppercase text-white bg-[#00A9E1] ease-in-out duration-400 hover:bg-[#0953a3] rounded py-[0.9em] px-[2.3em]' 
            href="https://gremio.net/">
                Cadastre-se
            </a>
        </div>
        <div className='w-[50%] flex flex-col gap-2 max-[767px]:w-[100%] max-[767px]:items-center'>
            <h3 className='uppercase text-[#00A9E1] font-bold text-xl'>Siga o GrÊmio</h3>
            <p className='text-white max-w-[90%] max-[767px]:hidden'>
                Seguindo o Tricolor nas redes sociais você fica sabendo tudo que acontece no clube e pode dar a tua opinião. Segue lá!
            </p>
            {/*Social icons*/}
            <div className='flex flex-row gap-3'>
            {SocialIcons.map((Icons) => (
                <a className='text-white hover:text-[#00A9E1] ease-in-out duration-400 hover:border-[#00A9E1] border-white border-2 p-2 text-2xl rounded-full'
                href="https://gremio.net/" target='_blank'>{Icons.icon}</a>
            ))}
            </div>
        </div>
    </section>
  )
}

export default SectionNewsLetter
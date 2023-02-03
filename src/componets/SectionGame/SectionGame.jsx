import React from 'react'

//CSS
import './Sectiongame.css'

//Data
import {
    NextGame
} from '../../data/data'

//Icons
import {
    FaCalendarAlt,
    FaMapMarker
} from 'react-icons/fa'

const SectionGame = () => {
  return (
    <section className='bg-zinc-800 flex items-center justify-center w-100 py-5 gap-10'>
      {/*Escudos */}
      {NextGame.map((Game) => (
      <div className='flex items-center justify-center gap-5 max-[991px]:hidden'>
        <h3 className='text-white font-bold'>{Game.homeTeam}</h3>
        <img id="image-logo" className='m-0 max-w-none h-[70px] bg-clip-border' src={Game.logoHome} alt="Time Mandante" />
        <p className='text-white font-bold'>X</p>
        <img id="image-logo" className='m-0 max-w-none h-[70px] bg-clip-border' src={Game.logoVisit} alt="Time Visitante" />
        <h3 className='text-white font-bold'>{Game.visitingTeam}</h3>
      </div>
      ))}
      {/*Informações*/}
      {NextGame.map((Game) => (
      <div className='flex-col items-center justify-center pr-40 text-start self-start max-[991px]:hidden'>
        <h3 className='text-sm font-bold text-[#02A8E7]'>{Game.championship}</h3>
        <h3 className='text-white text-sm'>{Game.homeTeam} x {Game.visitingTeam}</h3>
        <div className='flex items-center text-white text-start self-start text-sm'>
          <i className='mr-1'>
            <FaCalendarAlt/>
          </i>
          <div className='flex gap-1'>
            <p>{Game.date}</p>
            <p>às</p>
            <p>{Game.hour}h{Game.minutes}min</p>
          </div>
        </div>
        <div className='flex items-center text-white text-start self-start text-sm'>
            <i className='mr-1'>
                <FaMapMarker/>
            </i>
            <div className='flex items-center justify-center gap-1'>
                <h3>{Game.place}</h3>
                <h3>-</h3>
                <h3>{Game.city}</h3>
            </div>
        </div>
      </div>
      ))}
      {/*Botao*/}
      <a className='max-[991px]:hidden flex flex-row max-w-none w-fit text-white self-start mt-[-10px] uppercase ml-[-120px] bg-[#00ADEE] ease-in-out duration-300 hover:bg-[#055e7e] rounded px-10 py-4' 
      href="https://gremio.net/"
      target="_blank">
        Seja Sócio do Grêmio
      </a>
      {/*Tabela Campeonato 991px*/}
      <a className='min-[992px]:hidden flex flex-row max-w-none w-fit text-white uppercase bg-[#00ADEE] ease-in-out duration-300 hover:bg-[#055e7e] rounded px-10 py-4 my-5' 
      href="https://gremio.net/"
      target="_blank">
        Tabela do campeonato
      </a>
    </section>
  )
}

export default SectionGame
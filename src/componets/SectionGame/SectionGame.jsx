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
    <section className='bg-zinc-800 flex items-center justify-center w-100 py-5 gap-20'>
      {/*Escudos */}
      {NextGame.map((Game) => (
      <div className='flex items-center justify-center gap-5'>
        <h3 className='text-white font-bold'>{Game.homeTeam}</h3>
        <img className='m-0' src={Game.logoHome} alt="Time Mandante" />
        <p className='text-white font-bold'>X</p>
        <img className='m-0' src={Game.logoVisit} alt="Time Visitante" />
        <h3 className='text-white font-bold'>{Game.visitingTeam}</h3>
      </div>
      ))}
      {/*Informações*/}
      {NextGame.map((Game) => (
      <div className='flex-col items-center justify-center pr-40 text-start self-start'>
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
    </section>
  )
}

export default SectionGame
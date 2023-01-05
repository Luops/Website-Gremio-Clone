import React from 'react'

//Components
import Sublista from '../SubLista/Sublista'

//CSS
import './header.css'
import '../SubLista/sublista.css'

//Images
import GremioLogo from '../../images/gremio-logo-escudo.png'

//Icons
import {
  FaSearch
} from "react-icons/fa"

const Header = () => {
  const TextLogo = [
    {id: 1, text: "Grêmio"},
    {id: 2, text: "Foot-Ball"},
    {id: 3, text: "Porto Alegrense"},
  ]

  const HeaderList = [
    {id: 1, option: "Futebol", URL: "/", 
      Sublist: [
        {id: 1, text: "Categoria de base", URL: "/futebol/categoria-de-base"},
        {id: 2, text: "Escola de futebol", URL: "/futebol/escola-de-futebol"},
        {id: 3, text: "Avaliação", URL: "/futebol/avaliacao"},
        {id: 4, text: "Núcleos de captação", URL: "/futebol/nucleos-de-captacao"},
        {id: 5, text: "Guias da partida", URL: "/futebol/guias-da-partida"},
      ]},
    {id: 2, option: "Clube", URL: "/", 
      Sublist: [
        {id: 1, text: "Teste", URL: "/teste"}
      ]},
    {id: 3, option: "Sócios", URL: "/socios", 
      Sublist: [
        {id: 1, text: "", URL: ""}
      ]},
    {id: 4, option: "Grêmiomania", URL: "/gremio-mania", 
      Sublist: [
        {id: 1, text: "", URL: ""}
      ]},
    {id: 5, option: "Ingressos", URL: "/ingressos", 
      Sublist: [
        {id: 1, text: "", URL: ""}
      ]},
    {id: 6, option: "Notícias", URL: "/noticias", 
      Sublist: [
        {id: 1, text: "", URL: ""}
      ]},
    {id: 7, option: "Contato", URL: "/contato", 
      Sublist: [
        {id: 1, text: "", URL: ""}
      ]},
    {id: 8, option: "Grêmio Play", URL: "/gremio-play", 
      Sublist: [
        {id: 1, text: "", URL: ""}
      ]},
  ]

  return (
    <header className='w-full bg-transparent'>
      <nav className='w-full flex px-16 py-4 items-center justify-center'>
        <div className='w-4/12 flex gap-4'> {/*Logo*/}
          <a href="/">
            <img src={GremioLogo} alt="Grêmio" className='w-20' />
          </a>
          <div className='flex flex-col justify-end py-2'>
            {TextLogo.map((Text) => (
              <h3 className='uppercase p-0 leading-4 font-bold text-base text-white'>{Text.text}</h3>
            ))}
          </div>
        </div>
        <ul className='flex w-full justify-end items-center gap-5 pt-10 uppercase'>
          {HeaderList.map((List) => (
              <li className='group/option' id='list'>
                <a id='nav-list' 
                className='pb-3 text-white text-sm font-bold group-hover/option:border-b-4 group-hover/option:border-b-blue-400' 
                href={List.URL}>
                  {List.option}
                </a>
                <div className="bg-white opacity-0 pb-5 before:content-['H']"></div>
                <ul className='border-t-4 border-t-blue-400' id="sublist">
                  {List.Sublist.map((Sublist) => (
                    <>
                    {Sublist.text.length !== 0 && (
                      <Sublista key={Sublist} Sublist={Sublist}/>
                    )}
                    </>
                  ))}
                </ul>
              </li>
          ))}
        </ul>
        <form action="" className="flex items-center pl-6 pt-3">
          <button id="botao" className='text-white pb-3 '>
            <FaSearch className='hover:border-b-4 hover:border-b-blue-400 pb-3'/>
          </button>
        </form>
      </nav>
    </header>
  )
}

export default Header
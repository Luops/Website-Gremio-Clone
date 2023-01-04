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
    {id: 1, option: "Futebol", URL: "/futebol", 
      Sublist: [
        {id: 1, text: "Teste", URL: "/teste"}
      ]},
    {id: 2, option: "Clube", URL: "/clube", 
    Sublist: [
      {id: 1, text: "Teste", URL: "/teste"}
    ]},
    {id: 3, option: "Sócios", URL: "/socios", 
    Sublist: [
      {id: 1, text: "", URL: "/teste"}
    ]},
    {id: 4, option: "Grêmiomania", URL: "/gremio-mania", 
    Sublist: [
      {id: 1, text: "", URL: "/teste"}
    ]},
    {id: 5, option: "Ingressos", URL: "/ingressos", 
    Sublist: [
      {id: 1, text: "", URL: "/teste"}
    ]},
    {id: 6, option: "Notícias", URL: "/noticias", 
    Sublist: [
      {id: 1, text: "", URL: "/teste"}
    ]},
    {id: 7, option: "Contato", URL: "/contato", 
    Sublist: [
      {id: 1, text: "", URL: "/teste"}
    ]},
    {id: 8, option: "Grêmio Play", URL: "/gremio-play", 
    Sublist: [
      {id: 1, text: "", URL: "/teste"}
    ]},
  ]

  return (
    <header className='w-full bg-transparent'>
      <nav className='w-full flex px-16 py-4 items-center justify-center'>
        <div className='w-4/12 flex gap-4'> {/*Logo*/}
          <img src={GremioLogo} alt="Grêmio" className='w-20' />
          <div className='flex flex-col justify-end py-2'>
            {TextLogo.map((Text) => (
              <h3 className='uppercase p-0 leading-4 font-bold text-base text-white'>{Text.text}</h3>
            ))}
          </div>
        </div>
        <ul className='flex w-full justify-end items-center gap-5 pt-10 uppercase font-bold'>
          {HeaderList.map((List) => (
            <li className='group pb-10'>
              <a id='nav-list' className='pb-3 text-white text-sm group-hover:border-b-4 group-hover:border-b-blue-400' href={List.URL}>
                {List.option}
              </a>
              {List.Sublist.map((Sublist) => (
                <>
                {Sublist.text.length !== 0 && (
                  <div id="container-navsublist" className='invisible mt-7 border-t-4 border-t-blue-400 group-hover:visible'>
                    {Sublist.text}
                  </div>
                  )}
                </>
              ))}
            </li>
          ))}
        </ul>
        <form action="" className="flex items-center pl-6 pt-3">
          <button id="botao" className='text-white pb-3 '>
            <FaSearch className='hover:border-b-4 hover:border-b-blue-400'/>
          </button>
        </form>
      </nav>
      <aside>
        <Sublista id="container-lista"/>
      </aside>
    </header>
  )
}

export default Header
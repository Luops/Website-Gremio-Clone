import React, {useState} from 'react'

// Styled Components
import styled, { keyframes } from 'styled-components';

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

import {
  GiHamburgerMenu
} from "react-icons/gi"

import {
  AiOutlineClose
} from "react-icons/ai"

//datas
import {HeaderList, TextLogo} from '../../data/data'

// Styled movimento navBar
const moveLeft = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const moveRight = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const AnimatedNavBar = styled.ul`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  transform: translateX(${(props) => (props.moveLeft ? '-100%' : '0')});
  animation: ${(props) => (props.moveLeft ? moveLeft : moveRight)} .5s linear;
`;


const Header = () => {
  const [navBar, setNavBar] = useState(false)

  //Movimento para o navBar
  const [moveLeft, setMoveLeft] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setMoveLeft(!moveLeft);
    setShow(true);
  };

  // State para o header ao descer
  const changeBackground = () => {
    if(window.scrollY >= 10) {
      setNavBar(true) 
    } else {
      setNavBar(false)
    }

  }
  window.addEventListener('scroll', changeBackground)

  
  return (
    <header className='w-full bg-transparent'>
      <nav className={navBar ? 'fixed w-full bg-black flex px-16 max-[1133px]:px-10 max-[470px]:px-5 py-4 max-[991px]:py-0 items-center justify-center max-[991px]:justify-between max-[470px]:gap-1' : 'w-full max-[991px]:bg-black flex px-16 max-[1133px]:px-10 max-[470px]:px-5 py-4 max-[991px]:py-0 items-center justify-center max-[991px]:justify-between max-[470px]:gap-1'}>
        {/*Logo*/}
        <div className='flex gap-2'>
          <a href="/" className='w-20 max-[1133px]:w-10'>
            <img src={GremioLogo} alt="Grêmio" className='' />
          </a>
          <div className='flex flex-col justify-end py-2'>
            {TextLogo.map((Text) => (
              <h3 className='relative uppercase p-0 leading-4 max-[1133px]:leading-3 font-bold text-base max-[1133px]:text-[0.55em] text-white z-40 w-[165px] max-[1121px]:w-[100px] max-[470px]:w-[90px]'>{Text.text}</h3>
            ))}
          </div>
        </div>
        {/*Sublista do header*/}
        <ul className='flex w-full justify-end items-center gap-6 pt-10 uppercase max-[991px]:hidden'>
          {HeaderList.map((List) => (
              <li className='group/option' id='list'>
                <a id='nav-list' 
                className='pb-3 text-white text-sm max-[1133px]:text-[0.8em] font-bold group-hover/option:border-b-4 group-hover/option:border-b-blue-400' 
                href={List.URL}>
                  {List.option}
                </a>
                <div className="bg-white opacity-0 pb-5 before:content-[''] h-10"></div>
                {List.Sublist.length !== 0 && (
                <ul className='border-t-4 border-t-blue-400 py-2 px-5' id="sublist">
                  {/*Coluna 1*/}
                  <div>
                  {List.Sublist.map((Sublist) => (
                    <>
                    {Sublist.text.length !== 0 && (
                      <li>
                        {Sublist.column === 1 && (
                          <Sublista key={Sublist} Sublist={Sublist}/>
                        )}
                      </li>
                    )}
                    </>
                  ))}
                  </div>
                  {/*Coluna 2*/}
                  <div>
                  {List.Sublist.map((Sublist) => (
                    <>
                    {Sublist.text.length !== 0 && (
                      <li>
                        {Sublist.column === 2 && (
                          <Sublista key={Sublist} Sublist={Sublist}/>
                        )}
                      </li>
                    )}
                    </>
                  ))}
                  </div>
                  {/*Coluna 3*/}
                  <div>
                  {List.Sublist.map((Sublist) => (
                    <>
                    {Sublist.text.length !== 0 && (
                      <li>
                        {Sublist.column === 3 && (
                          <Sublista key={Sublist} Sublist={Sublist}/>
                        )}
                      </li>
                    )}
                    </>
                  ))}
                  </div>
                  {/*Coluna 4*/}
                  <div>
                  {List.Sublist.map((Sublist) => (
                    <>
                    {Sublist.text.length !== 0 && (
                      <li>
                        {Sublist.column === 4 && (
                          <Sublista key={Sublist} Sublist={Sublist}/>
                        )}
                      </li>
                    )}
                    </>
                  ))}
                  </div>
                </ul>
                )}
                {List.Sublist.length === 0 && (
                <ul className='border-t-4 border-t-blue-400 py-2 px-5 invisible' id="sublist">
                  {/*Coluna 1*/}
                  <div>
                  {List.Sublist.map((Sublist) => (
                    <>
                    {Sublist.text.length !== 0 && (
                      <li>
                        {Sublist.column === 1 && (
                          <Sublista key={Sublist} Sublist={Sublist}/>
                        )}
                      </li>
                    )}
                    </>
                  ))}
                  </div>
                  {/*Coluna 2*/}
                  <div>
                  {List.Sublist.map((Sublist) => (
                    <>
                    {Sublist.text.length !== 0 && (
                      <li>
                        {Sublist.column === 2 && (
                          <Sublista key={Sublist} Sublist={Sublist}/>
                        )}
                      </li>
                    )}
                    </>
                  ))}
                  </div>
                  {/*Coluna 3*/}
                  <div>
                  {List.Sublist.map((Sublist) => (
                    <>
                    {Sublist.text.length !== 0 && (
                      <li>
                        {Sublist.column === 3 && (
                          <Sublista key={Sublist} Sublist={Sublist}/>
                        )}
                      </li>
                    )}
                    </>
                  ))}
                  </div>
                  {/*Coluna 4*/}
                  <div>
                  {List.Sublist.map((Sublist) => (
                    <>
                    {Sublist.text.length !== 0 && (
                      <li>
                        {Sublist.column === 4 && (
                          <Sublista key={Sublist} Sublist={Sublist}/>
                        )}
                      </li>
                    )}
                    </>
                  ))}
                  </div>
                </ul>
                )}
              </li>
          ))}
        </ul>

        {/*Sublista do header - mobile*/}
        <AnimatedNavBar id='navbar-mobile' moveLeft={moveLeft} show={show} className='fixed h-[100%] z-40 overflow-hidden overflow-y-scroll gap-0 pb-10 top-0 right-[-400px] mt-[90px] bg-black min-[992px]:hidden flex flex-col py-5' >
          {HeaderList.map((List) => (
              <li className='py-5 px-10 border-b border-[#4D4D4D]'>
                <a className='text-white font-bold text-[1.15em]' href={List.URL} target="_blank">
                  {List.option}
                </a>
                {List.Sublist.length !== 0 && (
                  <div className='flex flex-col gap-2 max-w-[270px] opacity-70 overflow-auto'>
                  {List.Sublist.map((Sublist) => (
                    <li>
                      <a className='text-white text-[1.05em]' href={Sublist.URL}>{Sublist.text}</a>
                      {Sublist.subText.length !== 0 && (
                        <ul>
                          {Sublist.subText.map((SubText) => (
                            <li className='flex'>
                              <a className='text-white ml-2 max-w-[100%] text-[0.85em]' href={SubText.URL} target="_blank">{SubText.subText1}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                  </div>
                )}
              </li>
          ))}
        </AnimatedNavBar>

        {/*div busca e botao do navbar*/}
        <div className='flex'>
          {/*Pesquisa*/}
          <form action="" className="flex items-center pl-6 pt-5 text-xl">
            <button id="botao" className='text-white mb-5 text-1xl'>
              <FaSearch className=''/>
            </button>
          </form>
          {/*Botao*/}
          <>
          {moveLeft ? (
          <button 
            id='hamburger-open' 
            className='min-[992px]:hidden text-white ml-5 text-4xl'
            onClick={handleClick}>
            <AiOutlineClose />
          </button>
          ) : (
          <button 
            id='hamburger-close' 
            className='min-[992px]:hidden text-white ml-5 text-4xl relative z-40'
            onClick={handleClick}>
          
            <GiHamburgerMenu/>
          </button>
          )}
          </>
        </div>
      </nav>
    </header>
  )
}

export default Header
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

//datas
import {HeaderList, TextLogo} from '../../data/data'

const Header = () => {
  

  return (
    <header className='w-full bg-transparent'>
      <nav className='w-full flex px-16 py-4 items-center justify-center'>
        <div className='w-4/12 flex gap-4'> {/*Logo*/}
          <a href="/" className='w-20'>
            <img src={GremioLogo} alt="Grêmio" className='w-20' />
          </a>
          <div className='flex flex-col justify-end py-2'>
            {TextLogo.map((Text) => (
              <h3 className='uppercase p-0 leading-4 font-bold text-base text-white'>{Text.text}</h3>
            ))}
          </div>
        </div>
        {/*Sublista do header*/}
        <ul className='flex w-full justify-end items-center gap-5 pt-10 uppercase'>
          {HeaderList.map((List) => (
              <li className='group/option' id='list'>
                <a id='nav-list' 
                className='pb-3 text-white text-sm font-bold group-hover/option:border-b-4 group-hover/option:border-b-blue-400' 
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
        {/*Pesquisa*/}
        <form action="" className="flex items-center pl-6 pt-5">
          <button id="botao" className='text-white mb-5 text-1xl'>
            <FaSearch className=''/>
          </button>
        </form>
      </nav>
    </header>
  )
}

export default Header
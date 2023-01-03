import React from 'react'

//images
import GremioLogo from '../../images/gremio-logo-escudo.png'

const Header = () => {
  const TextLogo = [
    {id: 1, text: "Grêmio"},
    {id: 2, text: "Foot-Ball"},
    {id: 3, text: "Porto Alegrense"},
  ]

  const HeaderList = [
    {id: 1, option: "Futebol", URL: "/futebol"},
    {id: 2, option: "Clube", URL: "/clube"},
    {id: 3, option: "Sócios", URL: "/socios"},
    {id: 4, option: "Grêmiomania", URL: "/gremio-mania"},
    {id: 5, option: "Ingressos", URL: "/ingressos"},
    {id: 6, option: "Notícias", URL: "/noticias"},
    {id: 7, option: "Contato", URL: "/contato"},
    {id: 8, option: "Grêmio Play", URL: "/gremio-play"},
  ]

  return (
    <header className='w-full bg-transparent px-16 py-4'>
      <nav className='w-full flex'>
        <div className='w-4/12 flex gap-4'> {/*Logo*/}
          <img src={GremioLogo} alt="Grêmio" className='w-20' />
          <div className='flex flex-col justify-end py-2'>
            {TextLogo.map((Text) => (
              <h3 className='uppercase p-0 leading-4 font-bold text-base'>{Text.text}</h3>
            ))}
          </div>
        </div>
        <ul className='flex w-full justify-end items-center gap-5 uppercase font-bold'>
          {HeaderList.map((List) => (
            <li>
              <a className='pb-3 hover:border-b-4 hover:border-b-blue-400 text-sm	' href={List.URL}>{List.option}</a>
            </li>
          ))}
        </ul>
        <form action="" className="flex items-center pl-6">lupa</form>
      </nav>
    </header>
  )
}

export default Header
import React, {useState, createContext, useContext} from 'react'

// CSS
import './Sectionnews.css'

// Components
import Anuncio from './Anuncio/Anuncio';

// Botão das notícias
const ActiveButtonContext = createContext();

function MyButton({ id, text }) {
  const { activeButtonId, setActiveButtonId } = useContext(ActiveButtonContext);
  

  return (
    <button
      id={id}
      onClick={() => setActiveButtonId(id)}
      className={`my-button ${activeButtonId === id ? 
        'text-black flex font-bold text-2xl uppercase pb-3 border-b-4 border-b-blue-400 ease-in-out duration-500' : 
        'flex text-gray-500 text-1xl uppercase'}`}
    >
      <p>{text}</p>
      &nbsp;
      <p className={`my-button ${activeButtonId === id ? 
        'text-[#02A8E7]' : ''}`}>2023</p>
    </button>
  );
}
// 

const SectionNews = () => {
  // const [isCompetition, setIsCompetition] = useState(true);
  // const [isRecopa, setIsRecopa] = useState(false);
  // const [isGauchao, setIsGauchao] = useState(false);

  const [activeButtonId, setActiveButtonId] = useState('button-1');

  return (
    <section className='w-100 flex flex-col py-8'>
      {/*Navegação - Botões*/}
      <div className='w-100 flex justify-between px-[7%] border-b-2 border-b-gray-300'>
        <ActiveButtonContext.Provider value={{ activeButtonId, setActiveButtonId }}>
          <MyButton id="button-1" text="Competições"/>
          <MyButton id="button-2" text="Recopa Gaúcha"/>
          <MyButton id="button-3" text="Gauchão"/>
        </ActiveButtonContext.Provider>
      </div>
      <Anuncio />
      
    </section>
  )
}

export default SectionNews
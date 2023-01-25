import React from 'react'

// CSS
import './ElencoComponent.css'

const ElencoComponent = ({Elenco}) => {
  return (
    <div className=''>
        <a href="https://gremio.net/" target="_blank">
            <div id='item-image' className='flex flex-col'>
                <div id='gradient'></div>
                <span id='elenco-nome' className='text-white'>{Elenco.name}</span>
                <span id='elenco-posicao' className='text-[#808080] text-sm'>{Elenco.position}</span>
                <img id='img-elenco' src={Elenco.image} alt={Elenco.name} />
            </div>
        </a>
    </div>
  )
}

export default ElencoComponent
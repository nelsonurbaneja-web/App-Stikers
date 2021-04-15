import React from 'react';
import Stiker from '../Atoms/Stiker';
import './GridStiker.scss'

const GridStiker = ({stikers}) => {
  return (
    <div className="grid-stiker">
      {
        stikers.map(stiker => 
         <Stiker key={stiker.images.original.url} stiker={stiker}/>
        )    
      }
    </div>
  )
}

export default GridStiker;

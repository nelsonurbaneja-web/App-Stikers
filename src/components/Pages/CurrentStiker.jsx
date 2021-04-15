import React from 'react';
import { useContextStiker } from '../../customHooks/useContextStikers';
// import Stiker from '../Atoms/Stiker';

const CurrentStiker = ({params}) => {
  const stikers = useContextStiker()
  const findStiker = stikers.find(stiker => stiker.id === params.id)
  
  return (
   <>
    <div className="center">
      <h1 className="center">Stiker: {findStiker.title}</h1>
      <img src={findStiker.images.original.url} alt="Stiker" />
    </div>
   </>
  )
}

export default CurrentStiker

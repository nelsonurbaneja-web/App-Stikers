import React from 'react';
import { useSingleStiker } from '../../customHooks/useSingleStiker';
import Spinner from '../Atoms/Spinner/Spinner'
import {Helmet} from "react-helmet";

const CurrentStiker = ({params}) => {
  const {stiker, loading, error} = useSingleStiker({id: params.id})

  if(loading) return (
    <>
    <Spinner />
     <Helmet>
      <title>Cargando</title>
    </Helmet>
    </>
  )
  if(!stiker) return null
  if(error) return <h2>Error 404</h2>

  return (
   <>
    <Helmet>
      <title>{stiker.title} || Stiker</title>
    </Helmet>
   {
    <div className="center">
      <h1 className="center">Stiker: {stiker.title}</h1>
      <img src={stiker.images.original.url} alt="Stiker" />
    </div>
   }
   </>
  )
}

export default CurrentStiker

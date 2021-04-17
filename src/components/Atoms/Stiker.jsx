import React from 'react'
import { Link } from 'wouter'
import './Stiker.scss'

const Stiker = ({stiker}) => {
  return (
    <div className="stiker">
      <Link to={`/stiker/${stiker.id}`}><img src={stiker.images.original.url} alt="Stiker" /></Link>
    </div>
  )
}

export default React.memo(Stiker, (prevProps, nextProps) => {
  // console.log('prevProps', prevProps)
  // console.log('nextProps', nextProps)
  return prevProps.stiker === nextProps.stiker // Si las props son iguales
                                               // me devuelve true    
                                               // y si es true, entonces la props son iguales y no han cambiado
                                               // y no me vulve a renderizar el componente
})

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

export default Stiker

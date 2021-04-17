import React, { useEffect, useState } from 'react'
import { Link } from 'wouter'
import { getTendring } from '../../../services/getTrending'
import './Menu.scss'

const Menu = () => {
  const [trendings, setTrendings] = useState([])

  useEffect(() => {
    getTendring().then(data => setTrendings(data))
  }, [])

  return (
   <>
    <ul className="menu-trending" >
      {
        trendings.map(trending => 
          <Link key={trending} to={`/search/${trending}`}><li >{trending}</li></Link>
        )
      }
    </ul>
   </>
  )
}

export default Menu
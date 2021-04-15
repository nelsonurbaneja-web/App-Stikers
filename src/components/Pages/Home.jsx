import React from 'react'
import { useStikers } from '../../customHooks/useStikers';
import Menu from '../Atoms/Menu/Menu';
import Spinner from '../Atoms/Spinner/Spinner';
import GridStiker from '../Molecules/GridStiker';
import './Home.scss'

const Home = () => {
  const { loading, stikers } = useStikers()

  return (
   <>
    <h1 className="center">Ultimas busquedas :</h1>
    {
      loading ?  <Spinner /> :  
      <div className="home-container">
        <div className="home-container--grid">
          <GridStiker stikers={stikers} />
        </div>
        <div className="home-container--menu">
          <h3>Tendencias</h3>
          <Menu />
        </div>
      </div>
    }
   </>
  )
}

export default Home

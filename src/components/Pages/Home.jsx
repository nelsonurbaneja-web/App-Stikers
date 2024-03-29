import React from 'react'
import { Helmet } from 'react-helmet';
import { useStikers } from '../../customHooks/useStikers';
import Menu from '../Atoms/Menu/MenuLazy';
import Spinner from '../Atoms/Spinner/Spinner';
import FormSearch from '../Molecules/FormSearch/FormSearch';
import GridStiker from '../Molecules/GridStiker';
import './Home.scss'

const Home = () => {
  const { loading, stikers } = useStikers()

  return (
   <>
    <Helmet>
      <title>Giffy Home</title>
    </Helmet>
    <h1 className="center">Ultimas busquedas :</h1>
    <FormSearch />
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

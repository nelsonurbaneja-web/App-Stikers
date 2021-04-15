import React from 'react'
import { useStikers } from '../../customHooks/useStikers';
import Spinner from '../Atoms/Spinner/Spinner';
import GridStiker from '../Molecules/GridStiker';


const Home = () => {
  const { loading, stikers } = useStikers()

  return (
   <>
    <h1 className="center">Ultimas busquedas :</h1>
    {
      loading ?  <Spinner /> :  <GridStiker stikers={stikers} />
    }
   </>
  )
}

export default Home

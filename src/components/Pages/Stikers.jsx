import React from 'react';
import { useStikers } from '../../customHooks/useStikers'
import Spinner from '../Atoms/Spinner/Spinner';
import GridStiker from '../Molecules/GridStiker'

const Stikers = ({params}) => {
  const { keyword } = params
  const { loading, stikers } = useStikers({ keyword })

  return (
   <>
    {
      loading ?  <Spinner /> : <GridStiker stikers={stikers} />
    }
   </>
  )
}

export default Stikers

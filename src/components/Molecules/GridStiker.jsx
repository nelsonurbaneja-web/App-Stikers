import React, { Suspense } from 'react';
import './GridStiker.scss'

const Stiker = React.lazy(() => import('../Atoms/Stiker'))

const GridStiker = ({stikers}) => {
  return (
    <Suspense fallback={'Cargando stikers'}>
      <div className="grid-stiker">
        {
          stikers.map(stiker => 
          <Stiker key={stiker.images.original.url} stiker={stiker}/>
          )    
        }
      </div>
    </Suspense>
  )
}

export default GridStiker;

import React, {Suspense} from 'react'
import { useLazyLoad } from '../../../customHooks/UseLazyLoad'
import Spinner from '../Spinner/Spinner'

const Menu = React.lazy(() => import('./Menu'))

export default function MenuLazy() {
  const {isNearScreen, fromRef} = useLazyLoad({distance : '100px'})
  return (
    <Suspense fallback={<Spinner />}>
      <div ref={fromRef}>
      { isNearScreen && <Menu /> }
      </div>
    </Suspense>
  )
}
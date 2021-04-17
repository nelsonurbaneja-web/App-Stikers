import React, { useEffect, useRef, useCallback } from 'react';
import { useLazyLoad } from '../../customHooks/UseLazyLoad';
import { useStikers } from '../../customHooks/useStikers'
import Spinner from '../Atoms/Spinner/Spinner';
import GridStiker from '../Molecules/GridStiker'
import debounce from "just-debounce-it";
import { Helmet } from 'react-helmet';

const Stikers = ({params}) => {
  const { keyword } = params
  const { loading, stikers, setPage } = useStikers({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useLazyLoad({ externalRef: loading ? null : externalRef, once: false })
 
  const showMore =  () => {
    setPage(prevLimit => prevLimit + 1)
  }

  const debounceHandleNextPage = useCallback(
    debounce(() => showMore(), 200)
  , [])

  console.log('isNearScreen', isNearScreen)
  useEffect(() => {
    if(isNearScreen) debounceHandleNextPage()
  }, [isNearScreen, debounceHandleNextPage])


  return (
   <>
    <Helmet>
      <title>Busqueda: {decodeURI(keyword)}</title>
    </Helmet>
    {
      loading ? <Spinner /> : 
      <>
        <GridStiker stikers={stikers} />
       <div id="visor" ref={externalRef}>a</div>
      </>
    }
   </>
  )
}

export default Stikers

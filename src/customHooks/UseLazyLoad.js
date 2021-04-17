import {useState, useEffect, useRef} from 'react'

export const useLazyLoad = ({distance = '100px', externalRef, once = true } = {}) => {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const fromRef = useRef()

  
  useEffect(() => {
    const element = externalRef ? externalRef.current : fromRef.current

    let optionsLazy = {
      rootMargin: distance, // Cuando haya una distancia de rootMargin el elemento hara interseccion y se dispara el callback 
    }

    const onChange = (entries, observer) => {
      const el = entries[0]
      if(el.isIntersecting) {
        setIsNearScreen(true)
        once && observer.disconnect() // Cuando sabemos que lo vio(hizo la interseccion) lo desconecto y deja de observar
      } else {
         !once && setIsNearScreen(false)
      }
    }

    let observer = new IntersectionObserver(onChange, optionsLazy);   //callback => se ejecuta cada vez que hay una actualizacion sobre el elmennto que observa
   
    element && observer.observe(element)

    
    return () => observer.disconnect() // Cuando el componte se desmonte lo desconeto tambien
  }, [distance, externalRef, once])

  return { isNearScreen, fromRef }
}
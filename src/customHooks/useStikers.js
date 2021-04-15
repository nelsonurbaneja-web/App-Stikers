import { useState, useEffect, useContext } from 'react'
import StikersContextProvider  from '../context/StikerContext'
import { getStikers } from "../services/getStikers"

export const useStikers = ({ keyword } = {keyword : null}) => {
  const [loading, setLoading] = useState(true)
  const { stikers, setStikers } = useContext(StikersContextProvider) // Actualizo el estado global

  useEffect(() => {
    let keywordToUse = keyword ? keyword : localStorage.getItem('keyword') ? localStorage.getItem('keyword') : 'random'
    setLoading(true)
    getStikers(keywordToUse).then(data => {
      setStikers(data) // Guardar la data en [stikers]
      setLoading(false) 
    })
  }, [keyword, setStikers])

  return { loading, stikers }
}
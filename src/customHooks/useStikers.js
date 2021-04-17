import { useState, useEffect, useContext } from 'react'
import StikersContextProvider  from '../context/StikerContext'
import { getStikers } from "../services/getStikers"

const INITIAL_PAGE = 0
export const useStikers = ({ keyword } = {keyword : null}) => {
  const [loading, setLoading] = useState(true)
  const [loadingPagination, setLoadingPagination] = useState(true)
  const [page, setPage] = useState(INITIAL_PAGE)
  const { stikers, setStikers } = useContext(StikersContextProvider) // Actualizo el estado global

  let keywordToUse = keyword ? keyword : localStorage.getItem('keyword') ? localStorage.getItem('keyword') : 'random'

  useEffect(() => {
    setLoading(true)
    getStikers({ keyword: keywordToUse }).then(data => {
      setStikers(data) // Guardar la data en [stikers]
      setLoading(false) 
    })
  }, [keyword, setStikers, keywordToUse])

  useEffect(() => {
    if(page === INITIAL_PAGE) return 
    setLoadingPagination(true)
    getStikers({ keyword: keywordToUse, page: page})
    .then(nextData => {
      setStikers(prevStiker => prevStiker.concat(nextData)) // Guardar la data en [stikers]
      setLoadingPagination(false)
      console.log(loadingPagination)
    })
  }, [page, keywordToUse, setStikers])

  return { loading, loadingPagination, stikers, setPage }
}
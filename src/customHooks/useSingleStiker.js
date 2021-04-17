import { useState, useEffect } from "react"
import { getSingleStiker } from "../services/getSingleStiker"
import { useStikers } from "./useStikers"

export const useSingleStiker = ({ id }) => {
  const { stikers } = useStikers()
  const singleStiker = stikers.find(singleStiker => singleStiker.id === id)
  
  const [stiker, setStiker] = useState(singleStiker)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if(!stiker) {
      setLoading(true)
      getSingleStiker({id})
      .then(async data  => {
        console.log('data desde useingle', data)
        setStiker(data)
        setLoading(false)
        setError(false)
      })
      .catch(error => {
        setLoading(false)
        setError(true)
        console.log(error)
      }) 
    }
  }, [id, stiker])

  return {stiker, loading, error}
}
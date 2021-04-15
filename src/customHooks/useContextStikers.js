import {useContext} from 'react'
import StikersContextProvider from '../context/StikerContext'

export const useContextStiker = () => {
  const { stikers } = useContext(StikersContextProvider)
  return stikers
}
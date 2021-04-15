import React, {useState} from 'react'

const Context = React.createContext({})

export function StikersContextProvider({children}) {
  const [stikers, setStikers] = useState([])

  return (
    <Context.Provider value={{stikers, setStikers}}>
      {children}
    </Context.Provider>
  )
}

export default Context
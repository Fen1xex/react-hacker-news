import React, { useContext } from 'react'

const AppContext = React.createContext()

export const AppProdiver = ({ children }) => {
  return (
    <AppContext.Provider value='hello world'>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

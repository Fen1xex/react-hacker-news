import axios from 'axios'
import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

const url = 'https://hn.algolia.com/api/v1/search?query=react'

const initialState = {
  isLoading: true,
  hits: [],
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchNews = async (url) => {
    await axios(url)
      .then(({ data }) => {
        dispatch({ type: 'FETCH_NEWS', payload: data.hits })
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    fetchNews(url)
  }, [])
  console.log(state.hits)
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

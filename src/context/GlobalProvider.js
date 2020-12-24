import React, {useState, useReducer, createContext} from 'react'
import initialState from './initialState'
import reducer from './reducer'


export const GlobalContext = createContext(initialState)

export function GlobalProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {props.children}
    </GlobalContext.Provider>
  )
}

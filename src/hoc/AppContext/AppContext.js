import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState();

  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      { children }
    </AppContext.Provider>
  )
}
import React, { createContext, useState } from 'react';

const DEFAULT_STATE = {
  completedProblems: 0,
  totalProblems: 100,
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(DEFAULT_STATE);

  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      { children }
    </AppContext.Provider>
  )
}
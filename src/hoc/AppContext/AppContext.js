import React, { createContext, useState, useEffect } from 'react';
import { problems } from '../../constants';

const DEFAULT_STATE = {
  completedProblems: 0,
  totalProblems: 100,
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(DEFAULT_STATE);

  useEffect(() => {
    let tempGlobalState = {...globalState};
    let completed = 0;
    problems.forEach(problem => {
      if (problem.completed)
        completed++;
    });
    tempGlobalState.completedProblems = completed;
    setGlobalState(tempGlobalState);
  }, [problems]);

  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      { children }
    </AppContext.Provider>
  )
}
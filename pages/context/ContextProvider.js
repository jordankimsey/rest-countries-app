import { useState, useContext, createContext } from 'react';
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState('light');
  return (
    <StateContext.Provider
      value={{
        currentMode,
        setCurrentMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

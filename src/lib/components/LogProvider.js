import React, { useReducer, useContext } from "react";
import LogStore from "./LogStore";

const Context = React.createContext();

const LogProvider = ({ children }) => {
  console.log(children);
  const contextValue = useReducer(LogStore.reducer, LogStore.initialState);
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

const useLogger = () => {
  return useContext(Context);
};

export { LogProvider, useLogger };

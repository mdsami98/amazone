import React, { createContext, useContext, useReducer } from "react";
// TODO Prepare The Data
export const StateContext = createContext();

//TODO wrap aour app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);

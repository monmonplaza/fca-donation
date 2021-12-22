import React from "react";
import { StoreReducer } from "./StoreReducer";

const initVal = {
  isMode: false,
  mode: "",
  error: false,
  message: "",
  success: false,
  isSave: false,
};

const StoreContext = React.createContext();

const StoreProvider = (props) => {
  const [store, dispatch] = React.useReducer(StoreReducer, initVal);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };

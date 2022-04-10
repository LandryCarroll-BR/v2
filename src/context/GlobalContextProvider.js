// https://kentcdodds.com/blog/how-to-use-react-context-effectively

import React from "react";

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const handleState = (theme) => {
  if (theme === "developer") {
    localStorage.setItem("theme", "designer");
    return "designer";
  } else {
    localStorage.setItem("theme", "developer");
    return "developer";
  }
};

const getInitialState = () => {
  if (localStorage === undefined) {
    return {
      theme: "developer",
    };
  } else {
    return {
      theme: localStorage.getItem("theme"),
    };
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: handleState(state.theme),
      };
    }
    default:
      throw new Error("Bad Action Type");
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, getInitialState());
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;

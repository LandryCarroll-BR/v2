// https://kentcdodds.com/blog/how-to-use-react-context-effectively

import React from "react";

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const handleState = (theme) => {
  if (theme === "developer") {
    return "designer";
  } else {
    return "developer";
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
  const [state, dispatch] = React.useReducer(reducer, {
    theme: "developer",
  });
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;

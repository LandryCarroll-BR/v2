// https://kentcdodds.com/blog/how-to-use-react-context-effectively

import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

// const windowGlobal = typeof window !== "undefined" && window
// const local = windowGlobal.localStorage.getItem("theme")
const local = ""

//persistant theme on page reload
const handleLocal = () => {
  if (local) {
    return local === "designer" ? "designer" : "developer"
  }
}
const handleState = theme => {
  if (theme === "developer") {
    localStorage.setItem("theme", "designer")
    return "designer"
  } else {
    localStorage.setItem("theme", "developer")
    return "developer"
  }
}

const initialState = {
  theme: handleLocal(),
}

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: handleState(state.theme),
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider

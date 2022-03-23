// Highlighting for code blocks
import "prismjs/themes/prism.css"
import React from 'react';
import GlobalContextProvider from './src/context/GlobalContextProvider';

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
      {element}
    </GlobalContextProvider>
  )
}
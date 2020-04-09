import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Global, css } from '@emotion/core'

// Components
import { FilterableTable } from './components';

function App() {
  return (
    <ThemeProvider>
      <CSSReset/>
      <Global styles={
        css`
          body {
            background-color: #282c34;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
          }
        `
      } />
      <FilterableTable />
    </ThemeProvider>
  );
}

export default App;

import React, { useState } from 'react';

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { lightTheme, darkTheme } from "./styles/theme";

import Culvert from './components/culvert/culvert';
import Toggle from './components/toggle/toggle';

const App = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')

    return saved || 'light'
  });

  const themeToggler = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
    <div className='App'>
      <Toggle onClick={themeToggler} theme={theme} />
      <Culvert />
    </div>
    </ThemeProvider>
  )
}

export default App;
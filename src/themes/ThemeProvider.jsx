import { ThemeProvider } from '@mui/material';
import { StylesProvider } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { themeCreator } from './base';

export const ThemeContext = React.createContext();

const ThemeProviderWrapper = ({ children }) => {
  const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme';
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const setThemeName = (themeName) => {
    localStorage.setItem('appTheme', themeName);
    _setThemeName(themeName);
  };

  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={setThemeName}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};

ThemeProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProviderWrapper;

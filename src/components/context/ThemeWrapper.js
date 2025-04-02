// Library Imports
import React, { useContext } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

// Context Import
import { AppThemeContext } from './AppThemeContext';

// Component Imports
import Layout from '../Layout';

// Style & Theme Imports
import { GlobalStyles } from '../styles/global/Global';

const ThemeWrapper = () => {
  const { theme } = useContext(AppThemeContext);

  if (!theme) {
    return <div>Error: Theme context is not available.</div>;
  }

  return (
    <StyledProvider theme={theme}>
      <GlobalStyles />
      <Layout />
    </StyledProvider>
  );
};

export default ThemeWrapper;
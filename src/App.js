// Library Imports
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider as StyledProvider } from 'styled-components';

// Component Imports
import Home from './components/views/Home.styles';
import About from './components/views/About.styles';
import Projects from './components/views/Projects.styles';
import Contact from './components/views/Contact.styles';
import Layout from './components/Layout';
import ScrollToTop from './components/scrollToTop/ScrollToTop.style';

// Style & Theme Imports
import { GlobalStyles } from "./components/styles/global/Global";
import { AppThemeProvider, AppThemeContext } from './components/context/AppThemeContext';

const ThemeWrapper = () => {
  const { theme } = useContext(AppThemeContext);

  return (
    <StyledProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </StyledProvider>
  );
}

const App = () => {
  return (
    <AppThemeProvider>
      <ThemeWrapper />
    </AppThemeProvider>
  );
}

export default App;
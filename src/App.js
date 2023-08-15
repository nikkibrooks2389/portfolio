import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/views/Home.styles';
import About from './components/views/About.styles';
import Projects from './components/views/Projects.styles';
import Contact from './components/views/Contact.styles';
import Layout from './components/Layout';
import CustomCursor from './components/customCursor/CustomeCursor.style';
import { GlobalStyles } from "./components/styles/global/Global";
import { ThemeProvider as StyledProvider } from 'styled-components';
import { ThemeProvider, ThemeContext } from './components/context/ThemeContext';
import React, { useContext } from 'react';

const ThemeWrapper = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledProvider theme={theme}>
      <GlobalStyles />
      <Router>
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
    <ThemeProvider>
      <ThemeWrapper />
      <CustomCursor />
    </ThemeProvider>
  );
}

export default App;
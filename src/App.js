import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/styles/Home.styles';
import About from './components/styles/About.styles';
import Projects from './components/styles/Projects.styles';
import Contact from './components/styles/Contact.styles';
import Layout from './components/Layout';
import { GlobalStyles } from "./components/styles/Global";
const App = () => {
  return (
    <>
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
    </>
  );
}

export default App;




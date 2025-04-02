import React from 'react';
import Navbar from './Navbar/Navbar.styles';
import Home from '../views/Home.styles';
import About from '../views/About.styles';
import Projects from '../views/Projects/Projects.styles';
import Contact from '../views/Contact.styles';

const Layout = () => {
    return (
        <div role="document">
            <header>
                <Navbar />
            </header>
            <main>
                <section id="home" aria-labelledby="home-title">
                    <Home />
                </section>
                <section id="about" aria-labelledby="about-title">
                    <About />
                </section>
                <section id="projects" aria-labelledby="projects-title">
                    <Projects />
                </section>
                <section id="contact" aria-labelledby="contact-title">
                    <Contact />
                </section>
            </main>
        </div>
    );
};

export default Layout;
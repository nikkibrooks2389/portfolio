import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme, isScrolled }) =>
    isScrolled ? theme.colors.background : 'transparent'};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0 .5px 1px rgba(0, 0, 0, 0.1)' : 'none'};
  padding: 1rem 2rem;
  z-index: 1005;
  transition: background 0.3s ease, box-shadow 0.3s ease;
`;
const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.pop2};
  letter-spacing: 1px;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.6rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`;

const BaseNavbar = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <Logo>
        <a href="#home">NB</a>
      </Logo>
      
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeSection })
      )}
      
    </NavbarContainer>
  );
};

export default BaseNavbar;
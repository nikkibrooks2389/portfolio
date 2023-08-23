import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton.style.js';

const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  z-index: 1005;
`;

const BlurredNavbarContainer = styled(NavbarContainer)`
  background: ${({ theme }) => theme.colors.primaryBackground};
`;

const NavList = styled.ul`
  align-items: center;
  list-style: none;
  font-weight: 500;
  display: flex;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
`;



const NavLink = styled(Link)`
  text-decoration: none;
  position: relative;
  color: ${props =>
    props.isActive
      ? props.theme.colors.accent
      : props.theme.colors.primaryText};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${props =>
    !props.isActive && props.theme.colors.accent};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${props =>
    !props.isActive
      ? props.theme.colors.accent
      : 'transparent'};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    background-color: ${props =>
    !props.isActive && props.theme.colors.accent};
  }
`;


const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

const DesktopNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const location = useLocation(); // Get the current path

  const NavbarComponent = isScrolled ? BlurredNavbarContainer : NavbarContainer;

  return (
    <NavbarComponent>
      <Logo>
        <NavLink to="/" isActive={location.pathname === "/"}>
          NB
        </NavLink>
      </Logo>
      <NavList>
        <li>
          <NavLink to="/about" isActive={location.pathname === "/about"}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            isActive={location.pathname === "/projects"}
          >
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            isActive={location.pathname === "/contact"}
          >
            CONTACT
          </NavLink>
        </li>
        <ThemeToggleButton />
      </NavList>
    </NavbarComponent>
  );
};

export default DesktopNavbar;
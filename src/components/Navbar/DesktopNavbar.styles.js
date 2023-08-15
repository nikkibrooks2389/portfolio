import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton.style.js";

const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 2rem;
  `;
const NavList = styled.ul`
align-items:center;
  list-style: none;
  font-weight:500;
  display: flex;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.isActive ? props.theme.colors.accent : props.theme.colors.primaryText)};
  font-size: 1.5rem;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    color: ${props => !props.isActive && props.theme.colors.accentHover};
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: ${props => (props.isActive ? "100%" : 0)};
    height: 2px;
    background-color: ${props => props.theme.colors.accent};
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    background-color: ${props => !props.isActive && props.theme.colors.secondaryText};
  }
`;



const Logo = styled.div`
color: white;
font - size: 24px;
font - weight: bold;
cursor: pointer;
`;

const DesktopNavbar = () => {
  const location = useLocation(); // Get the current path
  return (

    <NavbarContainer>
      <Logo><NavLink to="/" isActive={location.pathname === "/"}>NB</NavLink></Logo>
      <NavList>
        <li><NavLink to="/about" isActive={location.pathname === "/about"}>ABOUT</NavLink></li>
        <li><NavLink to="/projects" isActive={location.pathname === "/projects"}>PROJECTS </NavLink></li>
        <li><NavLink to="/contact" isActive={location.pathname === "/contact"}>CONTACT</NavLink></li>
        <ThemeToggleButton />
      </NavList>
    </NavbarContainer>
  )
};

export default DesktopNavbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import Hamburger from "./HamburgerMenu.styles";
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton.style';

const NavbarContainer = styled.nav`
background-color: ${props => props.theme.background};
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 10px 20px;
  z-index: 1002;
  `;

const NavList = styled.ul`
background-color: ${props => props.theme.background};
position: fixed;
width: 100%;
height: 100vh;
z-index: 1001;
list-style: none;
display: flex;
align-items: center;
flex-direction: column;
top: ${props => (props.isOpen ? '60px' : '-100%')}; // Toggle between these values
transition: top 0.8s ease; // Add a transition

`;

const NavItem = styled.li`
  margin: 15px 0; // You can adjust the value to your preference
  color: ${props => (props.isActive ? '#00aaff' : 'inherit')};
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.isActive ? 'blue' : props.theme.textPrimary)};
  font-size: 24px;
  font-weight:bold;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #00aaff;
  }
`;

const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

const MobileNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const location = useLocation(); // Get the current path

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <>
      <NavbarContainer>
        <Logo><NavLink to="/">My App</NavLink></Logo>
        <ThemeToggleButton />
        <Hamburger onClick={handleMenuToggle} isOpen={isMenuOpen} />
      </NavbarContainer>

      <NavList isOpen={isMenuOpen}>
        <NavItem isActive={location.pathname === "/about"}><NavLink to="/about" onClick={handleNavLinkClick} isActive={location.pathname === "/about"}>About</NavLink></NavItem>
        <NavItem isActive={location.pathname === "/about"}><NavLink to="/projects" onClick={handleNavLinkClick} isActive={location.pathname === "/projects"}>Projects</NavLink></NavItem>
        <NavItem isActive={location.pathname === "/about"}><NavLink to="/contact" onClick={handleNavLinkClick} isActive={location.pathname === "/contact"}> Contact</NavLink></NavItem>
      </NavList>

    </>
  );
};

export default MobileNavbar;
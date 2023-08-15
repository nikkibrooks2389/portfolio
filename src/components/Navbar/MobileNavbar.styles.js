import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import Hamburger from "./HamburgerMenu.styles";
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton.style';

const NavbarContainer = styled.nav`
background-color: ${props => props.theme.colors.primaryBackground};
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
background-color: ${props => props.theme.colors.primaryBackground};
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
color: ${props => (props.isActive ? props.theme.colors.accent : props.theme.colors.primaryText)};
font-size: 1.5rem;
cursor: pointer;
position: relative;
transition: background-color 0.3s ease-in-out;

&:hover {
  color: ${props => !props.isActive && props.theme.colors.accentHover};
}


&::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: ${props => props.theme.colors.accentHover};
  transition: width 0.3s ease-in-out;
}

&:hover::after {
  width: ${props => !props.isActive ? "100%" : "0%"}
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
        <Logo><NavLink to="/" onClick={handleNavLinkClick} isActive={location.pathname === "/"}>NB</NavLink></Logo>
        <ThemeToggleButton />
        <Hamburger onClick={handleMenuToggle} isOpen={isMenuOpen} />
      </NavbarContainer>

      <NavList isOpen={isMenuOpen}>
        <NavItem isActive={location.pathname === "/about"}><NavLink to="/about" onClick={handleNavLinkClick} isActive={location.pathname === "/about"}>About</NavLink></NavItem>
        <NavItem isActive={location.pathname === "/projects"}><NavLink to="/projects" onClick={handleNavLinkClick} isActive={location.pathname === "/projects"}>Projects</NavLink></NavItem>
        <NavItem isActive={location.pathname === "/contact"}><NavLink to="/contact" onClick={handleNavLinkClick} isActive={location.pathname === "/contact"}> Contact</NavLink></NavItem>
      </NavList>

    </>
  );
};

export default MobileNavbar;
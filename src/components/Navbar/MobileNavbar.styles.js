import React, { useState } from 'react';
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import Hamburger from "./HamburgerMenu.styles";
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton.style';
import BaseNavbar from './BaseNavBar.styles';
import NavLink from './NavLink.style';



const NavList = styled.ul`
background: ${({ theme }) => theme.colors.primaryBackground};
padding-top:3rem;
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
  padding: 1.5rem 0;
  color: ${props => (props.isActive ? '#00aaff' : 'inherit')};
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
      <BaseNavbar isMenuOpen={isMenuOpen} location={location}>
        <ThemeToggleButton />
        <Hamburger onClick={handleMenuToggle} isOpen={isMenuOpen} />
      </BaseNavbar>

      <NavList isOpen={isMenuOpen}>
        <NavItem isActive={location.pathname === "/about"}><NavLink isMobile={true} to="/about" onClick={handleNavLinkClick} isActive={location.pathname === "/about"}>About</NavLink></NavItem>
        <NavItem isActive={location.pathname === "/projects"}><NavLink isMobile={true} to="/projects" onClick={handleNavLinkClick} isActive={location.pathname === "/projects"}>Projects</NavLink></NavItem>
        <NavItem isActive={location.pathname === "/contact"}><NavLink isMobile={true} to="/contact" onClick={handleNavLinkClick} isActive={location.pathname === "/contact"}> Contact</NavLink></NavItem>
      </NavList>

    </>
  );
};

export default MobileNavbar;
import React, { useState } from 'react';
import styled from "styled-components";

import Hamburger from "./HamburgerMenu.styles";
import ThemeToggleButton from '../../ThemeToggleButton/ThemeToggleButton.style';
import BaseNavbar from './BaseNavBar.styles';

const NavList = styled.ul`
  background: ${({ theme }) => theme.colors.background};
  padding-top: 7rem;
  position: fixed;
  width: 100%;
  z-index: 1001;
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  top: ${props => (props.isOpen ? '0' : '-100%')};
  transition: top 0.5s ease; 
`;

const NavItem = styled.li`
  padding: 1.5rem 0;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: ${({ isActive }) => (isActive ? '600' : '400')};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.pop2 : theme.colors.link};

  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accentSecondary}; // Nice purple
  }
`;

const MobileNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

  const routes = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <BaseNavbar setIsMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen}>
      <RightControls>
    <ThemeToggleButton />
    <Hamburger onClick={() => setMenuOpen(prev => !prev)} isOpen={isMenuOpen} />
  </RightControls>
      </BaseNavbar>

      <NavList isOpen={isMenuOpen}>
        {routes.map(route => (
          <NavItem key={route.id}>
            <a
              href={`#${route.id}`}
              onClick={() => setMenuOpen(false)}  // Close the menu after clicking
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {route.label}
            </a>
          </NavItem>
        ))}
      </NavList>
    </>
  );
};

export default MobileNavbar;

import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import NavLink from './NavLink.style';

const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme, isMenuOpen, isScrolled }) =>
        isMenuOpen ? theme.colors.primaryBackground
            : isScrolled ? `${theme.colors.primaryBackground}CC` : "none"};
  backdrop-filter: ${({ isScrolled }) => isScrolled ? "blur(10px)" : "none"};
  box-shadow: ${({ isScrolled }) => isScrolled ? "0 .5px 1px rgba(0, 0, 0, 0.1)" : "none"};
  padding: 2rem;
  z-index: 1005;
`;

const Logo = styled.div`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
`;

const BaseNavbar = ({ children, location, setIsMenuOpen, isMenuOpen = false }) => {
    const [isScrolled, setIsScrolled] = useState(false);


    // The handleScroll function is memoized using useCallback to ensure that its reference doesn't change on every render.
    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 0);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <NavbarContainer isMenuOpen={isMenuOpen} isScrolled={isScrolled}>
            <Logo onClick={() => isMenuOpen && setIsMenuOpen(false)}>
                <NavLink to="/" isActive={location.pathname === "/"}>
                    NB
                </NavLink>
            </Logo>
            {children}
        </NavbarContainer>
    );
};

export default BaseNavbar;
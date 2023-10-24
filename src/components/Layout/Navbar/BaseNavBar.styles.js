import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavLink from './NavLink.style';

const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme, isMenuOpen, isScrolled }) =>
        isMenuOpen ? "transparent"
            : isScrolled ? theme.colors.primaryBackground : "none"};
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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        // Set the initial state based on current scroll position
        setIsScrolled(window.scrollY > 0);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
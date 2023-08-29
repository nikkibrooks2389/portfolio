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
  background-color: ${({ theme, isMenuOpen }) => (isMenuOpen ? theme.colors.primaryBackground : "none")};
  padding: 2rem;
  z-index: 1005;
`;


const Logo = styled.div`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
`;

const BlurredNavbarContainer = styled(NavbarContainer)`
backdrop-filter: blur(10px); 

`;


const BaseNavbar = ({ children, location, isMenuOpen = false }) => {
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


    const NavbarComponent = isScrolled ? BlurredNavbarContainer : NavbarContainer;


    return (
        <NavbarComponent isMenuOpen={isMenuOpen}>
            <Logo>
                <NavLink to="/" isActive={location.pathname === "/"}>
                    NB
                </NavLink>
            </Logo>
            {children}
        </NavbarComponent>
    );
};

export default BaseNavbar;
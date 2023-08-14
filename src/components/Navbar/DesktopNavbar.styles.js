import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton.style.js";

const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 10px 20px;
  `;
const NavList = styled.ul`
align-items:center;
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.textPrimary};
  font-size: 18px;
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

const DesktopNavbar = () => (
  <NavbarContainer>
    <Logo><NavLink to="/">My App</NavLink></Logo>
    <NavList>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/projects">Projects</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <ThemeToggleButton />
    </NavList>
  </NavbarContainer>
);

export default DesktopNavbar;
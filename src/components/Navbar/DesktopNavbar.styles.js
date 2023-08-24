
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton.style.js';
import BaseNavbar from './BaseNavBar.styles.js';
import NavLink from './NavLink.style.js';

const NavList = styled.ul`
align-items: center;
list-style: none;
font-weight: 500;
display: flex;
width: 80%;
justify-content: space-between;
gap: 2.5rem;
margin: 0;
padding: 0;
`;


const DesktopNavbar = () => {

  const location = useLocation();

  return (
    <BaseNavbar location={location}>

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
    </BaseNavbar>
  );
};

export default DesktopNavbar;
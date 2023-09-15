import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ThemeToggleButton from '../../ThemeToggleButton/ThemeToggleButton.style.js';
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
  const isActivePath = path => location.pathname === path;

  const routes = [
    { path: '/about', label: 'ABOUT' },
    { path: '/projects', label: 'PROJECTS' },
    { path: '/contact', label: 'CONTACT' }
  ];

  return (
    <BaseNavbar location={location}>
      <NavList>
        {routes.map(route => (
          <li key={route.path}>
            <NavLink to={route.path} isActive={isActivePath(route.path)}>
              {route.label}
            </NavLink>
          </li>
        ))}
        <ThemeToggleButton />
      </NavList>
    </BaseNavbar>
  );
};

export default DesktopNavbar;
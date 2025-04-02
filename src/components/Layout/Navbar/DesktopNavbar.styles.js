import styled from 'styled-components';
import ThemeToggleButton from '../../ThemeToggleButton/ThemeToggleButton.style.js';
import BaseNavbar from './BaseNavBar.styles.js';
import NavLink from './NavLink.style.js';

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  gap: 1.75rem;
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 0.95rem;

  // @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  //   font-size: 0.9rem;
  //   gap: 1.25rem;
  // }
`;

const DesktopNavbar = () => {
  const routes = [
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ];
  const LogicDivider = styled.li`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.header2};
  font-size: 1.2rem;
  font-weight: 300;
  padding: 0 0.3rem;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
  return (
    <BaseNavbar>
      <NavList>
        {routes.map(route => (
          <li key={route.id}>
            {/* Use NavLink for theming and active state */}
            <NavLink href={`#${route.id}`}>{route.label}</NavLink>
          </li>
        ))}
        {/* Theme toggle button */}
        <LogicDivider>||</LogicDivider>
        <ThemeToggleButton />
      </NavList>
    </BaseNavbar>
  );
};

export default DesktopNavbar;
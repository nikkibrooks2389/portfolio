import styled from 'styled-components';

const StyledNavLink = styled.a`
  text-decoration: none;
  position: relative;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ isMobile }) => (isMobile ? '2.2rem' : '0.95rem')};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.pop2 : theme.colors.link};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accentSecondary};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ isActive }) => (isActive ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accentSecondary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavLink = ({ href, activeSection, children, isMobile = false }) => {
  const isActive = href === `#${activeSection}`;

  return (
    <StyledNavLink href={href} isActive={isActive} isMobile={isMobile}>
      {children}
    </StyledNavLink>
  );
};

export default NavLink;
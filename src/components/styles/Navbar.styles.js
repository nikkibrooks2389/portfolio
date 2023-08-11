import styled from "styled-components";
import { Link } from 'react-router-dom';


const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  padding: 10px 20px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
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

const Navbar = () => (
    <NavbarContainer>
        <Logo><NavLink to="/"> My App</NavLink></Logo>
        <NavList>
            <li></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>

        </NavList>
    </NavbarContainer>
);

export default Navbar;
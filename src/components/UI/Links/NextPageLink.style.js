import styled, { keyframes } from "styled-components";

import { Link } from 'react-router-dom';

import { slideUpFadeIn } from "../../styles/keyframes";


const StyledNextPageLink = styled(Link)`
  width:max-content;
  text-decoration:none;
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primaryText};
  margin: 2rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }
  }
  transform: translateY(20px); 
  animation: ${slideUpFadeIn} 0.5s forwards;
  animation-delay:  ${props => props?.animationDelay};

  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
  font-size: 1rem;
  text-align:center;
  }

`;


const NextPageLink = ({ to, children, animationDelay }) => {
  return <StyledNextPageLink animationDelay={animationDelay} to={to} > {children} </StyledNextPageLink>
}

export default NextPageLink;
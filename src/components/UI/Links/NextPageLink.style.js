import styled, { keyframes } from "styled-components";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { slideUpFadeIn } from "../../styles/keyframes";

const bounceArrow = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px);
  }
`;

const AnimatedArrow = styled(FontAwesomeIcon)`
  font-size: 1,5rem;
  color: ${props => props.theme.colors.secondaryAccent};
  animation: ${bounceArrow} 1s alternate infinite;
`;


const StyledNextPageLink = styled(Link)`
  font-family:${({ theme }) => theme.fonts.secondary};
  text-decoration:none;
  font-size: 1.4rem;
  cursor:pointer;
  font-weight:400;
  padding-bottom:2rem;
  margin-top:1rem;
  color:${props => props.theme.colors.primaryText};
  opacity: 0;
  transform: translateY(20px); 
  animation: ${slideUpFadeIn} 0.5s forwards;
  animation-delay:  ${props => props?.animationDelay};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
  font-size: 1rem;
  text-align:center;
  }

`;


const NextPageLink = ({ to, children, animationDelay }) => {
  return <StyledNextPageLink animationDelay={animationDelay} to={to} > {children}  <AnimatedArrow icon={faArrowRightLong} /></StyledNextPageLink>
}

export default NextPageLink;
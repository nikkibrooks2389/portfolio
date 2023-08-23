import styled, { keyframes } from "styled-components";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { slideUpFadeIn } from "../styles/keyframes";

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
  font-size: 1.3rem;
  cursor:pointer;
  font-weight:500;
  color:${props => props.theme.colors.secondaryText};
  opacity: 0;
  transform: translateY(20px); 
  animation: ${slideUpFadeIn} 0.5s forwards;
  animation-delay:  ${props => props?.animationDelay};

`;


const NextPageLink = ({ to, children, animationDelay }) => {
    return <StyledNextPageLink animationDelay={animationDelay} to={to} > {children}  <AnimatedArrow icon={faArrowRightLong} /></StyledNextPageLink>
}

export default NextPageLink;
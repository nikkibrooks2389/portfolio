import styled, { keyframes } from "styled-components";
import { ViewsWrapper } from "./ViewsWrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`

  display :flex;
flex-direction:column;
 margin-top:8rem;
 align-items:center


`;
const slideUpFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Name = styled.div`
font-size: 2.5rem;
margin-left:1rem;
font-weight:500;
color:${props => props.theme.colors.accent};
opacity: 0; // Start hidden
  transform: translateY(20px); // Start slightly below
  animation: ${slideUpFadeIn} 0.5s forwards; // Apply the animation
  animation-delay: 2.2s; // Optional: Delay the animation so it happens after the "Frontend" animation. Adjust the time as needed.

`;

const AboutMe = styled(Link)`
text-decoration:none;
font-size: 1.3rem;
cursor:pointer;
font-weight:500;
color:${props => props.theme.colors.secondaryText};
opacity: 0; // Start hidden
  transform: translateY(20px); // Start slightly below
  animation: ${slideUpFadeIn} 0.5s forwards; // Apply the animation
  animation-delay: 2.5s; // Optional: Delay the animation so it happens after the "Frontend" animation. Adjust the time as needed.
`;


const slideWithBounce = keyframes`
0% { transform: translateX(-100vw); }
60% { transform: translateX(3px); }
75% { transform: translateX(-2px); }
87% { transform: translateX(1px); }
94% { transform: translateX(-1px); }
100% { transform: translateX(0); }
`;
const FrontendWord = styled.div`
  display: inline-block;
  font-size: 7rem;
  margin-right:5px;
  animation: ${slideWithBounce} 0.9s forwards;
`;


const slideInRightWithSmoothBounce = keyframes`
  0% { transform: translateX(100vw); } // Start from the right
  80% { transform: translateX(-5px); } // Bounce effect
  90% { transform: translateX(2.5px); } 
  100% { transform: translateX(0); } // Settle
`;

const RightSmoothBouncingLetter = styled.span`
  display: inline-block;
  font-size: 3rem;
  transform: translateX(100vw); // Begin from the right
  animation: ${slideInRightWithSmoothBounce} 0.7s forwards;
  animation-delay: ${props => 0.3 + props.index * 0.15}s; // Added a 0.7s delay for the entire word

`;



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

const ShortDescription = styled.p`
  font-size: 1.3rem;
  color: ${props => props.theme.colors.secondaryText};
  text-align: start;
  max-width: 700px;
  margin: 1rem 0;
  opacity: 0; // Start hidden
  transform: translateY(20px); // Start slightly below
  animation: ${slideUpFadeIn} 0.5s forwards; // Apply the animation
  animation-delay: 2.4s; // Optional: Delay the animation so it happens after the "Frontend" animation. Adjust the time as needed.

`;


const Home = () => (
  <ViewsWrapper>
    <HeaderContainer>
      <div>
        <Name>Nicole Brooks</Name>
        <div>
          <FrontendWord>Frontend</FrontendWord>
          {"Developer".split("").map((char, index) => (
            <RightSmoothBouncingLetter key={index} index={index}>
              {char}
            </RightSmoothBouncingLetter>
          ))}
        </div>
        <ShortDescription>
          Passionate frontend developer with a knack for creating intuitive and visually appealing web experiences. Enthusiastic about blending creativity with technology to craft seamless user interactions.
        </ShortDescription>
        <AboutMe to="/about"> More About Me  <AnimatedArrow icon={faArrowRightLong} /></AboutMe>
      </div>
    </HeaderContainer>
  </ViewsWrapper>
);

export default Home;
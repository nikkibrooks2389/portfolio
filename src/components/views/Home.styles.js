import styled, { keyframes } from "styled-components";
import { slideUpFadeIn } from "../styles/keyframes";
import { ViewsWrapper } from "./ViewsWrapper";
import NextPageLink from "../Links/NextPageLink.style";

export const HeaderContainer = styled.div`
  display :flex;
  flex-direction:column;
  justify-content:center; 
`;

const Name = styled.div`
  font-size: 3rem;
  font-weight:300;
  color:${props => props.theme.colors.accent};
  opacity: 0; 
  transform: translateY(20px); 
  animation: ${slideUpFadeIn} 0.5s forwards; 
  animation-delay: 2.2s;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.1rem;
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
      font-size: 1.4rem;
  }
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
  font-size: 12rem;
  margin-right:5px;
  animation: ${slideWithBounce} 0.9s forwards;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 9rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 7rem;
  };
  
  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
  font-size: 4rem;
  }
`;
const DeveloperWordContainer = styled.div`
 padding-bottom:1.7rem;
 @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
 
  padding-bottom:1.2rem;
  }
`;

const RoleContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justifycontent:center
`;


const slideInRightWithSmoothBounce = keyframes`
  0% { transform: translateX(100vw); } // Start from the right
  80% { transform: translateX(-5px); } // Bounce effect
  90% { transform: translateX(2.5px); } 
  100% { transform: translateX(0); } // Settle
`;

const RightSmoothBouncingLetter = styled.span`
  // display: inline-bl
  font-size: 8rem;
  transform: translateX(100vw); // Begin from the right
  animation: ${slideInRightWithSmoothBounce} 0.7s forwards;
  animation-delay: ${props => 0.3 + props.index * 0.15}s; // Added a 0.7s delay for the entire word
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 7rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 5rem;
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
  font-size: 3rem;
  }
`;

const ShortDescription = styled.p`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-align: center;
  max-width: 800px; 
  margin: 1rem 0 4rem 0;
  opacity: 0; // Start hidden
  transform: translateY(20px); // Start slightly below
  animation: ${slideUpFadeIn} 0.5s forwards; // Apply the animation
  animation-delay: 2.4s; 
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.6rem;
    max-width: 650px; 
    };
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      max-width:500px;
      text-align:center;
      font-size: 1.8rem;
  };
  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    max-width:300px;
    text-align:center;
    font-size: 1.1rem;
    }
  `;




const Home = () => (
  <ViewsWrapper>
    <HeaderContainer>

      <Name>NICOLE BROOKS</Name>
      <RoleContainer>
        <FrontendWord>Frontend</FrontendWord>
        <DeveloperWordContainer >
          {"Developer".split("").map((char, index) => (
            <RightSmoothBouncingLetter key={index} index={index}>
              {char}
            </RightSmoothBouncingLetter>
          ))}
        </DeveloperWordContainer>
      </RoleContainer>
      <ShortDescription>
        Passionate frontend developer with a knack for creating intuitive and visually appealing web experiences. Enthusiastic about blending creativity with technology to craft seamless user interactions.
      </ShortDescription>
      <NextPageLink to="/about" animationDelay="2.5s"> More About Me </NextPageLink>

    </HeaderContainer>
  </ViewsWrapper>
);

export default Home;
import React from "react";
import styled, { keyframes } from "styled-components";
import { slideUpFadeIn, slideInFromLeftWithBounce } from "../styles/animations/keyframes";
import { ViewsWrapper } from "./ViewsWrapper";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FrontendWord = styled.div`
  font-size: 6rem;
  margin-right: 5px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.tagline};
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.header1}, ${({ theme }) => theme.colors.header2});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${slideInFromLeftWithBounce} 0.9s forwards;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    font-size: 2.5rem;
  }
`;

const RoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DeveloperWordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const slideInRightWithSmoothBounce = keyframes`
  0% { transform: translateX(100vw); }
  80% { transform: translateX(-5px); }
  90% { transform: translateX(2.5px); }
  100% { transform: translateX(0); }
`;

const RightSmoothBouncingLetter = styled.span`
  font-size: 6rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  transform: translateX(100vw);
  animation: ${slideInRightWithSmoothBounce} 0.7s forwards;
  animation-delay: ${(props) => 0.3 + props.index * 0.15}s;
    color: ${({ theme }) => theme.colors.header2};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    font-size: 2.5rem;
  }
`;

const ShortDescription = styled.pre`
background-color: ${({ theme }) => theme.colors.surfaceAlt}; // theme-aware background
border: 1px solid ${({ theme }) => theme.colors.border};      // theme-aware border
border-radius: 6px;
padding: 0.8rem 1.2rem;
font-size: 1rem;
color: ${({ theme }) => theme.colors.textSecondary};
font-family: ${({ theme }) => theme.fonts.primary}; // monospace font
text-align: left;
white-space: pre-wrap;
max-width: 800px;
margin: 2rem 0 0 0;
opacity: 0;
transform: translateY(20px);
animation: ${slideUpFadeIn} 0.5s forwards;
animation-delay: 2.4s;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
    max-width: 650px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 500px;
    text-align: center;
    font-size: .8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    max-width: 300px;
    text-align: center;
    font-size: .9rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    bottom: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
   bottom: 120px;
  }
`;

const ScrollText = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.pop2};
  margin-bottom: 10px;
  animation: fadeInOut 4s infinite;

  @keyframes fadeInOut {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const SlidingArrow = styled.div`
  width: 12px;
  height: 12px;
  border-left: 2px solid ${({ theme }) => theme.colors.pop2};
  border-bottom: 2px solid ${({ theme }) => theme.colors.pop2};
  transform: rotate(45deg);
  animation: slideArrow 1.5s infinite;

  @keyframes slideArrow {
    0% {
      transform: translateY(0) rotate(315deg);
      opacity: 1;
    }
    50% {
      transform: translateY(10px) rotate(315deg);
      opacity: 0.5;
    }
    100% {
      transform: translateY(20px) rotate(315deg);
      opacity: 0;
    }
  }
`;

const Home = () => (
  <ViewsWrapper>
    <HeaderContainer>
      {/* <Name>NICOLE BROOKS</Name> */}
      <RoleContainer>
        <FrontendWord>&lt;Frontend</FrontendWord>
        <DeveloperWordContainer>
          {"Developer />".split("").map((char, index) => (
            <RightSmoothBouncingLetter key={index} index={index}>
              {char}
            </RightSmoothBouncingLetter>
          ))}
        </DeveloperWordContainer>
      </RoleContainer>
      <ShortDescription>
{`// createdBy: Nicole Brooks
// role: Frontend Developer
// focus: Clean UI ✦ Smooth UX ✦ Modern Web`}
</ShortDescription>

      <ScrollIndicator>
        <ScrollText>Scroll Down</ScrollText>
        <SlidingArrow />
      </ScrollIndicator>
    </HeaderContainer>
  </ViewsWrapper>
);

export default Home;
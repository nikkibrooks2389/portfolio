

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ViewsWrapper } from "./ViewsWrapper";
import { slideUpFadeIn, slideInFromRightFadeIn } from "../styles/keyframes";
import Resume from "../resume/Resume.style";
import Image1 from "../../../src/assets/images/nicole-img-1.jpg";
import Image2 from "../../../src/assets/images/nicole-img-2.jpg";
import Image4 from "../../../src/assets/images/nicole-img-4.jpg";
import Image6 from "../../../src/assets/images/nicole-img-6.jpg";
import NextPageLink from "../Links/NextPageLink.style";

const AboutContainer = styled.div`
  display: flex;
  width: 80%;
  padding-top:150px;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 85%;   
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
    text-align:center
   
  }
`;

const AboutMeHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  animation: ${slideInFromRightFadeIn} 0.9s ease forwards;
`;

const AboutMeDescription = styled.p`
  padding-top: 0.5rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 1.4rem;
  padding-left: 1rem;
  font-family: ${({ theme }) => theme.fonts.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.3rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    order: 1;
    flex-direction: column;
    font-size: 1.2rem;
  }
`;

const AnimatedContainer = styled.div`
  animation: ${slideUpFadeIn} 0.9s forwards;
  animation-delay: 0.7s;
  opacity: 0;
 
`;

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    order: 2;
    max-width: unset;
    flex-direction: column;
    margin-top: 3rem;
  }
`;

const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: center;
    max-width: 100%;
    margin: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 10px;
  }
`;

const SkillAboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.5rem 0 5rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const Skill = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 0.2rem;
  line-height: 1.5;
  font-size: 1.3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const SkillHeader = styled.h3`
  font-size: 1.7rem;
  margin-bottom:.5rem;
  font-weight:300;
  text-decoration:underline;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`;

const ContactMe = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondaryAccent};
`;

const ResumeSection = styled.div`
  margin: 2rem 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    justify-content: center;
  }
`;

const images = [Image2, Image1, Image4, Image6];


const About = () => {
  return (
    <ViewsWrapper>
      <AboutContainer>

        <AboutMeHeader>About Me.</AboutMeHeader>
        <AnimatedContainer>
          <ResumeSection>
            <Resume />
          </ResumeSection>
          <SkillAboutContainer>
            <SkillsSection>
              <SkillSection>
                <SkillHeader>Frontend Tools</SkillHeader>
                <Skill>
                  JavaScript(ES6+), HTML5, CSS3/SCS, React, React Native,
                  Redux/Redux Toolkit, Bootstrap, MUI / MUI Base, Antd,
                  Styled Components, AmCharts
                </Skill>
              </SkillSection>

              <SkillSection>
                <SkillHeader>Backend Tools</SkillHeader>
                <Skill>Node.js, Express</Skill>
              </SkillSection>

              <SkillSection>
                <SkillHeader>DevOps</SkillHeader>
                <Skill>Git, GitHub, Bitbucket, Docker, Aws</Skill>
              </SkillSection>
            </SkillsSection>
            <AboutMeDescription>
              Hello, my name is Nicole Brooks, originally from Massachusetts and now thriving in sunny San Diego, California. I'm a frontend developer with a design flair and an innovative spirit.<br /><br />

              My journey into tech world started at Learn Academy's coding bootcamp, a turning point that ignited my passion for frontend magic.
              Following that, I embarked on an exciting internship at Victorise, where I refined my skills even further. This rewarding path led me to my most recent role as a frontend developer at iCompaas. Here, I've been crafting engaging features and evolving alongside a dynamic team.<br /><br />

              I'm rapid learner with a strong work ethic, I flourish in collaborative environments, always eager to both share knowledge and learn from peers. In my free time, you'll  find me hanging out with my dogs, skateboarding around San Diego, or simply soaking up the sun at the beach.<br /><br />

              I'm actively exploring new frontend opportunities, eager to bring my expertise and passion to dynamic teams. If you'd like to connect or discuss potential collaborations, please feel free to reach out to me through my <ContactMe to={"/contact"}>Contact Page</ContactMe>
            </AboutMeDescription>
          </SkillAboutContainer>
        </AnimatedContainer>

        <NextPageLink to="/projects" animationDelay="1s">Continue To Projects</NextPageLink>
      </AboutContainer>
    </ViewsWrapper>
  );
};

export default About;
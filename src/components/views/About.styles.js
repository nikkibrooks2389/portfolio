import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ViewsWrapper } from "./ViewsWrapper";
import { slideUpFadeIn, slideInFromRightFadeIn } from "../styles/keyframes";

import ImageGrid from "../imageGrid/imageGrid.styles";
import Resume from "../resume/Resume.style";
import Image1 from '../../../src/assets/images/nicole-img-1.jpg';
import Image2 from '../../../src/assets/images/nicole-img-2.jpg';
import Image3 from '../../../src/assets/images/nicole-img-3.jpg';
import Image4 from '../../../src/assets/images/nicole-img-4.jpg';
import Image6 from '../../../src/assets/images/nicole-img-6.jpg';


const AboutContainer = styled.div`
  display:flex;
  width:90%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
   flex-direction:column
   width:100%;
  }
`;

const AboutMeSection = styled.div`
  animation: ${slideInFromRightFadeIn} 0.7s ease forwards;
`;

const AboutMeHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom:2rem;
  animation: ${slideInFromRightFadeIn} 0.9s ease forwards;
`;

const AboutMeDescription = styled.p`
padding-top:.5rem;

  color:${({ theme }) => theme.colors.secondaryText};
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom:1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order:1;
    flex-direction:column;
   }
  `;

const ImageGridContainer = styled.div`
  display:flex;
justify-content:center;
  animation: ${slideUpFadeIn} 0.5s forwards; 
  animation-delay: 1.2s; 

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%; // Full width on smaller screens
    padding: 0; // No padding on smaller screens
  }
`;

const SkillsContainer = styled.div`
  display:flex
  flex-direction:column;
   max-width: 300px;
  
  padding-right:1rem;
  // opacity: 0; // Start hidden
  // transform: translateY(20px); 
  // animation: ${slideUpFadeIn} 0.5s forwards; 
  // animation-delay: 1.2s; 

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order:2;
    flex-direction:column;
   }
`;

const SkillSection = styled.div`
  display:flex;
  flex-direction:column;
margin-bottom:1rem;
  // padding-right:1rem;
  // opacity: 0; // Start hidden
  // transform: translateY(20px); 
  // animation: ${slideUpFadeIn} 0.5s forwards; 
  // animation-delay: 1.2s; 

 
`;

const SkillAboutContainer = styled.div`
  display:flex;
  flex-direction:row;
  margin-top:1.5rem;
  // padding-right:1rem;
  // opacity: 0; // Start hidden
  // transform: translateY(20px); 
  // animation: ${slideUpFadeIn} 0.5s forwards; 
  // animation-delay: 1.2s; 

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction:column;
   }
`;

const Skill = styled.span`
font-family : ${({ theme }) => theme.fonts.secondary};
color: ${({ theme }) => theme.colors.secondaryText};
padding:.3rem;
line-height:1.5;
font-size: 1.3rem

`
const SkillHeader = styled.h3`

font-size: 1.6rem
`

const ContactMe = styled(Link)`
text-decoration:none;
color:${({ theme }) => theme.colors.secondaryAccent};
`


const About = () => {


  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image6
  ];
  return (
    <ViewsWrapper>

      <AboutContainer>
        <AboutMeSection>
          <AboutMeHeader>About Me.</AboutMeHeader>
          <ImageGridContainer>
            <ImageGrid images={images} />
          </ImageGridContainer>
          <Resume />
          <SkillAboutContainer>

            <SkillsContainer>
              <SkillSection>
                <SkillHeader>Frontend Tools</SkillHeader>
                <Skill>JavaScript(ES6+), HTML5, CSS3/SCS, React, React Native, Redux/Redux Toolkit, Bootstrap, MUI / MUI Base, Antd, Styled Components, AmCharts</Skill>
              </SkillSection>

              <SkillSection>
                <SkillHeader>Backend Tools</SkillHeader>

                <Skill>Node.js, Express</Skill>

              </SkillSection>
              <SkillSection>
                <SkillHeader>DevOps</SkillHeader>
                <Skill>Git, GitHub, Bitbucket, Docker, Aws
                </Skill>
              </SkillSection>

            </SkillsContainer>
            <AboutMeDescription>
              Hello, my name is Nicole Brooks, originally from Massachusetts and now thriving in sunny San Diego, California. I'm a frontend developer with a design flair and an innovative spirit.<br /><br />

              My journey into tech world started at Learn Academy's coding bootcamp, a turning point that ignited my passion for frontend magic.
              Following that, I embarked on an exciting internship at Victorise, where I refined my skills even further. This rewarding path led me to my most recent role as a frontend developer at iCompaas. Here, I've been crafting engaging features and evolving alongside a dynamic team.<br /><br />

              I'm rapid learner with a strong work ethic, I flourish in collaborative environments, always eager to both share knowledge and learn from peers. In my free time, you'll  find me hanging out with my dogs, skateboarding around San Diego, or simply soaking up the sun at the beach.<br /><br />

              I'm actively exploring new frontend opportunities, eager to bring my expertise and passion to dynamic teams. If you'd like to connect or discuss potential collaborations, please feel free to reach out to me through my <ContactMe to={"/contact"}>Contact Page</ContactMe>
            </AboutMeDescription>

          </SkillAboutContainer>
        </AboutMeSection>

      </AboutContainer>
    </ViewsWrapper>
  )
};

export default About;
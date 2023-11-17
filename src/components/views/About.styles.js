

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ViewsWrapper } from "./ViewsWrapper";
import { slideUpFadeIn } from "../styles/keyframes";
import Resume from "../resume/Resume.style";

import Image9 from "../../../src/assets/images/nicole-img-9.jpg";
import NextPageLink from "../UI/Links/NextPageLink.style";
import PageHeader from "../pageHeader/PageHeader.styles";

const CircularImage = styled.div`
  width: 300px;
  height: 300px; 
  overflow: hidden;
  border-radius: 50%;
margin-bottom:2.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  object-position:  center; /* Adjust this property to display more of the top of the image */
`;


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
  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    padding-top:120px;
  }
`;



const AboutMeDescription = styled.p`
  padding:0 0 4rem 2.5rem ;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
text-align:center;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.3rem;
    margin-top:2rem;
    padding:0px
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {  
    flex-direction: column;
    font-size: 1.3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    font-size: 1.1rem;
  }
`;

const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 1rem 3rem;
`;


const AnimatedContainer = styled.div`
  animation: ${slideUpFadeIn} 0.9s forwards;
  animation-delay: 0.7s;
  opacity: 0;
 
`;

const SkillsSection = styled.div`
margin:2rem 0;
  display: flex;
  flex-wrap: wrap;
justify-content:space-evenly;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { 
    max-width: unset;
    flex-direction: column;
    margin-top: 2rem;
  }
`;

const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  max-width:450px;
 padding:0rem 2rem;
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
  flex-direction: column;
  margin: 1.5rem 0 0 0;

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
text-align:center;
  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    font-size: 1.1rem;
  }
`;

const SkillHeader = styled.h3`
  font-size: 1.5rem;
  margin-bottom:1rem;
  font-weight:600;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration:underline;
  text-align:center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`;

const ContactMe = styled(Link)`
  font-weight:600;
  color: ${({ theme }) => theme.colors.secondaryText};

`;

const ResumeSection = styled.div`
  margin: 2rem 0 2rem 0;
  display: flex;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  }
`;


const ImageAndDescriptionWrapper = styled.div`
display:flex;
flex-direction:column;
margin-bottom:2.5rem;
align-items:center;
justify-content:center;
@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  flex-direction:column;
  align-items:center;
  border-radius:20px
}
}
`;

const About = () => {
  return (
    <ViewsWrapper>
      <AboutContainer>


        <AnimatedContainer>
          <SkillAboutContainer>
            <ImageAndDescriptionWrapper>
              <CircularImage>
                <Image src={Image9} alt="Your Name" />
              </CircularImage>
              <PageHeader>About Me</PageHeader>
              <ResumeSection>
                <Resume />
              </ResumeSection>
              <AboutMeDescription>
                Hello, my name is Nicole Brooks, originally from Massachusetts and now thriving in sunny San Diego, California. I'm a frontend developer with a design flair and an innovative spirit.<br /><br />

                I'm rapid learner with a strong work ethic, I flourish in collaborative environments, always eager to both share knowledge and learn from peers. In my free time, you'll  find me hanging out with my dogs, skateboarding around San Diego, or soaking up the sun at the beach.<br /><br />

                I'm actively exploring new frontend opportunities, eager to bring my expertise and passion to dynamic teams. If you'd like to connect or discuss potential collaborations, please feel free to reach out to me through my <ContactMe to={"/contact"}>Contact Page</ContactMe>.
              </AboutMeDescription>
            </ImageAndDescriptionWrapper>
            <HorizontalLine />
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
          </SkillAboutContainer>
        </AnimatedContainer>

        <NextPageLink to="/projects" animationDelay="1s">Continue To Projects</NextPageLink>
      </AboutContainer>
    </ViewsWrapper>
  );
};

export default About;
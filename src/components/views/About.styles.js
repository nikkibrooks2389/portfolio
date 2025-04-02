import React from "react";
import styled from "styled-components";
import { ViewsWrapper } from "./ViewsWrapper";
import { slideUpFadeIn } from "../styles/keyframes";
import Resume from "../resume/Resume.style";
import PageHeader from "../pageHeader/PageHeader.styles";
import Image9 from "../../../src/assets/images/nicole-img-9.jpg";
import SkillTag from "../UI/skillTag";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding-top: 140px;
    width: 80%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${slideUpFadeIn} 0.9s forwards;
  opacity: 0;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 3rem;
  }
`;

const CircularImage = styled.div`
  width: 240px;
  height: 240px;
  overflow: hidden;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Intro = styled.div`
  max-width: 600px;
  text-align: center;

  @media (min-width: 992px) {
    text-align: left;
  }
`;

const frontendSkills = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Redux",
  "Styled Components",
];

const backendSkills = ["Node.js", "Express"];

const devopsSkills = ["Git", "Docker", "AWS"];

const AboutMeDescription = styled.pre`
  background-color: ${({ theme }) => theme.colors.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.textSecondary}; // or .tagline
  padding: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
  white-space: pre-wrap;
  margin: 2rem 0;
  text-align: left;

  a {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: underline;

    &:hover {
      color: ${({ theme }) => theme.colors.linkHover};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    padding: 1rem;
    text-align: center;
  }
`;
const SkillsSection = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
`;

const SkillSection = styled.div`
  max-width: 300px;
  text-align: center;
`;

const SkillHeader = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.5rem;
  text-decoration: underline;
`;

const ResumeSection = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;

  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

const About = () => {
  return (
    <ViewsWrapper>
      <AboutContainer>
        <PageHeader>About Me</PageHeader>
        <ContentWrapper>
          <CircularImage>
            <Image src={Image9} alt="Nicole Brooks" />
          </CircularImage>
          <Intro>
            <AboutMeDescription>
              {`// name: Nicole Brooks
// title: Frontend Developer
// basedIn: San Diego, CA
// loves: Clean UI, Smooth UX, Creative Coding
// funFact: Can probably outskate your dev team 🛹
// openToWork: yes!`}

              <span style={{ marginTop: "1rem" }}>
                <a href="#contact">connect</a>
              </span>
              <ResumeSection>
              <Resume />
            </ResumeSection>
            </AboutMeDescription>
          </Intro>
        </ContentWrapper>

        <SkillsSection>
          <SkillSection>
            <SkillHeader>🧠 Frontend</SkillHeader>
            {frontendSkills.map((skill) => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </SkillSection>

          <SkillSection>
            <SkillHeader>🛠️ Backend</SkillHeader>
            {backendSkills.map((skill) => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </SkillSection>

          <SkillSection>
            <SkillHeader>🚀 DevOps</SkillHeader>
            {devopsSkills.map((skill) => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </SkillSection>
        </SkillsSection>
      </AboutContainer>
    </ViewsWrapper>
  );
};

export default About;

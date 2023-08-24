import styled from "styled-components";
import { ViewsWrapper } from "./ViewsWrapper";
import { slideUpFadeIn, slideInFromRightFadeIn } from "../styles/keyframes";
import NextPageLink from "../Links/NextPageLink.style";

const ProjectsContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  padding-top:150px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 85%;   
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
    text-align:center
   
  }
`;

const ProjectsHeader = styled.h1`
  font-size: 3.5rem;
  margin: 0 0 1rem 0;
  animation: ${slideInFromRightFadeIn} 0.9s ease forwards;
  opacity: 0;
`;


const Projects = () => (
    <ViewsWrapper>
        <ProjectsContainer>
            <ProjectsHeader>Projects.</ProjectsHeader>
            <NextPageLink to="/contact" animationDelay="1s">  Contact Me</NextPageLink>
        </ProjectsContainer>
    </ViewsWrapper>
);

export default Projects;
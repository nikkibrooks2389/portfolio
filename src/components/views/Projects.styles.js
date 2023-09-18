import styled from "styled-components";
import { ViewsWrapper } from "./ViewsWrapper";
import { slideUpFadeIn } from "../styles/keyframes";
import NextPageLink from "../UI/Links/NextPageLink.style";
import PageHeader from "../pageHeader/PageHeader.styles";

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
  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    padding-top:120px;
  }
`;

const StyledProjects = styled.div`
font-size: 2.5rem;
margin:2rem 0 3rem 0;
opacity: 0;
transform: translateY(20px); 
animation: ${slideUpFadeIn} 0.5s forwards;
animation-delay: 0.7s;
`
const Projects = () => (
  <ViewsWrapper>
    <ProjectsContainer>
      <PageHeader>Projects</PageHeader>
      <StyledProjects> Coming Soon!</StyledProjects>
      <NextPageLink to="/contact" animationDelay="1s">  Contact Me</NextPageLink>
    </ProjectsContainer>
  </ViewsWrapper>
);

export default Projects;
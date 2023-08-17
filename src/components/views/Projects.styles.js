import styled from "styled-components";
import { ViewsWrapper } from "./ViewsWrapper";
import { slideUpFadeIn, slideInFromRightFadeIn } from "../styles/keyframes";
export const ProjectsContainer = styled.div`
 display:flex ;
 width:100%;
 padding: 20px;
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
        </ProjectsContainer>
    </ViewsWrapper>
);

export default Projects;
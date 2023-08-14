import styled from "styled-components";
import { ViewsWrapper } from "./ViewsWrapper";

export const ProjectsContainer = styled.div`
  text-align: center;
  font-weight: bold;
`;



const Projects = () => (
    <ViewsWrapper>
        <ProjectsContainer>
            Projects
        </ProjectsContainer>
    </ViewsWrapper>
);

export default Projects;
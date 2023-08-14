import styled from "styled-components";
import { PageContainer } from "./PageContainer.styles";

export const ProjectsContainer = styled.div`
  text-align: center;
  font-weight: bold;
`;



const Projects = () => (
    <PageContainer>
        <ProjectsContainer>
            Projects
        </ProjectsContainer>
    </PageContainer>
);

export default Projects;
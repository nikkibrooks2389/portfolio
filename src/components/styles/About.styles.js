import styled from "styled-components";
import { PageContainer } from "./PageContainer.styles";

export const AboutContainer = styled.div`
  text-align: center;
  font-weight: bold;
`;



const About = () => (
    <PageContainer>
        <AboutContainer>
            About
        </AboutContainer>
    </PageContainer>
);

export default About;
import styled from "styled-components";
import { ViewsWrapper } from "./ViewsWrapper";

export const AboutContainer = styled.div`
  text-align: center;
  font-weight: bold;
`;



const About = () => (
    <ViewsWrapper>
        <AboutContainer>
            About
        </AboutContainer>
    </ViewsWrapper>
);

export default About;
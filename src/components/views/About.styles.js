import styled from "styled-components";
import { ViewsWrapper } from "./ViewsWrapper";

export const AboutContainer = styled.div`

  font-weight: bold;
`;

export const AboutMeHeader = styled.h1`
  font-size:3rem;

  margin:2rem 0 1rem 0
`;
export const AboutMeDescription = styled.p`
  font-size:1rem;
`;



const About = () => (
    <ViewsWrapper>
        <AboutContainer>
            <AboutMeHeader>ABOUT ME.</AboutMeHeader>
            <AboutMeDescription>
                Hailing from Massachusetts and now thriving in sunny San Diego, California, I'm a frontend developer with a design flair and an innovative spirit.<br /><br />
                After graduating from Learn Academy's coding bootcamp in San Diego, I further refined my skills with an internship at Victorise, immersing myself in React Native. This experience paved the way for my most recent role at iCompaas. Here, I took the lead on projects for brands like Oneloan Direct and Wannapractice, using tools such as React, Redux, Node.js, and CSS, while integrating Docker and AWS to enhance our workflow.<br /><br />

                A rapid learner with a strong work ethic, I flourish in collaborative environments, always eager to both share knowledge and learn from peers. Away from the digital canvas, I treasure moments with my dogs, skateboarding San Diego's picturesque routes, and soaking up its beautiful beaches.<br /><br />

                I'm actively exploring new frontend opportunities, eager to bring my expertise and passion to dynamic teams. If you'd like to connect or discuss potential collaborations, please
            </AboutMeDescription>
        </AboutContainer>
    </ViewsWrapper>
);

export default About;

import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ViewsWrapper } from "./ViewsWrapper";
import { slideUpFadeIn, slideInFromRightFadeIn } from "../styles/keyframes";

import ImageGrid from "../imageGrid/imageGrid.styles";
import Resume from "../resume/Resume.style";
import Image1 from '../../../src/assets/images/nicole-img-1.jpg';
import Image2 from '../../../src/assets/images/nicole-img-2.jpg';
import Image3 from '../../../src/assets/images/nicole-img-3.jpg';
import Image4 from '../../../src/assets/images/nicole-img-4.jpg';
import Image6 from '../../../src/assets/images/nicole-img-6.jpg';


const AboutContainer = styled.div`
  display:flex;
  width:100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
   flex-direction:column
  }
`;

const AboutMeSection = styled.div`
  animation: ${slideInFromRightFadeIn} 0.7s ease forwards;
`;

const AboutMeHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom:1rem;
  animation: ${slideInFromRightFadeIn} 0.9s ease forwards;
`;

const AboutMeDescription = styled.p`
padding-top:.5rem;
  color:${({ theme }) => theme.colors.secondaryText};
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.secondary}
`;

const ImageGridContainer = styled.div`
  display:flex
  animation: ${slideUpFadeIn} 0.5s forwards; 
  animation-delay: 1.2s; 

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%; // Full width on smaller screens
    padding: 0; // No padding on smaller screens
  }
`;

const SkillsContainer = styled.div`
  display:flex
  flex-direction:column;
  min-width: 200px; 
  padding-right:1rem;
  // opacity: 0; // Start hidden
  // transform: translateY(20px); 
  // animation: ${slideUpFadeIn} 0.5s forwards; 
  // animation-delay: 1.2s; 

  // @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  //   width: 100%; // Full width on smaller screens
  //   padding: 0; // No padding on smaller screens
  // }
`;

const SkillSection = styled.div`
  display:flex;
  flex-direction:column;

  // padding-right:1rem;
  // opacity: 0; // Start hidden
  // transform: translateY(20px); 
  // animation: ${slideUpFadeIn} 0.5s forwards; 
  // animation-delay: 1.2s; 

  // @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  //   width: 100%; // Full width on smaller screens
  //   padding: 0; // No padding on smaller screens
  // }
`;

const SkillAboutContainer = styled.div`
  display:flex;
  flex-direction:row;
 margin-top:1.5rem;
  // padding-right:1rem;
  // opacity: 0; // Start hidden
  // transform: translateY(20px); 
  // animation: ${slideUpFadeIn} 0.5s forwards; 
  // animation-delay: 1.2s; 

  // @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  //   width: 100%; // Full width on smaller screens
  //   padding: 0; // No padding on smaller screens
  // }
`;

const Skill = styled.span`
font-family : ${({ theme }) => theme.fonts.secondary};
color: ${({ theme }) => theme.colors.secondaryText};
padding:.3rem

`


const ContactMe = styled(Link)`
text-decoration:none;
color:${({ theme }) => theme.colors.secondaryAccent};
`


const About = () => {

  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image6
  ];
  return (
    <ViewsWrapper>

      <AboutContainer>
        <AboutMeSection>
          <AboutMeHeader>About Me.</AboutMeHeader>
          <Resume />
          <SkillAboutContainer>

            <SkillsContainer>
              <SkillSection>
                <h2>Frontend Tools</h2>
                <Skill>JavaScript(ES6+)</Skill>
                <Skill>HTML5</Skill>
                <Skill>CSS3/SCSS</Skill>
                <Skill>React</Skill>
                <Skill>React Native</Skill>
                <Skill>Redux/Redux Toolkit</Skill>
                <Skill>Bootstrap</Skill>
                <Skill>MUI / MUI Base</Skill>
                <Skill>Antd</Skill>
                <Skill>Styled Components</Skill>
                <Skill>AmCharts</Skill>
              </SkillSection>

              <SkillSection>
                <h2 style={{ marginTop: "1rem" }}>Backend Tools</h2>
                <Skill>Node.js</Skill>
                <Skill>Express</Skill>

              </SkillSection>
              <SkillSection>
                <h2 style={{ marginTop: "1rem" }}>DevOps</h2>
                <Skill>Git</Skill>
                <Skill>GitHub</Skill>
                <Skill>Bitbucket</Skill>
                <Skill>Docker</Skill>
                <Skill>Aws</Skill>
              </SkillSection>

            </SkillsContainer>
            <AboutMeDescription>
              Hailing from Massachusetts and now thriving in sunny San Diego, California, I'm a frontend developer with a design flair and an innovative spirit.<br /><br />
              After graduating from Learn Academy's coding bootcamp in San Diego, I further refined my skills with an internship at Victorise, immersing myself in React Native. This experience paved the way for my most recent role at iCompaas. Here, I took the lead on projects for brands like Oneloan Direct and Wannapractice, using tools such as React, Redux, Node.js, and CSS, while integrating Docker and AWS to enhance our workflow.<br /><br />

              A rapid learner with a strong work ethic, I flourish in collaborative environments, always eager to both share knowledge and learn from peers. Away from the digital canvas, I treasure moments with my dogs, skateboarding San Diego's picturesque routes, and soaking up its beautiful beaches.<br /><br />

              I'm actively exploring new frontend opportunities, eager to bring my expertise and passion to dynamic teams. If you'd like to connect or discuss potential collaborations, please feel free to reach out to me through my <ContactMe to={"/contact"}>Contact Page</ContactMe>
            </AboutMeDescription>

          </SkillAboutContainer>
        </AboutMeSection>
        <ImageGridContainer>
          <ImageGrid images={images} />
        </ImageGridContainer>
      </AboutContainer>
    </ViewsWrapper>
  )
};

export default About;
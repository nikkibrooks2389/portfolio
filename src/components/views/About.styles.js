
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
  width:70%
  align-self:center;
  animation: ${slideInFromRightFadeIn} 0.7s ease forwards;
  opacity: 0;
`;

const AboutMeHeader = styled.h1`
  font-size: 3.5rem;
  margin: 0 0 1rem 0;
  animation: ${slideInFromRightFadeIn} 0.9s ease forwards;
  opacity: 0;
`;

const AboutMeDescription = styled.p`
  color:${({ theme }) => theme.colors.secondaryText};
  font-size: 1.1rem;
  margin: 0 0 2rem 0;
  font-family: ${({ theme }) => theme.fonts.secondary}
`;

const ImageGridContainer = styled.div`
  display:flex
  width: 30%; 
  padding-right:1rem;
  opacity: 0; // Start hidden
  transform: translateY(20px); 
  animation: ${slideUpFadeIn} 0.5s forwards; 
  animation-delay: 1.2s; 

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%; // Full width on smaller screens
    padding: 0; // No padding on smaller screens
  }
`;

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
        <ImageGridContainer>
          <ImageGrid images={images} />
        </ImageGridContainer>
        <AboutMeSection>
          <AboutMeHeader>About Me.</AboutMeHeader>
          <AboutMeDescription>
            Hailing from Massachusetts and now thriving in sunny San Diego, California, I'm a frontend developer with a design flair and an innovative spirit.<br /><br />
            After graduating from Learn Academy's coding bootcamp in San Diego, I further refined my skills with an internship at Victorise, immersing myself in React Native. This experience paved the way for my most recent role at iCompaas. Here, I took the lead on projects for brands like Oneloan Direct and Wannapractice, using tools such as React, Redux, Node.js, and CSS, while integrating Docker and AWS to enhance our workflow.<br /><br />

            A rapid learner with a strong work ethic, I flourish in collaborative environments, always eager to both share knowledge and learn from peers. Away from the digital canvas, I treasure moments with my dogs, skateboarding San Diego's picturesque routes, and soaking up its beautiful beaches.<br /><br />

            I'm actively exploring new frontend opportunities, eager to bring my expertise and passion to dynamic teams. If you'd like to connect or discuss potential collaborations, please feel free to reach out to me through my <ContactMe to={"/contact"}>Contact Page</ContactMe>
          </AboutMeDescription>

          <Resume />
        </AboutMeSection>
      </AboutContainer>
    </ViewsWrapper>
  )
};

export default About;
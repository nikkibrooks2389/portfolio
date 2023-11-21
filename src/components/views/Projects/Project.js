
import React, { useState } from 'react';
import Button from "../../UI/button/Button.style"
import styled from 'styled-components';
import Drawer from '@mui/material/Drawer';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import '@mui/material/styles';



const ProjectWrapper = styled.div`
position: relative;
width: 100%; 
max-width: 400px;
margin: auto;
overflow: hidden;
border-radius: 10px; /* Rounded corners */
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const ProjectTitle = styled.h6`
color: white; /* White color for better contrast */
font-size: 24px; /* Larger font size */
font-weight: bold; /* Bold font weight */
text-align: center;
padding: 10px; /* Padding for spacing */
`;

const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: linear-gradient(
  to bottom, 
  rgba(0, 0, 0, 0.4) 0%, 
  rgba(0, 0, 0, 0.9) 100%); /* Gradient overlay */
opacity: 0;
transition: opacity 0.5s ease;
cursor: pointer;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px;
&:hover {
  opacity: 1;
}
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  opacity: 1;
}
`;
const ProjectImage = styled.img`
width: 100%;
display: block;
transition: transform 0.5s ease; /* Smooth zoom effect */
&:hover {
    transform: scale(1.05); /* Slight zoom on hover */
}
`;


const TagLine = styled.p`
  color: white;
  font-size: 0.8rem;
  text-align: center;
  margin-top: 5px;
`;

const TechnologiesList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Technology = styled.div`
  background-color: gray;
  font-size: 0.8rem;
  color: white;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 25px;
`;

//---------------------Drawer---------------------//

const DrawerContent = styled.div`
position: relative;
overflow: auto;
  width:40vw;
  color: ${({ theme }) => theme.colors.primaryText};
  background: ${({ theme }) => theme.colors.primaryBackground};
  height: calc(100% - 65px); 
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  width:100vw;
  }
`;


const BackToProjects = styled.span`
cursor: pointer;
margin: 0px;
  
`;

const BackToProjectsWrapper = styled.div`

padding: .5rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.inputBorder};
`;

const ModalTitle = styled.h6`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem 1rem;
  margin-top: 1rem;

`;

const ModalTagLine = styled.p`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 1rem;
  text-align: center;
  padding: .5rem 1rem;
`;

const ModalImageWrapper = styled.div`
padding: 1rem;
`;
const ModalImage = styled.img`
  width: 100%;
  display: block;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 15px;
  
`;
const ModalDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: .5rem 1rem;
`;

const ModalDescriptionHeader = styled.h6`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  padding: 10px;

`;

const ModalDescription = styled.p`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
`;

const OpenProjectButton = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 0;
  z-index: 1;
  margin:auto;
  height:65px;
  width:45%;
  font-weight:bold;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white

    :hover {
      background-color: ${({ theme }) => theme.colors.accentHover};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width:100vw;
      }
  }
  `

const ModalTechnologiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: .5rem 1rem;
`;
const ModalTechnologiesListHeader = styled.h6`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  padding: 10px;
`;
const ModalTechnologiesList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const ModalTechnology = styled.div`
  background-color: gray;
  font-size: 0.8rem;
  color: white;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 25px;
`;



const Project = ({ title, description, url, image, technologiesList, tagLine }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);



  console.log(isDrawerOpen)
  return (
    <ProjectWrapper>
      <ProjectImage src={image} />
      <Overlay onClick={() => setDrawerOpen(true)}>
        <ProjectTitle>{title}</ProjectTitle>
        <TagLine>{tagLine}</TagLine>
        <TechnologiesList>
          {technologiesList.map((tech) => (
            <Technology key={tech}>{tech}</Technology>
          ))}
        </TechnologiesList>
      </Overlay>


      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <DrawerContent>
          <BackToProjectsWrapper>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>

            <BackToProjects onClick={() => setDrawerOpen(false)}>
              Back To Projects
            </BackToProjects>

          </BackToProjectsWrapper>

          <ModalTitle>{title}</ModalTitle>
          <ModalTagLine>{tagLine}</ModalTagLine>

          <ModalImageWrapper>
            <ModalImage src={image} />
          </ModalImageWrapper>
          <ModalDescriptionWrapper>
            <ModalDescriptionHeader>Project Description</ModalDescriptionHeader>
            <ModalDescription>{description}</ModalDescription>
          </ModalDescriptionWrapper>

          <ModalTechnologiesWrapper>
            <ModalTechnologiesListHeader>Technologies Used</ModalTechnologiesListHeader>
            <ModalTechnologiesList>
              {technologiesList.map((tech) => (
                <ModalTechnology key={tech}>{tech}</ModalTechnology>
              ))}
            </ModalTechnologiesList>
          </ModalTechnologiesWrapper>

          <OpenProjectButton onClick={() => window.open(url, "_blank")}>Open Project</OpenProjectButton>

        </DrawerContent>
      </Drawer>
    </ProjectWrapper >
  );
};

export default Project;
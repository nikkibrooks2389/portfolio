
import React, { useState } from 'react';
import styled from 'styled-components';
import Drawer from '@mui/material/Drawer';
import SkillTag from "../../UI/skillTag";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import '@mui/material/styles';



const ProjectWrapper = styled.div`
  position: relative;
  width: 100%; 
  max-width: 375px;
  margin: auto;
  overflow: hidden;
  border-radius: 10px; 
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
  border: ${({ theme }) => `3px solid ${theme.colors.header2}`};
`;


const ProjectTitle = styled.h6`
color: white; 
font-size: 24px; 
font-weight: bold;
text-align: center;
padding: 10px; 
color: ${({ theme }) => `${theme.colors.header2}`};
`;


const ProjectButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
`;

const DetailButton = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primaryText};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }
`;

const GoToProjectButton = styled.button`
  padding: 10px 20px;
    color: white;
  background-color: ${({ theme }) => theme.colors.link};
  color: ${({ theme }) => theme.colors.primaryText};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.linkHover};
  }
`;

const ProjectImage = styled.img`
width: 100%;
display: block;
transition: transform 0.5s ease; 
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
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

const ModalImageWrapper = styled.div`
padding: 1rem;
`;

const ModalImage = styled.img`
  width: 100%;
  display: block;
  margin: auto;
  margin-top: 1rem;
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
  padding: 2rem;
  `;

const ModalDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 1rem;
  text-align: center;
  
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
  color: ${({ theme }) => theme.colors.primaryText};

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
  padding: 2rem;
`;
const ModalTechnologiesList = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;



// Tagline Style
const ProjectTagline = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  text-align: center;
  margin: 10px;
`;

const Project = ({ title, description, url, image, technologiesList, tagLine }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);



  console.log(isDrawerOpen)
  return (
    <ProjectWrapper>
      <ProjectImage src={image} />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectTagline>{tagLine}</ProjectTagline>
      <ProjectButtons>
        <DetailButton onClick={() => setDrawerOpen(true)}>More Details</DetailButton>
        <GoToProjectButton onClick={() => window.open(url, "_blank")}>Go to Project</GoToProjectButton>
      </ProjectButtons>

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
                <SkillTag >{tech}</SkillTag>
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
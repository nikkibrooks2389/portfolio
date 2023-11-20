import React from 'react';

import Button from "../../UI/button/Button.style"
import styled from 'styled-components';

const ProjectWrapper = styled.div`
  border-radius:10px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  padding: 20px;
  margin: 10px;
  width: 350px;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    width: 300px;
 
  }
`;

const ProjectTitle = styled.h6`
  margin-bottom: 1.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color:  ${({ theme }) => theme.colors.secondaryText};
  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    // width: 300px;
    font-size: 1rem;
  }
`;



const Project = ({ title, description, url }) => {


  return (
    <ProjectWrapper>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <Button variant="primary" onClick={() => window.open(url, '_blank')}>
        Visit Site
      </Button>

    </ProjectWrapper>
  );
};

export default Project;
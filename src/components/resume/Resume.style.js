
import React from 'react';
import styled from 'styled-components';
import { Dropdown, DropdownItem } from '../dropdown/Dropdown.style';

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Resume = () => {
    return (
        <ResumeContainer>
            <Dropdown variant="secondary" triggerText="Check Out My Resume">
                <DropdownItem href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</DropdownItem>
                <DropdownItem href="/resume.pdf" download>Download Resume</DropdownItem>
            </Dropdown>
        </ResumeContainer>
    );
};

export default Resume;
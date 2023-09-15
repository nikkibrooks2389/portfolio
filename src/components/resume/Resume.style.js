
import React from 'react';
import { Dropdown, DropdownItem } from '../UI/dropdown/Dropdown.style';


const Resume = () => {
    return (
        <div >
            <Dropdown variant="outline" triggerText="Check Out My Resume">
                <DropdownItem href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</DropdownItem>
                <DropdownItem href="/resume.pdf" download>Download Resume</DropdownItem>
            </Dropdown>
        </div>
    );
};

export default Resume;
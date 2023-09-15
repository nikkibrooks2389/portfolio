import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../button/Button.style';

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;


const DropdownContent = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: #ffffff;
  min-width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 5px;
  overflow: hidden; 
  z-index: 1006;
  top: 110%;
  width:100%;
  left: 0;
  transition: opacity 0.3s;
`;

const DropdownItem = styled.a`
  color: black;
  padding: 10px 20px;
  text-decoration: none;
  font-size:1.2rem;
  display: block;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;


const Dropdown = ({ children, variant = "outline", triggerText = "" }) => {
    const [showDropdown, setShowDropdown] = React.useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <DropdownWrapper ref={dropdownRef}>
            <Button variant={variant} onClick={() => setShowDropdown(!showDropdown)}>
                {triggerText}
            </Button>
            <DropdownContent show={showDropdown}>
                {React.Children.map(children, child => {
                    return React.cloneElement(child, {
                        onClick: () => setShowDropdown(false)
                    });
                })}
            </DropdownContent>
        </DropdownWrapper>
    );
};

export { Dropdown, DropdownItem };
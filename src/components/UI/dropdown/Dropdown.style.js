// Dropdown.style.js
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TriggerButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  padding: 0.6rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.surfaceAlt};
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceAlt};
    color: ${({ theme }) => theme.colors.accentSecondary};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const DropdownContent = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  top: 110%;
  left: 0;
  width: max-content;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 1006;
  min-width: 180px;
  overflow: hidden;
`;

const DropdownItem = styled.a`
  display: block;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.95rem;
  padding: 0.75rem 1.2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceAlt};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Dropdown = ({ children, triggerText = "" }) => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownWrapper ref={dropdownRef}>
      <TriggerButton onClick={() => setShowDropdown(!showDropdown)}>
        {triggerText}
      </TriggerButton>
      <DropdownContent show={showDropdown}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { onClick: () => setShowDropdown(false) })
        )}
      </DropdownContent>
    </DropdownWrapper>
  );
};

export { Dropdown, DropdownItem };
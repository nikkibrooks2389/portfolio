import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &.primary {
    background-color: ${({ theme }) => theme.colors.accent};
    color: white

    &:hover {
      background-color: ${({ theme }) => theme.colors.accentHover};
    }
  }

  &.secondary {
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
    color: white;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondaryAccentHover};
    }
  }

  &.highlight {
    background-color: ${({ theme }) => theme.colors.highlight};
    color: ${({ theme }) => theme.colors.primaryBackground};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryBackground};
      color: ${({ theme }) => theme.colors.highlight};
    }
  }

  &.text {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.secondaryText};

    &:hover {
      text-decoration: underline;
    }
  }

  &.outline {
    background-color: transparent;
    color: ${({ theme }) => theme.mode === "light" ? theme.colors.secondaryAccent : theme.colors.accent};
    border: 3px solid ${({ theme }) => theme.mode === "light" ? theme.colors.secondaryAccent : theme.colors.accent};
 
    // &:hover {
    //   background-color: ${({ theme }) => theme.colors.accent};
    //   color: white;
    // }
  }

  

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
    padding: 8px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    font-size: 1.1rem;
    padding: 8px 16px;
  }
`;

const Button = ({ variant = 'primary', children, ...props }) => {
  return <StyledButton className={variant} {...props}>{children}</StyledButton>;
}

export default Button;
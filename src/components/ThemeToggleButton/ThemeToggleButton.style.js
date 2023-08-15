import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primaryText}; // Opposite color of the theme background
  color: ${(props) => props.theme.colors.primaryBackground}; // Color of the theme background
  border: none;
  border-radius: 50%; // Makes the button circular
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const ThemeToggleButton = () => {
    const { toggleTheme, theme } = useContext(ThemeContext);

    const darkIcon = <FontAwesomeIcon icon={faMoon} />;
    const lightIcon = <FontAwesomeIcon icon={faSun} />;

    const icon = theme === 'dark' ? lightIcon : darkIcon; // Assuming theme is either 'dark' or 'light'

    return (
        <div>
            <Button onClick={toggleTheme}>{icon}</Button>
        </div>
    );
};

export default ThemeToggleButton;
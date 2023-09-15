// React Imports
import React, { useContext } from 'react';

// Library & Utility Imports
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

// Context & Theme Imports
import { AppThemeContext } from '../context/AppThemeContext';

// Assets & Images
import unicornThemeIcon from '../../assets/images/unicorn.png';

const Button = styled.button`
  background-color: ${(props) => props.currentTheme === "unicorn" ? props.theme.colors.accent : props.theme.colors.primaryText};
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
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
  const { toggleTheme, theme } = useContext(AppThemeContext);

  const icons = {
    dark: <FontAwesomeIcon icon={faMoon} />,
    light: <FontAwesomeIcon icon={faSun} color="white" />,
    unicorn: <img src={unicornThemeIcon} alt="Unicorn Icon" />
  };

  const icon = icons[theme.mode];

  return (
    <Button onClick={toggleTheme} currentTheme={theme.mode}>
      {icon}
    </Button>
  );
};

export default ThemeToggleButton;
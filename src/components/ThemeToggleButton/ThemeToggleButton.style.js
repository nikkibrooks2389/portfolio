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
  background-color: ${({ theme, currentTheme }) =>
    currentTheme === 'dark'
      ? '#2a2f3a' // slightly greyish moon backdrop
      : currentTheme === 'unicorn'
      ? theme.colors.pop2 + '33'
      : theme.colors.inputBackgroundFocus};

  color: ${({ theme, currentTheme }) =>
    currentTheme === 'dark'
      ? '#f0f8ff'
      : currentTheme === 'unicorn'
      ? theme.colors.surface
      : theme.colors.pop};

  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  box-shadow: ${({ currentTheme }) =>
    currentTheme === 'dark'
      ? 'inset 0 0 4px rgba(255, 255, 255, 0.05), 0 0 10px rgba(173, 216, 230, 0.1)'
      : '0 1px 4px rgba(0, 0, 0, 0.06)'};

  &:hover {
    background-color: ${({ theme, currentTheme }) =>
      currentTheme === 'dark'
        ? '#363b47' // darker grey on hover
        : currentTheme === 'unicorn'
        ? theme.colors.popHover + '40'
        : theme.colors.pop + '10'};

    transform: scale(1.06);
   box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accentSecondary};
  }

  img {
    width: 16px;
    height: 16px;
  }

  svg {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: rotate(10deg);
  }
`;

const ThemeToggleButton = () => {
  const { toggleTheme, theme } = useContext(AppThemeContext);

  const icons = {
    dark: <FontAwesomeIcon icon={faMoon} />,
    light: <FontAwesomeIcon icon={faSun} />,
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

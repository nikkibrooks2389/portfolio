import styled from 'styled-components';
import { gradientAnimation } from '../styles/keyframes';


const backgroundFilter = (theme) => {
  if (theme.mode === "light") {
    return theme.colors.background
    // return `linear-gradient(to right, transparent 1px, transparent 10px, rgba(150, 150, 150, 0.1) 10px, rgba(150, 150, 150, 0.1) 11px, transparent 11px, transparent 20px),
    // linear-gradient(to bottom, transparent 1px, transparent 10px, rgba(150, 150, 150, 0.1) 10px, rgba(150, 150, 150, 0.1) 11px, transparent 11px, transparent 20px)`;
  } else if (theme.mode === "dark") {
    return `linear-gradient(to right, transparent 1px, transparent 10px, rgba(100, 100, 100, 0.1) 10px, rgba(100, 100, 100, 0.1) 11px, transparent 11px, transparent 20px),
    linear-gradient(to bottom, transparent 1px, transparent 10px, rgba(100, 100, 100, 0.1) 10px, rgba(100, 100, 100, 0.1) 11px, transparent 11px, transparent 20px)`;
  } else {
    return theme.colors.background
  }

}

export const ViewsWrapper = styled.div`
  display:flex;
min-height: calc(100vh - 60px);
padding: 4rem 0;
display: flex;
flex-direction: column;
justify-content: center;
  padding: 10px 15px 10px 15px;
  background-image: ${({ theme }) => backgroundFilter(theme)};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${props => props.theme.colors.accent};
  animation: ${gradientAnimation} 15s infinite,
  animation-delay: 0.7s;

  `;
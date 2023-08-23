import styled from 'styled-components';
import { gradientAnimation } from '../styles/keyframes';

export const ViewsWrapper = styled.div`
  display:flex;
  justify-content:center;
  min-height:100vh;
  padding: 90px 20px 20px 20px;
  background: ${({ theme }) => theme.colors.primaryBackground};
  color: ${props => props.theme.colors.primaryText};
  animation: ${gradientAnimation} 15s infinite,
  animation-delay: 0.7s;

  `;
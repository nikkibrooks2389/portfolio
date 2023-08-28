

import React from "react";
import styled from "styled-components";
import { slideInFromLeftFadeIn } from "../styles/animations/keyframes"
  ;

const StyledPageHeader = styled.h1`
  font-size: 4.6rem;
  margin-bottom: 2rem;
  animation: ${slideInFromLeftFadeIn} 0.8s ease forwards;
  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    font-size: 4rem;
  }
`;

const PageHeader = ({ children }) => {
  return (
    <StyledPageHeader>{children}</StyledPageHeader>
  )
}

export default PageHeader
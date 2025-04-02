import React from "react";
import styled from "styled-components";
import { slideInFromLeftFadeIn } from "../styles/animations/keyframes";

const StyledPageHeader = styled.div`
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.header2}; // Like a comment in code
  margin-bottom: 5rem;
  text-align: left;
  animation: ${slideInFromLeftFadeIn} 0.8s ease forwards;

  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    text-align: center;
    font-size: 1.1rem;
  }
`;

const PageHeader = ({ children }) => {
  return (
    <StyledPageHeader>
      {`// ----- ${children} -------`}
    </StyledPageHeader>
  );
};

export default PageHeader;
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { slideUpFadeIn, slideInFromRightFadeIn } from "../styles/keyframes";

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(0, 260px));
gap: 2rem;
padding: 1rem 0;
margin-top: 4rem;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(3, minmax(0, 260px)); /* For tablet */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 260px)); /* For tablet */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(1, minmax(0, 250px)); /* For mobile */
  }
`;

const StyledImage = styled.img`
  width: 100%; 

  object-fit: contain; /* Maintain aspect ratio */
  border-radius: 3rem;
  opacity:0.9;

  
  &:hover,
  &:focus {
    transform: scale(1.1); /* Increase size on hover or focus */
  }
`;

const ImageGrid = ({ images }) => {
  const [numImagesToShow, setNumImagesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setNumImagesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setNumImagesToShow(2);
      } else if (window.innerWidth <= 1250) {
        setNumImagesToShow(3);
      } else {
        setNumImagesToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Grid>
      {images.slice(0, numImagesToShow).map((image, index) => (
        <div key={index}>
          <StyledImage src={image} />
        </div>
      ))}
    </Grid>
  );
};

export default ImageGrid;
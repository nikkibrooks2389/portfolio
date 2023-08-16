import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  width: max-content;
  grid-template-columns: repeat(1, minmax(0, 270px));
  gap: 1rem;
  padding: 1rem 0;
  margin-top: 12px;
  // background-color: ${({ theme }) => theme.colors.secondaryBackground};
`;

const StyledImage = styled.img`
  width: 100%; 
  height: 300px; /* Set a fixed height */
  object-fit: contain; /* Maintain aspect ratio */
  border-radius: 10%;
  transition: transform 0.3s ease-in-out;
  
  &:hover,
  &:focus {
    transform: scale(1.1); /* Increase size on hover or focus */
  }
`;

const ImageGrid = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 10000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const displayedImages = [
    images[(currentIndex - 1 + images.length) % images.length],
    images[currentIndex],
    images[(currentIndex + 1) % images.length]
  ];

  return (
    <Grid>
      {displayedImages.map((image, index) => (
        <div key={index}>
          <StyledImage src={image} />
        </div>
      ))}
    </Grid>
  );
};

export default ImageGrid;
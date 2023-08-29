import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ImageCarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  `;

const Image = styled.img`
  max-width:400px;
  height: auto;
  transition: transform 0.5s ease-in-out;
  
  opacity:0.9;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width:325px;
  };
  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    width:230px;
}
`;

const ImageCarousel = ({ images, interval }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextImageIndex = (currentImageIndex + 1) % images.length;
            setCurrentImageIndex(nextImageIndex);
        }, interval);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentImageIndex, interval, images.length]);

    return (
        <ImageCarouselContainer>
            <Image
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
            />
        </ImageCarouselContainer>
    );
};


export default ImageCarousel
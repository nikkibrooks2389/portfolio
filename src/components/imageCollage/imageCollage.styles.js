import { useState } from 'react';
import styled from 'styled-components';

const CollageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  width: 400px;
  position: relative;
`;

const ImageBox = styled.div`
  img {
    width: 100%;
    transition: all 0.3s ease-in-out;
    opacity: 0.6;
  }

  &:hover img {
    width: 400px;
    height: 400px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 1;
  }
`;

const ImageCollage = () => {

    const [hovered, setHovered] = useState(null);
    return (
        <CollageContainer>
            <ImageBox
                onMouseOver={() => setHovered(1)}
                onMouseOut={() => setHovered(null)}
            >
                <img src="path/to/image1.jpg" alt="Description 1" style={{ width: hovered === 1 ? '400px' : '100%' }} />
            </ImageBox>
            <ImageBox
                onMouseOver={() => setHovered(2)}
                onMouseOut={() => setHovered(null)}
            >
                <img src="path/to/image2.jpg" alt="Description 2" style={{ width: hovered === 2 ? '400px' : '100%' }} />
            </ImageBox>
            {/*... add more images as you need */}
        </CollageContainer>
    );
}

export default ImageCollage;
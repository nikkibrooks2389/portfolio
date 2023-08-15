import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Cursor = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #FF9F1C; /* Your chosen color */
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference; /* Blend mode for a cool effect */
`;

const CursorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
`;

const CustomCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <CursorContainer>
            <Cursor style={{ top: cursorPosition.y, left: cursorPosition.x }} />
        </CursorContainer>
    );
};

export default CustomCursor;

import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => (props.open ? 'block' : 'none')};
`;

const ModalContent = styled.div`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

const Modal = ({ open, onClose, children }) => {
    return (
        <ModalWrapper open={open}>
            <ModalContent>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                {children}
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;
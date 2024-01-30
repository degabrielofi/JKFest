import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ModalOverlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Image = styled.img`
  max-width: 80vw;
  max-height: 80vh;
  object-fit: contain;
`;

export const CloseButton = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

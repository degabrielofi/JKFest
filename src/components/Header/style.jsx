// style.jsx

import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: ${({ isScrolled }) =>
    isScrolled ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
  transition: background-color 0.3s;
  z-index: 1000;
`;

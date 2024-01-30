import styled from "styled-components";

export const Icon = styled.div`
  .icon-position {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 20;
  }

  .icon-position i {
    font-size: 20px;
  }
  .icon-style {
    background-color: #1bd742;
    border: 2px solid #fff;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    color: #fff;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  .icon-style:hover {
    background-color: #0fbc2c;
    transition: all 0.5s ease-in;
  }
`;

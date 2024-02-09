import styled from "styled-components";

export const StyledMyCart = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.open ? "0" : "-400px")};
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease-in-out;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 1000;

  .title {
    margin-top: -5%;
    display: flex;
    justify-content: space-between;
  }

  h2 {
    font-family: "Gloria Hallelujah", cursive;
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }

  .close {
    border: none;
    background: none;
    cursor: pointer;
  }

  i {
    font-size: 24px;
  }

  label {
    font-family: "Gloria Hallelujah", cursive;
  }

  ul {
    font-family: "Protest Riot", sans-serif;
    list-style: none;
    font-weight: 400;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        background-color: #d8096b;
        color: #fff;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        font-size: 14px;
        border-radius: 5px;
        margin-left: 10px;

        &:hover {
          filter: brightness(1.1);
        }
      }
    }
  }

  p {
    font-family: "Protest Riot", sans-serif;
    font-weight: 300;
    font-size: 18px;
    margin-top: auto;
  }
`;

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  z-index: 20;

  .icon {
    background-color: #d8096b;
    border: 2px solid #fff;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    color: #fff;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon:hover {
    filter: brightness(1.1);
    transition: all 0.5s ease-in-out;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

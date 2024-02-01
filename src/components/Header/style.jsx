import styled from "styled-components";

export const HeaderContainer = styled.header`
  font-family: "Gloria Hallelujah", cursive;

  .headerContainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${({ isScrolled }) =>
      isScrolled ? "rgba(255, 255, 255, 0.845)" : "rgba(255, 255, 255, 0.5)"};
    transition: background-color 0.3s;
    z-index: 1000;
  }

  header {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    align-items: center;
  }

  header .logo a {
    display: flex;
    justify-content: center;
  }

  header .logo img {
    max-width: 100px;
  }

  header .icons i {
    color: #000;
    margin: 0 0.2rem;
    transition: all 1s;
    font-size: 1.5rem;
  }

  header .icons i:hover {
    transform: scale(1.2);
    transition: all 0.5s;
  }

  .links a {
    text-decoration: none;
    margin: 0 1rem;
    color: #000;
  }

  .links #checkbox {
    display: none;
  }

  .links .toggle {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition-duration: 1s;
  }

  .links .bars {
    width: 100%;
    height: 4px;
    background-color: #000;
    border-radius: 4px;
  }

  .links #bar2 {
    transition-duration: 1s;
  }

  .links #bar1,
  #bar3 {
    width: 70%;
  }

  .links #checkbox:checked + .toggle .bars {
    position: absolute;
    transition-duration: 1s;
  }

  .links #checkbox:checked + .toggle #bar2 {
    transform: scaleX(0);
    transition-duration: 1s;
  }

  .links #checkbox:checked + .toggle #bar1 {
    width: 100%;
    transform: rotate(45deg);
    transition-duration: 1s;
  }

  .links #checkbox:checked + .toggle #bar3 {
    width: 100%;
    transform: rotate(-45deg);
    transition-duration: 1s;
  }

  .links #checkbox:checked + .toggle {
    transition-duration: 1s;
    transform: rotate(180deg);
  }

  .links nav {
    display: flex;
    flex-direction: column;
  }

  .navbar {
    height: 0rem;
    transition: all ease-in-out 0.5s;
  }

  .navbar a {
    opacity: 0;
  }

  .navbar-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 5rem;
    transition: all ease-in-out 1s;
  }

  .navbar-active a {
    margin: 0.2rem;
    text-decoration: none;
    color: #000;
    opacity: 1;
    transition: all 2s;
  }
`;

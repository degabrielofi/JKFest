import styled from "styled-components";
import Background from "assets/images/Background.png";

export const Container = styled.div`
  width: 100%;
  font-family: "Gloria Hallelujah", cursive;
  background: url(${Background}) no-repeat center;
  background-size: cover;

  .container {
    backdrop-filter: blur(5px);
  }

  .container .content .links {
    display: flex;
    align-items: center;
    padding: 5% 10%;
  }

  .container .content .links .logo {
    width: 15%;
  }

  .container .content .links .logo img {
    width: 100%;
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-left: 2rem;
  }

  li {
    margin: 0 2rem;
  }

  .container .content .row {
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
  }

  .container .content .links a {
    display: block;
    color: #000;
    font-size: 1.5rem;
    font-weight: 400;
  }

  .container .content .row .icons a {
    margin: 0 2rem;
  }

  span {
    font-weight: 800;
    color: #fff;
  }

  i {
    color: #fff;
    font-size: 2rem;
    transition: all 0.5s;
  }

  i:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }

  .copy h4 {
    margin: 0 1rem;
    color: #fff;
    font-weight: 800;
  }

  @media (max-width: 992px) {
    .container .content .links .logo {
      width: 30%;
    }

    .container .content .links {
      display: flex;
      flex-direction: column;
    }

    ul {
      flex-direction: column;
      margin-left: 0;
    }

    li {
      margin: 0;
    }

    .container .content .row {
      flex-direction: column;
      align-items: center;
    }

    .icons {
      margin-top: 1rem;
    }

    .container .content .row .icons a {
      margin: 0 1rem;
    }

    .copy h4 {
      font-size: 0.7rem;
    }
  }
`;

export const Scroll = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  .icon-style {
    background: #fff;
    color: #111;
    border: 2px solid #111;

    border-radius: 50%;
    height: 50px;
    width: 50px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  .icon-style:hover {
    animation: none;
    background-color: #111;
    border: 2px solid #fff;
    color: #fff;
  }
`;

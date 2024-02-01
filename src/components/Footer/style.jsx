import styled from "styled-components";

export const Container = styled.div`
  font-family: "Gloria Hallelujah", cursive;

  .container .background {
    filter: blur(4px);
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }

  .container .content {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: -30%;
  }

  .container .content .links {
    display: flex;
    align-items: center;
    padding: 0 10%;
  }

  .container .content .links .logo {
    width: 15%;
    display: flex;
    justify-content: flex-start;
  }

  .container .content .links .logo img {
    width: 100%;
  }

  .container .content .links .contacts {
    margin-left: 5%;
  }

  ul {
    width: 100%;
    display: flex;
    list-style: none;
    justify-content: space-between;
    margin: 0 2rem;
  }

  .container .content .row {
    display: flex;
    justify-content: space-between;
    padding: 2rem 10%;
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
  }

  @media (max-width: 600px) {
    .copy h4 {
      font-size: 0.8rem;
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

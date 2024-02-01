import styled from "styled-components";
import PatternCircles from "assets/images/pattern-circles.webp";

export const Container = styled.div``;

export const Presentation = styled.div`
  font-family: "Gloria Hallelujah", cursive;
  width: 100%;
  height: 80vh;
  margin-top: -1%;
  background: url(${PatternCircles}) #0a90cd no-repeat top fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .texts {
    margin: 0 10%;
  }

  h1 {
    margin-top: -10%;
    font-size: 48px;
    color: #fff;
  }

  p {
    font-size: 25px;
    color: #000;
  }

  a {
    font-size: 20px;
    color: #fff;
  }

  i {
    margin-left: 5px;
    font-size: 20px;
    transition: all 0.5s;
  }

  a:hover i {
    margin-left: 15px;
    transition: all 0.5s;
  }

  @media (max-width: 992px) {
    margin-top: -2%;

    h1 {
      font-size: 25px;
    }

    p {
      font-size: 15px;
    }

    a {
      font-size: 15px;
    }

    i {
      font-size: 15px;
    }
  }
`;

export const Portfolio = styled.div`
  width: 100%;
  font-family: "Gloria Hallelujah", cursive;

  .title {
    display: flex;
    justify-content: center;
  }

  .images {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  .images img {
    width: 100%;
  }

  .images .photos1 {
    width: 90%;
  }

  .images .photos2 {
    width: 90%;
    margin-top: 2rem;
  }

  .images .photos1 img,
  .images .photos2 img {
    margin-top: 1rem;
  }

  .link {
    display: flex;
    justify-content: center;
    margin-top: 5px;
    z-index: 20;
  }

  a {
    font-size: 35px;
    color: #111;
  }

  i {
    margin-left: 5px;
    font-size: 20px;
    transition: all 0.5s;
  }

  a:hover i {
    margin-left: 15px;
    transition: all 0.5s;
  }

  @media (max-width: 992px) {
    .title {
      font-size: 15px;
    }

    a {
      font-size: 20px;
    }

    i {
      font-size: 20px;
    }
  }
`;

export const LinkInstagram = styled.div`
  font-family: "Gloria Hallelujah", cursive;
  width: 100%;

  svg {
    position: relative;
    margin-top: -10rem;
    z-index: -20;
  }

  .insta {
    margin-top: -1%;
    background-color: #d8096b;
    height: 100%;
  }

  .insta .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .insta h1 {
    margin-top: -2rem;
    font-size: 48px;
    color: #fff;
  }

  .insta p {
    font-size: 25px;
    margin-top: -1rem;
    color: #fff;
  }

  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-size: 1rem;
    align-items: center;
    height: 48px;
    border-radius: 0.4rem;
    font-weight: 600;
    margin-bottom: 3rem;
    padding: 0 1.2rem;
    color: #ddd;
    border: none;
    cursor: pointer;
    box-shadow: 0 0.5rem 1rem rgba(143, 142, 142, 0.15) !important;
    background: #000000;
    transition: all 0.5s;
  }

  .followers {
    font-size: 0.8rem;
    color: #7f7f7f;
  }

  a:hover {
    background: #2b2a2a;
    transition: all 0.5s;
  }

  i {
    font-size: 15px;
    margin-right: 0.5rem;
  }

  @media (max-width: 992px) {
    .insta {
      margin-top: -3%;
    }

    .insta h1 {
      margin-top: 1rem;
      font-size: 25px;
    }

    .insta p {
      margin: 0 1.5rem 1rem 1.5rem;
      font-size: 15px;
    }
  }
`;

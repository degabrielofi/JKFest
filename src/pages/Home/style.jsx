import styled from "styled-components";
import PatternCircles from "assets/images/pattern-circles.webp";

export const Container = styled.div``;

export const Presentation = styled.div`
  font-family: "Gloria Hallelujah", cursive;
  width: 100%;
  height: 100vh;
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
`;

export const Portfolio = styled.div`
  font-family: "Gloria Hallelujah", cursive;
  display: flex;
  justify-content: center;

  .images {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`;

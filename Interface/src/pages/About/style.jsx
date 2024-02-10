import styled from "styled-components";
import detailPink from "assets/images/detailPink.png";
import detailBlue from "assets/images/detailBlue.png";

export const TitlePage = styled.div`
  display: flex;
  font-family: "Gloria Hallelujah", cursive;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  .JKFest {
    width: 100%;
    filter: blur(7px);
    z-index: -10;
  }

  h1 {
    position: absolute;
    letter-spacing: 0.2rem;
    line-height: 1rem;
    font-size: 5rem;
    color: #fff;
  }

  .detail {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }

  .detail i {
    position: absolute;
    width: 200%;
    content: url(${detailPink});
    z-index: -1;
  }

  @media (max-width: 600px) {
    h1 {
      margin-top: 6rem;
      font-size: 2rem;
    }

    .detail i {
      width: 150%;
    }
  }
`;

export const QuemSomos = styled.div`
  font-family: "Gloria Hallelujah", cursive;

  margin-top: 3rem;

  .title {
    width: 100%;
  }

  .title h1 {
    position: absolute;
    padding-left: 1rem;
    letter-spacing: 0.2rem;
    line-height: 1rem;
    font-size: 4rem;
    color: #000;
  }

  .title i {
    margin-top: -1.5rem;
    z-index: -10;
    content: url(${detailBlue});
  }

  .text {
    display: flex;
    justify-content: content;
  }

  .text p {
    margin: 1rem;
    font-size: 150%;
    color: #000;
  }

  .text img {
    width: 30%;
    margin-top: -5rem;
  }

  @media (max-width: 600px) {
    .title h1 {
      font-size: 2rem;
    }

    .title i {
      width: 100%;
      height: 50px;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .text img {
      width: 100%;
      margin-top: -2rem;
    }
  }
`;

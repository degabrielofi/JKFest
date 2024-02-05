import styled from "styled-components";

export const StyledMyCart = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
  }

  button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 14px;
  }

  p {
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
  }

  .addToCartContainer {
    margin-top: 20px;
  }

  .addToCartButton {
    background-color: #2ecc71;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 14px;
  }

  hr {
    border: 1px solid #ddd;
    margin: 20px 0;
  }
`;

import styled from "styled-components";

export const Card = styled.div`
  .item-container {
    position: relative;
    background-color: #fff;
    width: 20rem;
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    border: 2px solid #323232;
    box-shadow: 4px 4px #323232;
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 150px;
    border-radius: 0.7rem;
    border-top-right-radius: 4rem;
    margin-bottom: 1rem;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    color: #000;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }

  .card-divider {
    width: 100%;
    border: 1px solid #000;
    border-radius: 50px;
  }

  .item-price {
    display: flex;
    height: 10vh;
    justify-content: center;
    align-items: center;
  }

  .item-price h4 {
    margin: 0 0.5rem;
    font-size: 2rem;
  }

  .item-price sup {
    font-size: 1rem;
    color: green;
  }

  .item-cart-btn {
    border: none;
    background-color: transparent;
    margin: 0 auto;
    width: 100%;
    border: 1px;
    font-weight: bold;
    padding: 0.5rem 1rem;
    background-color: #9900ef;
    color: #fff;
    border-radius: 2rem;
    font-size: 1.2rem;
    font-weight: 200;
    position: relative;
    cursor: pointer;
    transition: all 0.3s linear;
  }

  .item-cart-btn:hover {
    color: #fff;
    filter: brightness(1.1);
  }
`;

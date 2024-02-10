import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #212121;
  height: 100vh;

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #00000000;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.2px);
    -webkit-backdrop-filter: blur(8.2px);
    border: 1px solid #d8096b;
    width: 14em;
    height: 14em;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .form p {
    color: #fff;
    font-weight: bolder;
  }

  .path {
    fill: #d8096b;
  }

  .svg {
    filter: blur(20px);
    z-index: -1;
    position: absolute;
    opacity: 50%;
    animation: anim 3s infinite;
  }

  .inp {
    margin-left: auto;
    margin-right: auto;
    white-space: 4px;
  }

  .input + .input {
    margin-left: 0.3em;
  }

  .input {
    color: #fff;
    height: 2em;
    width: 2em;
    float: left;
    text-align: center;
    background: #00000000;
    outline: none;
    border: 1px #d8096b solid;
    border-radius: 10px;
    transition: all 0.6s ease;
  }

  .input:focus {
    outline: none;
    border: 1px #fff solid;
  }

  .input:not(:placeholder-shown) {
    opacity: 40%;
  }

  .form button {
    margin-left: auto;
    margin-right: auto;
    background-color: #00000000;
    color: #fff;
    width: 8.5em;
    height: 2.3em;
    border: #d8096b 0.2em solid;
    border-radius: 11px;
    transition: all 0.5s ease;
    cursor: pointer;
  }

  .form button:hover {
    filter: brightness(1.1);
  }

  @keyframes anim {
    0% {
      transform: translateY(-70px);
    }

    50% {
      transform: translateY(-19px);
    }

    100% {
      transform: translateY(-70px);
    }
  }
`;

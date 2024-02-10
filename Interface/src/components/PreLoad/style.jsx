import styled from "styled-components";

export const Loading = styled.div`
  .screen {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #212121;
    height: 100vh;
  }

  .loader {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 6rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation: pulsOut 1.8s ease-in-out infinite;
    filter: drop-shadow(0 0 1rem rgba(238, 234, 236, 0.75));
  }

  .loader:before {
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 1rem #d8096b;
    animation-name: pulsIn;
  }

  .loader:after {
    width: calc(100% - 2rem);
    padding-bottom: calc(100% - 2rem);
    box-shadow: 0 0 0 0 #d8096b;
  }

  @keyframes pulsIn {
    0% {
      box-shadow: inset 0 0 0 1rem #d8096b;
      opacity: 1;
    }

    50%,
    100% {
      box-shadow: inset 0 0 0 0 #d8096b;
      opacity: 0;
    }
  }

  @keyframes pulsOut {
    0%,
    50% {
      box-shadow: 0 0 0 0 #d8096b;
      opacity: 0;
    }

    100% {
      box-shadow: 0 0 0 1rem #d8096b;
      opacity: 1;
    }
  }
`;

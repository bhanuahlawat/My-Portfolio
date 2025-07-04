import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button>
        View My Projects
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button,button::after {
    padding: 10px 50px;
    font-size: 20px;
    border: 2px solid #BF4F74;;
    border-radius: 20px;
    color: white;
    background-color:black;
    position: relative;
  }

  button::after {
    --move1: inset(50% 50% 50% 50%);
    --move2: inset(31% 0 40% 0);
    --move3: inset(39% 0 15% 0);
    --move4: inset(45% 0 40% 0);
    --move5: inset(45% 0 6% 0);
    --move6: inset(14% 0 61% 0);
    clip-path: var(--move1);
    content: 'VIEW MY PROJECTS';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
  }

  button:hover::after {
    animation: glitch_4011 1s;
    text-shadow: 10 10px 10px black;
    animation-timing-function: steps(2, end);
    text-shadow: -3px -3px 0px #1df2f0, 3px 3px 0px #E94BE8;
    background-color: transparent;
    border: 3px solid rgb(0, 255, 213);
  }

  button:hover {
    text-shadow: -1px -1px 0px #1df2f0, 1px 1px 0px #E94BE8;
  }

  button:hover {
    background-color: black;
    border: 3px solid rgb(0, 255, 213);
    box-shadow: 0px 10px 20px -10px rgb(0, 255, 213);
  }

  @keyframes glitch_4011 {
    0% {
      clip-path: var(--move1);
      transform: translate(0px,-10px);
    }

    10% {
      clip-path: var(--move2);
      transform: translate(-10px,10px);
    }

    20% {
      clip-path: var(--move3);
      transform: translate(10px,0px);
    }

    30% {
      clip-path: var(--move4);
      transform: translate(-10px,10px);
    }

    40% {
      clip-path: var(--move5);
      transform: translate(10px,-10px);
    }

    50% {
      clip-path: var(--move6);
      transform: translate(-10px,10px);
    }

    60% {
      clip-path: var(--move1);
      transform: translate(10px,-10px);
    }

    70% {
      clip-path: var(--move3);
      transform: translate(-10px,10px);
    }

    80% {
      clip-path: var(--move2);
      transform: translate(10px,-10px);
    }

    90% {
      clip-path: var(--move4);
      transform: translate(-10px,10px);
    }

    100% {
      clip-path: var(--move1);
      transform: translate(0);
    }
  }`;

export default Button;

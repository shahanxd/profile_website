// this toggle switch is by @JkHuger on uiverse.io

// import stuff
import React from 'react';
import styled from 'styled-components';

const Switch = ({ onToggle }) => {
  return (
    <StyledWrapper>
      <input
        defaultValue="is_hot"
        name="temperature"
        type="checkbox"
        className="ch cursor-pointer"
        onChange={onToggle}
      />
    </StyledWrapper>
  );
};

// css classes
const StyledWrapper = styled.div`
  .ch, .ch:before, .ch:after {
    transition: all 0.3s ease-in-out;
  }

  .ch {
    background-color: rgb(27,123,145);
    border-radius: 0.2em;
    box-shadow: 0 0.05em 0 0.05em rgba(0,0,0,0.3) inset;
    font-size: 20px;
    overflow: hidden;
    position: relative;
    width: 3em;
    height: 1.5em;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    z-index: 0;
  }

  .ch:before, .ch:after {
    content: "";
    display: block;
    position: absolute;
  }

  .ch:before {
    background-color: currentColor;
    border-radius: 0.125em;
    box-shadow: 0 0 0 0.05em inset,
      -0.12em -0.12em 0 rgb(109,148,184) inset,
      -0.4em -0.3em 0 0.05em inset,
      0.12em 0.12em 0 rgb(255,255,255) inset;
    color: rgb(149,188,224);
    opacity: 0.9;
    bottom: 0;
    left: 0.125em;
    width: 1.25em;
    height: 1.25em;
    z-index: 2;
  }

  .ch:after {
    background-image: /* white */ radial-gradient(0.2em 0.5em at 38% 95%, rgb(255,255,255) 49%, rgba(255,255,255,0) 50%),
      radial-gradient(0.3em 0.8em at 52% 95%, rgb(255,255,255) 49%, rgba(255,255,255,0) 50%),
      radial-gradient(0.25em 0.4em at 67% 95%, rgb(255,255,255) 49%, rgba(255,255,255,0) 50%),
      /* yellow */
      radial-gradient(0.25em 0.7em at 36% 95%, rgb(255,224,0) 49%, rgba(255,224,0,0) 50%),
      radial-gradient(0.4em 1.2em at 52% 95%, rgb(255,224,0) 49%, rgba(255,224,0,0) 50%),
      radial-gradient(0.25em 0.6em at 70% 93%, rgb(255,224,0) 49%, rgba(255,224,0,0) 50%),
      /* orange */
      radial-gradient(0.3em 0.8em at 32% 81%, rgb(255,144,0) 49%, rgba(255,144,0,0) 50%),
      radial-gradient(0.5em 1.6em at 52% 95%, rgb(255,144,0) 49%, rgba(255,144,0,0) 50%),
      radial-gradient(0.3em 0.9em at 74% 86%, rgb(255,144,0) 49%, rgba(255,144,0,0) 50%),
      /* red-orange */
      radial-gradient(0.4em 1em at 25% 70%, rgb(255,76,0) 49%, rgba(255,76,0,0) 50%),
      radial-gradient(0.7em 2.75em at 52% 100%, rgb(255,76,0) 49%, rgba(255,76,0,0) 50%),
      radial-gradient(0.4em 1.2em at 79% 75%, rgb(255,76,0) 49%, rgba(255,76,0,0) 50%);
    background-position: 100% 1.5em;
    background-size: 1.5em 1.5em;
    background-repeat: no-repeat;
    border-radius: 0 0 0 0.1em / 0 0 0 0;
    box-shadow: 0 0 0 0 rgb(169,208,244) inset;
    bottom: 0;
    left: 0;
    width: 1.5em;
    height: 1.5em;
    z-index: 1;
  }
  /* Checked */
  .ch:checked {
    background-color: rgb(92,8,8);
  }

  .ch:checked:before {
    border-radius: 50%;
    transform: translate(1.5em,1.5em) rotate(45deg) scale(0.5);
  }

  .ch:checked:after {
    background-position: 100% 0;
    box-shadow: 0 -0.15em 0 0 rgb(169,208,244) inset;
    width: 3em;
  }

  /* Other States */
  .ch:focus {
    outline: 0;
  }
`;

export default Switch;

import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import font from './fonts/overpass-mono.woff2';

injectGlobal`
  ${reset}

  @font-face {
    font-family: 'Overpass Mono';
    font-weight: 300;
    font-style: 'normal';
    src: local('Overpass Mono'), local('Overpass-Mono'), url(${font}) format("woff2");
    font-display: swap;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    font-weight: normal;
    font-style: normal;
    font-family: 'Overpass Mono', 'Courier New', Courier, monospace;
    font-size: 16px;
    line-height: 20px;
    color: white;
  }
  
  body {
    font-family: 'Overpass Mono', 'Courier New', Courier, monospace;
    font-size: 16px;
    line-height: 20px;
    color: white;
    background-color: #12151E;

    @media (-webkit-min-device-pixel-ratio: 2) {
      text-shadow: 0.5px 0 0 red, -0.5px 0 0 cyan;
    }
  }

  h1 {
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    margin-bottom: 24px;
  }

  a {
    position: relative;
    color: white;
    text-decoration: underline;

    &:hover {
      color: #12151E;
      background-color: white;
      text-decoration: none;
    }
  }

  input {
    outline: none;
    box-shadow: none;
  }

  button {
    outline: none;
    border: none;
    background-color: white;
    color: #12151E;
    padding: 10px 5px;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;

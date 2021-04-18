import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    box-sizing: inherit;
    outline: none;
  }
`;

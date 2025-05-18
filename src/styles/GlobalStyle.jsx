import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    box-sizing: border-box;
  }

  body {
  margin: 0 auto;
    font-family: 'Pretendard', sans-serif;
  }

  @media screen and (min-width: 1025px) {
    html, body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
`;

export default GlobalStyle;

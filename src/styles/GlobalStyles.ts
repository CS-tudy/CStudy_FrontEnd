import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: middle;
    text-decoration: none;
  }
  html {
    font-size: 62.5%;
    -webkit-overflow-scrolling: auto;
    min-width: 1200px;
}

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  html {
    font-family: 'Noto Sans CJK KR', sans-serif;
  }
  body {
    background-color: #fcfcfc;
  }
  ol,
  ul,
  li {
    list-style: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button,
  input,
  textarea {
    font-family: 'Noto Sans CJK KR', sans-serif;
  }
  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`;

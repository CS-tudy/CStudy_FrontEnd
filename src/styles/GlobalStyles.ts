import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    /* font: inherit; */
    vertical-align: middle;
    text-decoration: none;
    /* font-size: 16px; */
    color: '#0a0a0a';
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
    /* font-family: "Noto Sans KR", sans-serif; */
  }
  body {
    /* background-color: #eee; */
    color: navy;
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
    font-size: 14px;
  }
  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`;

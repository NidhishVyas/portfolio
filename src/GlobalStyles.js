import { createGlobalStyle } from "styled-components";
// import { LightTheme } from "./Theme";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth !important;
    scroll-padding-top: 110px;
  }

  body {
    padding:0;
    margin:0;
    box-sizing:border-box;
    background: ${(props) => props.theme.Colors.PrimaryColor};
  }

  p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration:none;
  }

  a:hover {
    text-decoration:none;
  }

  ul {
    margin:0;
    padding:0;
    list-style:none;
  }

  img {
    max-width:100%;
    height:auto;
  }

  h1, h2, h3, h4, h5, h6 {
    margin:0;
    padding:0;
  }

  section {
    /* max-width: 1200px; */
    margin: 0 auto;
    padding: 60px 0;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --yellow-50: #FFF6E8;
    --yellow-100: #FFF0DA;
    --yellow-150: #E6D3B5;
    --yellow-250: #D7C4A5;
    --yellow-400:  #FFD888;
    --yellow-700: #F7B239;
    --orange-50: #FFB386;
    --orange-150: #D79771;
    --brown-500: #A66253;
    --brown-600: #B05B3B;
    --brown-700: #734939;
    --red-200: #D94E4E;
  }

  html,
  body, button, input, a, h2, h3, p{
    padding: 0;
    margin: 0;
    font-family: 'Josefin Sans', sans-serif;  
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    body {
      color: var(--orange-150);
      background: var(--yellow-50);
    }
  }
`
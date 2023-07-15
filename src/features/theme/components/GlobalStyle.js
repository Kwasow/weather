import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    src: url('./fonts/OpenSans/OpenSans-VariableFont_wdth\,wght.ttf')
      format('truetype');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    src: url('./fonts/OpenSans/OpenSans-Italic-VariableFont_wdth\,wght.ttf')
      format('truetype');
  }

  html {
    font-family: 'Open Sans';
    padding: 0;
    margin: 0;
  }

  button {
    font-family: 'Open Sans';
  }

  body {
    padding: 0;
    margin: 0;
  }
`

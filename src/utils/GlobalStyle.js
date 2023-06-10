import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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
  }

  button {
    font-family: 'Open Sans';
  }

  body {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle

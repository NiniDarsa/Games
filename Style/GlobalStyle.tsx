import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: "Smooch Sans", serif;
    width: 100vw;
    height: 100vh;
  }
  html{
    font-size: 62.5%;
  }
  #root{
    width: 100vw;
    height: 100vh;
  }

`;
 
export default GlobalStyle;
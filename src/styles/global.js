import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100vw;
    height: 100vh;
    background: rgb(167,51,254);
background: radial-gradient(circle, rgba(167,51,254,1) 0%, rgba(19,24,63,1) 75%);
    font-family: 'Roboto', sans-serif;
}

`

export default GlobalStyles
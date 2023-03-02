import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0; 
    padding: 0; 
    outline: 0; 
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box; 
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    color: #7c7c7c;
    height: 100vh;
    position: relative;
  }
`
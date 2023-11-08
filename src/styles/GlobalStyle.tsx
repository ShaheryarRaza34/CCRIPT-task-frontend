import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  background: #f6f9ff;
}
body{
  font-family: 'Poppins', sans-serif;
}
#__next{
  height: 100vh;
}
`;

export default GlobalStyle;

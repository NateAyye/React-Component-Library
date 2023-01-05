import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  dark: {
    primary: '#161616AA',
    primary1: '#888888AA',
    text: '#EEEEEEAA'
  },
  light: {
    primary: '#EEEEEEAA',
    primary1: '#DDDDDDAA',
    text: '#161616AA'
  },
  fontFamily: 'Segoe UI',
}

const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: bolder;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <SSRProvider>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
      </SSRProvider>
    </ThemeProvider>
  );
}

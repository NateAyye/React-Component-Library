import Navbar from '../components/layouts/Navbar/Navbar'
import "../styles/globals.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import { ThemeProvider, createGlobalStyle } from "styled-components";


const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

const theme = {
  dark: {
    primary: '#161616AA',
    primary1: '#888888AA',
    defaultBgGradient: 'linear-gradient(95deg, #263238aa, #212121aa)',
    text: '#EEEEEEAA'

  },
  light: {
    primary: '#EEEEEEAA',
    primary1: '#DDDDDDAA',
    text: '#161616AA'
  },
  device: device,
  fontFamily: 'Segue UI',
}

const GlobalStyle = createGlobalStyle`
:root {
  --default-bg-gradient: linear-gradient(95deg, #263238aa, #212121aa);
  --box-shadow-pop: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
                   -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
  --box-shadow-inner: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
    -0.5px -0.5px 0px rgba(255, 255, 255, 1),
  0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
  0px 12px 10px -10px rgba(0, 0, 0, 0.05);
}
  button {
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: bolder;
  }


  @keyframes animate {
    0% {
      width: 0;
      height: 0;
      opacity: 0.2;
    }
    100% {
      width: 400px;
      height: 400px;
      opacity: 0;
    }
    
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

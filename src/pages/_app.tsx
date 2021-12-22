import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { customTheme } from '@/theme';

const globalStyle = css`
  html {
    font-size: 62.5%;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ChakraProvider resetCSS theme={customTheme}>
    <Global styles={globalStyle} />
    <Component {...pageProps} />
  </ChakraProvider>
);
export default MyApp;

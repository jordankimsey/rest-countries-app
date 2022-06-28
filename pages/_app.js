import '../styles/globals.css';
import { ThemeProvider, CssBaseline } from '@mui/material'
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../utility/createEmotionCache';
import theme from '../styles/theme/theme';
const clientSideEmotionCache = createEmotionCache();
import {ContextProvider} from './context/ContextProvider';


function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;

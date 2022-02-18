import type { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { Head } from '@/lib/head'
import { CustomThemeProvider } from '@/lib/theme'
import { selectMockServer } from '@/lib/selectMockServer'

const emotionCache = createCache({ key: 'css', prepend: true })
selectMockServer('rest')

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <CacheProvider value={emotionCache}>
    <Head>
      <meta name='viewport' content='initial-scale=1, width=device-width' />
    </Head>
    <CustomThemeProvider>
      <Component {...pageProps} />
    </CustomThemeProvider>
  </CacheProvider>
)
export default MyApp

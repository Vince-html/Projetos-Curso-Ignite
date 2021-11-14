import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import '../styles/Global.css'
import { ModalProvider } from '../context/modalContentx'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ModalProvider>
        <NextNProgress
          color="#000000"
          options={{ trickleSpeed: 100 }}
          startPosition={0.3}
          height={5} />
        <Component {...pageProps} />
      </ModalProvider>
    </ChakraProvider>
  )
}

export default MyApp
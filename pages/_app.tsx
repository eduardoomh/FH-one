import { NextPage } from 'next'
import { AppProps } from 'next/app'
import React from 'react'
import '../styles/globals.css'

type NextPageWithlayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithlayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  //return <Component {...pageProps} />

  return getLayout(<Component {...pageProps} />)
}

export default MyApp

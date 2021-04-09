import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render (): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/assets/favicon/site.webmanifest"/>
          <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#000000"/>
          <link rel="shortcut icon" href="/assets/favicon/favicon.ico"/>
          <meta name="msapplication-TileColor" content="#000000"/>
          <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml"/>
          <meta name="theme-color" content="#000000"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="overscroll-none dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

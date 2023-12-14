import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron } from '../styletron'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="zxx">
        <Head>
          <link
            rel="icon"
            type="image/png"
            href="/images/favicon.png"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const page = await ctx.renderPage({
    // eslint-disable-next-line react/display-name
    enhanceApp: (App) => (props) =>
      (
        <StyletronProvider value={styletron}>
          <App {...props} />
        </StyletronProvider>
      ),
  })
  const stylesheets = styletron.getStylesheets() || []
  return { ...page, stylesheets }
}

export default MyDocument

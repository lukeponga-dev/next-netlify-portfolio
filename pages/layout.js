// These styles apply to every route in the application
import 'styles/globals.css'
 
export default function RootLayout({ children }) {
  return (
    <Html lang="en">
                <Head>
                    <title>Luke Ponga's Portfolio</title>
                    <meta name="description" content="Luke Ponga - Junior Software Developer" />
                    <link rel="icon" href="headerimg.ico" />

                    {/* Additional metadata for SEO and social sharing */}
                    <meta property="og:title" content="Luke Ponga's Portfolio" />
                    <meta property="og:description" content="Luke Ponga - Junior Software Developer" />
                    <meta property="og:image" content="../public/headerimg.ico" />  {/* Replace with your image path */}
                    <meta property="og:url" content="Https://www.lukeponga.space/"/>
                    <meta property="og:type" content="website" />

                    <meta name="Developer" content='@lukeponga' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
  )
}
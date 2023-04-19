import Head from 'next/head'
import NavBar from './navBar';
import footer from './footer';



export const metadata = {
  title: 'AfaMilitar News',
  description: 'A força em suas notícias',
  author: 'Nanni',
  keywords: 'AFA, InterAFA, Imprensa SCAER, AFAMilitar',
  visualViewport: 'width=device-width, initial-scale=1.0'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" >
      <Head>
        <link rel="icon" href={'./icon.png'} />
      </Head>
      <body>
        <NavBar />
        <div className='children'>
          {children}
        </div>
        {footer()}
      </body>
    </html>
  )
}
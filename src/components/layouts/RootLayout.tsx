import React from 'react';
import { Helmet } from 'react-helmet';
import { Footer, Navbar } from '../client';

type RootLayoutProps = {
    children: React.ReactNode,
    title?: string,
    desc?: string
}

const RootLayout = ({children, title, desc}: RootLayoutProps) => {
  return (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content={desc} />
        </Helmet>
          <nav className='sticky z-50 top-0'>
            <Navbar />
          </nav>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>

    </>
  )
}

RootLayout.defaultProps = {
    title: "Delivery",
  };
  

export default RootLayout
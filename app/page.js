import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Hero = dynamic(() => import('./components/Hero.js'), {
  loading: () => <p>Loading...</p>,
})

const Header = dynamic(() => import('./components/Header.js'), {
  loading: () => <p>Loading header...</p>,
})

const IntroducingMyself = dynamic(() => import('./components/IntroducingMyself.js'), {
  loading: () => <p>Loading introduction...</p>,
})

const Footer = dynamic(() => import('./components/Footer.js'), {
  loading: () => <p>Loading footer...</p>,
})

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading Hero...</div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div>Loading introduction...</div>}>
          <IntroducingMyself />
        </Suspense>
        {/* Add more content for your home page here */}
      </main>
      <Footer />
    </>
  )
}

// Google Analytics integration
import Script from 'next/script'

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VB44D6Q5MJ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-VB44D6Q5MJ');
        `}
      </Script>
    </>
  )
}
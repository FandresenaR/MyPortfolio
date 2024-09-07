import Header from '../components/Header';
import GitHubProjects from '../components/GitHubProjects';
import Footer from '../components/Footer';

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center my-8">Welcome to My Kingdom</h1>
        <GitHubProjects />
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
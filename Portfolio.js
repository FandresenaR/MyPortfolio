'use client'
import dynamic from 'next/dynamic'
import Header from '../../components/Header';

const Portfolio = dynamic(() => import('../../components/PortfolioContent.js'), {
  loading: () => <p>Loading portfolio...</p>,
})

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-3xl font-bold text-center my-8">Welcome to My Portfolio</h1>
        <Portfolio />
      </main>
    </>
  )
}
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
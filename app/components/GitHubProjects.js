'use client';

import { useState, useEffect } from 'react';

// Simple message components
const LoadingMessage = () => <div className="text-center">Loading...</div>;
const ErrorMessage = ({ message }) => <div className="text-center text-red-500">Error: {message}</div>;

export default function GitHubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/FandresenaR/repos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        return response.json();
      })
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching GitHub repos:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingMessage />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="bg-gray-900 text-white p-4 sm:p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-emerald-400">
        My Projects
      </h2>
      
      {/* Figma Portfolio Section */}
      <div className="mb-8 sm:mb-12">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-emerald-300">Figma Portfolio</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="100%"
            height="100%"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2Fto6fQENLizvqmTgad1Tmxi%2FPortfolio%3Fnode-id%3D0-1%26t%3DA8CdKJGsWQVYjfoR-1"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* GitHub Projects Section */}
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-emerald-300">GitHub Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {repos.map(repo => (
          <div key={repo.id} className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl font-semibold text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
            >
              {repo.name}
            </a>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">{repo.description}</p>
            <div className="flex justify-between mt-4 text-xs sm:text-sm text-gray-400">
              <span>{repo.stargazers_count} stars</span>
              <span>{repo.forks_count} forks</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Simple message components
const LoadingMessage = () => <div className="text-center mb-10">Loading...</div>;
const ErrorMessage = ({ message }) => <div className="text-center text-red-500">Error: {message}</div>;

// Card-style Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="space-y-4">
    {/* Updated skeleton item styles */}
    <div className="bg-gray-700 rounded-lg p-4 animate-pulse">
      <div className="h-8 bg-gray-600 rounded w-3/4 mb-3"></div> {/* Increased height */}
      <div className="h-5 bg-gray-600 rounded w-full mb-2"></div>
      <div className="h-5 bg-gray-600 rounded w-5/6 mb-2"></div>
      <div className="flex justify-between mt-4">
        <div className="h-5 bg-gray-600 rounded w-1/4"></div>
        <div className="h-5 bg-gray-600 rounded w-1/4"></div>
      </div>
    </div>
    {/* Repeat for additional skeleton items */}
    <div className="bg-gray-700 rounded-lg p-4 animate-pulse">
      <div className="h-8 bg-gray-600 rounded w-3/4 mb-3"></div>
      <div className="h-5 bg-gray-600 rounded w-full mb-2"></div>
      <div className="h-5 bg-gray-600 rounded w-5/6 mb-2"></div>
      <div className="flex justify-between mt-4">
        <div className="h-5 bg-gray-600 rounded w-1/4"></div>
        <div className="h-5 bg-gray-600 rounded w-1/4"></div>
      </div>
    </div>
    <div className="bg-gray-700 rounded-lg p-4 animate-pulse mb-10">
      <div className="h-8 bg-gray-600 rounded w-3/4 mb-3"></div>
      <div className="h-5 bg-gray-600 rounded w-full mb-2"></div>
      <div className="h-5 bg-gray-600 rounded w-5/6 mb-2"></div>
      <div className="flex justify-between mt-4">
        <div className="h-5 bg-gray-600 rounded w-1/4"></div>
        <div className="h-5 bg-gray-600 rounded w-1/4"></div>
      </div>
    </div>
  </div>
);

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

  if (loading) return <SkeletonLoader />; // Updated to use SkeletonLoader
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="bg-gray-900 text-white p-4 sm:p-8 rounded-lg shadow-lg mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-emerald-400">
        My Projects
      </h2>
      
      {/* Figma Portfolio Section */}
      <div className="mb-8 sm:mb-12">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-emerald-300">Figma Portfolio</h3>
        <div className="relative w-auto" style={{ paddingTop: '36.25%' }}> {/* 16:9 Aspect Ratio */}
          <iframe 
            className="absolute top-0 left-0 w-full h-full" // Make iframe fill the container
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} 
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2Fto6fQENLizvqmTgad1Tmxi%2FPortfolio%3Fnode-id%3D0-1%26t%3DA8CdKJGsWQVYjfoR-1"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* AI Project Section */}
      <div className="mb-8 sm:mb-12">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-emerald-300">AI Project Presentation</h3>
        <h5 className="text-lg sm:text-xl font-semibold mb-6 text-emerald-300">Webcam CV</h5>
        <div className="aspect-w-16 aspect-h-9">
          {/* Updated iframe for responsiveness */}
          <iframe 
            src="https://player.vimeo.com/video/1011104087?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
            width="100%" 
            height="500"
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
            title="Facial Expression Recognition 2024-09-19 21-00-37">
          </iframe>
        </div>
        <p className="text-gray-300 mt-2 text-sm sm:text-base mb-10">
          Facial recognition made with Python Deepface to detect facial expression and can be used with a webcam
        </p>
        
        <div className="mb-6"> {/* Added margin for consistent spacing */}
          <a href="https://ailandclean.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl font-semibold text-emerald-300">AILandClean</a>
        </div>
        <Image src="/images/Ailand.PNG" alt="AILandClean Project" width={1000} height={500} className="w-full h-auto mb-4 object-cover" /> {/* Ensure responsive height */}
        <p className="text-gray-300 mt-2 text-sm sm:text-base mb-10">
          AILandClean is a project focused on utilizing AI for environmental sustainability.
        </p>

        <div className="mb-6"> {/* Added margin for consistent spacing */}
          <a href="https://tetika.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl font-semibold text-emerald-300">Tetika</a>
        </div>
        <Image src="/images/Tetika.png" alt="Tetika AI" width={1000} height={500} className="w-full h-auto mb-4 object-cover" /> {/* Ensure responsive height */}
        <p className="text-gray-300 mt-2 text-sm sm:text-base">
          Tetika AI is a Coding Assistant based on free LLM available until today. Most of them are multi-modal
        </p>
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

'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'

const PREFERRED_TECHNOLOGIES = [
  { name: 'Python', category: 'Python Ecosystem', icon: '🐍' },
  { name: 'TensorFlow', category: 'Python Ecosystem', icon: '🧠' },
  { name: 'PyTorch', category: 'Python Ecosystem', icon: '🔥' },
  { name: 'Django', category: 'Python Ecosystem', icon: '🌐' },
  { name: 'React', category: 'React Ecosystem', icon: '⚛️' },
  { name: 'Next.js', category: 'React Ecosystem', icon: '▲' },
  { name: 'Node.js', category: 'Other', icon: '🟢' },
  { name: 'Metasploit', category: 'Security', icon: '🛡️' },
  { name: 'Nmap', category: 'Security', icon: '🔍' },
  { name: 'Wireshark', category: 'Security', icon: '🦈' }
]

const SOFT_SKILLS = ['Communication', 'Teamwork', 'Adaptability', 'Problem-solving', 'Time management', 'Leadership', 'Creativity', 'Interpersonal skills', 'Self-motivation', 'Attention to detail']

export default function IntroducingMyself() {
  const [experienceYears, setExperienceYears] = useState({})
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const calculateExperience = () => {
      const currentYear = new Date().getFullYear()
      const years = {
        pm: currentYear - 2020,
        webdev: currentYear - 2022,
        ai: currentYear - 2023,
        pentest: currentYear - 2023,
      }
      setExperienceYears(years)
    }

    calculateExperience()

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const aiTitle = useMemo(() => {
    const aiYears = experienceYears.ai
    if (aiYears < 5) return 'Junior AI Developer'
    if (aiYears >= 5 && aiYears <= 7) return 'Confirmed AI Developer'
    return 'Senior AI Developer'
  }, [experienceYears.ai])

  const opacity = Math.min(scrollY / 500, 0.8)

  return (
    <div className="relative">
      <div 
        className="absolute inset-0 bg-gray-800 transition-opacity duration-300"
        style={{ opacity }}
      ></div>
      <div className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 shadow-lg rounded-lg p-8 max-w-4xl mx-auto backdrop-filter backdrop-blur-sm text-white">
      <h3 className="text-2xl font-bold mb-4 text-[#50C878] text-center">About Me</h3>
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          <div className="flex-shrink-0 mb-6 md:mb-0 w-full md:w-auto flex justify-center">
            <Image
              src="/images/me.jpg"
              alt="Njato Rakotoarisoa"
              width={200}
              height={200}
              className="rounded-full border-4 border-emerald-custom"
            />
          </div>
          <div className="flex-grow">
          
            <h1 className="text-3xl font-bold mb-2">
              <span className="border-b-2 border-emerald-custom">Njato</span> Rakotoarisoa
            </h1>
            <h2 className="text-xl text-gray-300 mb-4">{aiTitle} | AI Enthusiast | Aspiring Cybersecurity Specialist</h2>

            <div className="border-t border-gray-600 pt-4">
              <h3 className="text-lg font-semibold mb-2 text-[#50C878]">Professional Experience</h3>
              <ul className="list-disc list-inside mb-4">
                <li><span className="font-medium">Project Management:</span> {experienceYears.pm} years</li>
                <li><span className="font-medium">Web Development:</span> {experienceYears.webdev} years</li>
                <li><span className="font-medium">Artificial Intelligence:</span> {experienceYears.ai} years</li>
                <li><span className="font-medium">Cybersecurity:</span> {experienceYears.ai} years</li>
                <li><span className="font-medium">Penetration Testing:</span> {experienceYears.pentest} years</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#50C878]">Soft Skills</h3>
              <ul className="grid grid-cols-2 gap-2">
                {SOFT_SKILLS.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-emerald-custom" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2 text-[#50C878]">Certifications & Standards</h3>
              <ul className="list-disc list-inside mb-4">
                <li><span className="font-medium">ISO 27001:</span> Information Security Management Knowledge</li>
                <li><span className="font-medium">ISO 9001:</span> Quality Management Systems Knowledge</li>
                <li><span className="font-medium">Machine Learning with Python:</span> Certified</li>
                <li><span className="font-medium">Intro to Cybersecurity:</span> CISCO Certified</li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-4 text-[#50C878]">Languages</h3>
              <ul className="list-disc list-inside mb-4">
                <li><span className="font-medium">English:</span> Conversational</li>
                <li><span className="font-medium">French:</span> Native</li>
                <li><span className="font-medium">Malagasy:</span> Native</li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-4 text-[#50C878]">Preferred Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {PREFERRED_TECHNOLOGIES.map((tech, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-3 flex flex-col items-center justify-center transition-all duration-300 hover:bg-gray-600 hover:shadow-lg">
                    <span className="text-2xl mb-2">{tech.icon}</span>
                    <span className="text-sm font-medium text-center text-emerald-custom">{tech.name}</span>
                    <span className="text-xs text-gray-400">{tech.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-300 italic">
            &ldquo;Practice makes you better, Artificial Intelligence helps you to be more efficient.&rdquo;
          </p>
        </div>
      </div>
    </div>
  )
}
'use client'

import { useState, useEffect, useRef } from 'react'
import { Orbitron } from 'next/font/google'
import Link from 'next/link';

const orbitron = Orbitron({ subsets: ['latin'] })

const Hero = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const canvasRef = useRef(null)
  const videoRef = useRef(null)
  const starsRef = useRef([])
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const nearestStarsRef = useRef([])
  const animationFrameIdRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    // Set initial size
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Set video playback rate to 0.6 (half speed)
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.60;
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = windowSize.width
      canvas.height = windowSize.height
    }
    resizeCanvas()

    // Create exactly 15 stars
    const starCount = 15
    starsRef.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }))

    console.log(`Created ${starsRef.current.length} stars`); // Logging

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height) // Ensure canvas is cleared
      
      // Move and draw stars
      starsRef.current.forEach((star, index) => {
        if (nearestStarsRef.current.includes(index)) {
          // Attract to cursor
          const dx = mousePositionRef.current.x - star.x
          const dy = mousePositionRef.current.y - star.y
          star.x += dx * 0.05
          star.y += dy * 0.05
        } else {
          // Move freely
          star.x += star.vx
          star.y += star.vy
        }
        
        // Wrap stars around the screen
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = nearestStarsRef.current.includes(index) ? '#50C878' : 'white'
        ctx.fill()
      })

      animationFrameIdRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameIdRef.current)
    }
  }, [windowSize])

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event
    mousePositionRef.current = { x: clientX, y: clientY }

    // Find 5 nearest stars
    nearestStarsRef.current = starsRef.current
      .map((star, index) => ({
        index,
        distance: Math.hypot(star.x - clientX, star.y - clientY)
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5)
      .map(star => star.index)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden" onMouseMove={handleMouseMove}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://videos.pexels.com/video-files/12590338/12590338-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <canvas ref={canvasRef} className="absolute inset-0 z-10" />
      <div className="relative z-20 flex flex-col h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className={`${orbitron.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6`}>
          Let&apos;s think AI & Security !
        </h1>
        <Link 
          href="/portfolio" 
          className="inline-block px-6 py-3 bg-[#50C878] text-white rounded-full hover:bg-white hover:text-[#50C878] focus:outline-none focus:ring-2 focus:ring-white focus:bg-transparent focus:text-white transition duration-300"
        >
          Portfolio
        </Link>
      </div>
    </div>
  )
}

export default Hero
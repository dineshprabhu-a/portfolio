import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [displayName, setDisplayName] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [roleText, setRoleText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  const fullName = 'Dineshprabhu A'
  const roles = ['Software Engineer', 'Backend Developer', 'Java Expert', 'Problem Solver', 'Tech Enthusiast']
  
  // Name typing effect
  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayName(fullName.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)
    
    return () => clearInterval(typingInterval)
  }, [])

  // Rotating roles typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setRoleText(currentRole.slice(0, roleText.length + 1))
        if (roleText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setRoleText(currentRole.slice(0, roleText.length - 1))
        if (roleText === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)
    
    return () => clearTimeout(timeout)
  }, [roleText, isDeleting, roleIndex])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-20 w-4 h-4 bg-primary/40 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-32 w-6 h-6 bg-secondary/40 rotate-45 animate-float-reverse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-accent/40 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-5 h-5 border-2 border-primary/40 rounded-full animate-float-reverse"></div>
        <div className="absolute bottom-1/3 right-20 w-4 h-4 bg-primary/30 rotate-45 animate-float"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center">
          <div className="animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium mb-8 animate-pulse-glow">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for opportunities
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              Hi, I'm <span className="gradient-text text-glow">{displayName}</span>
              <span className="animate-pulse text-primary">|</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-8">
              <span className="text-gray-600 dark:text-gray-400">I'm a </span>
              <span className="relative inline-block">
                <span className="gradient-text font-bold">{roleText}</span>
                <span className="animate-pulse text-primary font-bold">|</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></span>
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transforming legacy systems into <span className="text-primary font-medium">modern, scalable solutions</span>. 
              Specialized in Java ecosystem with expertise in Spring Boot, Hibernate, and enterprise application development.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Get In Touch
            </button>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-4 animate-fade-in">
            <a
              href="https://github.com/dineshprabhu-a"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/20"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dineshprabhua/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
            </a>
            <a
              href="https://leetcode.com/u/Dineshprabhu_A/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-orange-500/20"
              aria-label="LeetCode"
            >
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">LeetCode</span>
            </a>
            <a
              href="mailto:dineshprabhu02ece@gmail.com"
              className="group relative p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-red-500/20"
              aria-label="Email"
            >
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToSection('about')}
            className="cursor-pointer animate-bounce"
          >
            <svg
              className="w-8 h-8 text-gray-600 dark:text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

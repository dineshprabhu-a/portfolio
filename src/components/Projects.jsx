import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-40 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Projects that showcase my skills and expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Project 1 - ECDH */}
          <div className="group tilt-card card p-8 shine-effect relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <h3 className="text-2xl font-bold">Implementation of Elliptic-Curve Diffie-Hellman Algorithm for Secured Communication</h3>
              <span className="text-primary font-medium mt-2 md:mt-0 whitespace-nowrap">May 2024</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Java</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">MySQL</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Apache Server</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">JDBC</span>
            </div>

            <ul className="space-y-3 text-gray-600 dark:text-gray-400 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Developed a secure communication system for encrypted data transfer between patients and doctors, ensuring privacy and confidentiality.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Implemented Elliptic-Curve Diffie-Hellman (ECDH) for key exchange and AES encryption for securing medical data.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Used Java with JDBC for backend logic, MySQL for database operations, and hosted the system on an Apache server.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Supported secure messaging, electronic health records, and medical image transfer, with enhanced image quality during decryption.</span>
              </li>
            </ul>

            <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <span className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Published Research
              </span>
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                International Journal of Novel Research and Development (IJNRD), May 2024
              </span>
            </div>
          </div>

          {/* Project 2 - Brake Failure Indicator */}
          <div className="group tilt-card card p-8 shine-effect relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <h3 className="text-2xl font-bold">Brake Failure Indicator and Emergency Braking System</h3>
              <span className="text-primary font-medium mt-2 md:mt-0 whitespace-nowrap">Academic Project</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Embedded Systems</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Microcontroller</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Sensors</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Arduino</span>
            </div>

            <ul className="space-y-3 text-gray-600 dark:text-gray-400 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Designed and developed an embedded system to detect brake failure in vehicles and automatically activate emergency braking mechanisms.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Implemented sensor-based monitoring system to continuously check brake fluid levels and brake pad conditions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Developed alert system with visual and audio indicators to warn the driver of potential brake issues.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Integrated emergency braking mechanism that activates automatically when brake failure is detected to prevent accidents.</span>
              </li>
            </ul>

            <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <span className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Hardware + Software Integration
              </span>
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Electronics & Communication Engineering Project
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

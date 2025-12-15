import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Work <span className="gradient-text">Experience</span></h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the roles that shaped my expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold">Software Engineer</h3>
                <h4 className="text-xl text-primary font-semibold">Neurealm (formerly GS Lab — GAVS)</h4>
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0 md:text-right">
                <p className="font-medium">Mar 2025 – Present</p>
                <p>Chennai, TN</p>
              </div>
            </div>
            
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Project: Athenahealth – Rules 2.0 Migration
              </span>
              <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                Full-time
              </span>
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                On-site
              </span>
            </div>

            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Modernized a legacy Perl application by migrating its functionality to Java, utilizing the Core Java Collection Framework (List, Map, Set) and Stream API to improve performance and long-term maintainability.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Implemented efficient and declarative data processing logic in Java using Streams for functional operations, including filtering, mapping, and flatMapping.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Proactively ensured high code quality and minimized potential defects by designing and implementing a comprehensive unit testing strategy that achieved over 95% test coverage for the migrated codebase.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Managed Bitbucket (Git) pull requests for efficient code reviews and oversaw branch merging, ensuring seamless team collaboration and conflict-free code integration within the development lifecycle.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Conducted rigorous post-migration testing to verify accuracy and system reliability.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Performed root cause analysis of defects, providing actionable insights for faster issue resolution and improved software quality.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Collaborated with teams on requirements analysis to ensure a smooth migration and created detailed development and testing documentation to maintain clarity and consistency.</span>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold mb-3">Key Achievements:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>95%+ Test Coverage Achieved</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Successful Perl to Java Migration</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Improved System Performance</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Streamlined Code Review Process</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IBM Internship */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="card p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold">Student Intern</h3>
                <h4 className="text-xl text-primary font-semibold">IBM</h4>
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0 md:text-right">
                <p className="font-medium">Jun 2023 - Jul 2023 · 2 mos</p>
                <p>Remote</p>
              </div>
            </div>
            
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                Internship
              </span>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Machine Learning
              </span>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Artificial Intelligence
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Developed the "Mental Fitness Tracker" - an AI-powered solution that predicts and monitors mental well-being. 
              By analyzing diverse data, it offers personalized insights for proactive mental health management. 
              Empowering users to prioritize emotional well-being, it contributes to a healthier and more resilient society.
            </p>

            <a href="https://github.com/dineshprabhu-a/mental-fitness-tracker" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              View Project on GitHub
            </a>
          </div>
        </div>

        {/* Emertxe Internship */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="card p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold">Embedded System Engineer</h3>
                <h4 className="text-xl text-primary font-semibold">Emertxe Information Technologies</h4>
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0 md:text-right">
                <p className="font-medium">Aug 2023 - Oct 2023 · 3 mos</p>
                <p>Remote</p>
              </div>
            </div>
            
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                Internship
              </span>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Embedded Systems
              </span>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Microcontrollers
              </span>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                C Programming
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400">
              Gained extensive knowledge in C language, microcontrollers, and embedded systems. 
              Successfully executed a project simulating a microwave oven using MPLABX IDE and XC8 compiler, 
              with simulations conducted on the PICSim Lab platform.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Experience

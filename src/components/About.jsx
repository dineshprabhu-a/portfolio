import React from 'react'

const About = () => {
  const stats = [
    { value: '8.26', label: 'CGPA' },
    { value: '95%', label: 'Test Coverage' },
    { value: '10+', label: 'Technologies' },
    { value: '84%', label: 'NPTEL Java' },
  ]

  const highlights = [
    'Legacy System Modernization',
    'Test-Driven Development',
    'Agile Methodologies',
    'Code Quality & Reviews',
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Who Am I</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better and discover what drives my passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full"></div>
            <div className="pl-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                I'm a <span className="text-primary">Software Engineer</span> passionate about building scalable applications
              </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              As a Software Engineer at Neurealm (formerly GS Lab — GAVS), I specialize in transforming 
              legacy systems into modern, maintainable solutions. My current focus is on the Athenahealth 
              Rules 2.0 Migration project, where I've successfully migrated Perl applications to Java 
              while achieving 95%+ test coverage.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm passionate about writing clean, efficient code and implementing best practices in 
              software development. My experience spans the full development lifecycle - from requirements 
              analysis and design to implementation, testing, and deployment. I thrive in collaborative 
              environments and enjoy solving complex technical challenges.
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3">What I Bring to the Table:</h4>
              <div className="flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <span key={item} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="font-semibold">Location:</span> 
                <span className="text-gray-600 dark:text-gray-400">Chennai, Tamil Nadu, India</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Email:</span> 
                <a href="mailto:dineshprabhu02ece@gmail.com" className="text-primary hover:underline">
                  dineshprabhu02ece@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Education:</span> 
                <span className="text-gray-600 dark:text-gray-400">BE ECE, Anna University (BIT Campus)</span>
              </p>
            </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative card p-8 text-center overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <h4 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">{stat.value}</h4>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

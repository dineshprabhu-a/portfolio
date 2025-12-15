import React from 'react'

const Education = () => {
  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4"><span className="gradient-text">Education</span></h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="card p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div>
                <h3 className="text-xl font-bold">Anna University (BIT Campus)</h3>
                <p className="text-primary font-semibold">BE Electronics and Communication Engineering</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="font-medium">June 2024</p>
                <p className="text-green-600 dark:text-green-400 font-bold">CGPA: 8.26/10.0</p>
              </div>
            </div>
          </div>

          <div className="card p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div>
                <h3 className="text-xl font-bold">Milton Matriculation Higher Secondary School</h3>
                <p className="text-primary font-semibold">Class – XII, State Board</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="font-medium">May 2020</p>
                <p className="text-green-600 dark:text-green-400 font-bold">Percentage: 71.16%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

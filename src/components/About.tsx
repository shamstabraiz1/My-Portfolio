import React from 'react'
import { Education } from '../types'

const About: React.FC = () => {
  const education: Education[] = [
    {
      id: '1',
      institution: 'University of Azad Jammu and Kashmir',
      degree: 'Bachelor of Science',
      field: 'Software Engineering',
      startDate: '2022-12',
      endDate: '2026-12',
      gpa: 3.0,
      relevantCoursework: [
        'Data Structures & Algorithms',
        'Web Development',
        'Database Systems',
        'Software Engineering',
        'Machine Learning',
        'Mobile App Development'
      ],
      achievements: [
        'Dean\'s List for 4 consecutive semesters',
        'President of Software Engineering Club',
        'Winner of University Hackathon 2023',
        'Teaching Assistant for Intro to Programming'
      ]
    }
  ]

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Get to know more about my background, education, and what drives my passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">My Story</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a passionate Software Engineering student with a deep love for creating innovative 
                solutions through technology. My journey in programming began in high school when 
                I built my first website, and I've been hooked ever since.
              </p>
              <p>
                What excites me most about software development is the ability to turn creative 
                ideas into functional applications that can make a real difference in people's lives. 
                I enjoy the problem-solving aspect of coding and the continuous learning that comes 
                with staying current in this rapidly evolving field.
              </p>
              {/* <p>
                When I'm not coding, you can find me contributing to open-source projects, 
                participating in hackathons, or mentoring fellow students. I believe in the power 
                of collaboration and knowledge sharing within the developer community.
              </p> */}
              <p>
                I'm currently seeking internship opportunities where I can apply my skills, 
                learn from experienced professionals, and contribute to meaningful projects 
                that challenge me to grow as a developer.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Location</h4>
                </div>
                <p className="text-gray-300 font-medium">Islamabad, Pakistan</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Status</h4>
                </div>
                <p className="text-gray-300 font-medium">Available for Internships</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Experience</h4>
                </div>
                <p className="text-gray-300 font-medium">1+ Year</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white text-lg">Focus</h4>
                </div>
                <p className="text-gray-300 font-medium">Full Stack & Bot Development</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
            {education.map((edu) => (
              <div key={edu.id} className="bg-gray-800 rounded-lg p-6 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      {edu.degree} in {edu.field}
                    </h4>
                    <p className="text-yellow-400 font-medium">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">
                      {edu.startDate} - {edu.endDate || 'Present'}
                    </p>
                  </div>
                  {edu.gpa && (
                    <div className="text-right">
                      <p className="text-sm text-gray-400">GPA</p>
                      <p className="text-lg font-semibold text-white">{edu.gpa}/4.0</p>
                    </div>
                  )}
                </div>

                {/* Relevant Coursework */}
                <div className="mb-4">
                  <h5 className="font-medium text-white mb-2">Relevant Coursework</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCoursework.map((course, index) => (
                      <span
                        key={index}
                        className="bg-slate-700 px-3 py-1 rounded-full text-sm text-gray-300 border border-gray-600"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h5 className="font-medium text-white mb-2">Achievements</h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-4 h-4 text-yellow-400 mt-1 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
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
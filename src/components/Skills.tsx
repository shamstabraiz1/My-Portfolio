import React, { useState } from 'react'
import { Skill } from '../types'

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('languages')

  const skills: Skill[] = [
    // Languages
    { id: '1', name: 'JavaScript', category: 'languages', proficiency: 4, yearsOfExperience: 3 },
    // { id: '2', name: 'TypeScript', category: 'languages', proficiency: 4, yearsOfExperience: 2 },
    { id: '3', name: 'Python', category: 'languages', proficiency: 4, yearsOfExperience: 3 },
    // { id: '4', name: 'Java', category: 'languages', proficiency: 3, yearsOfExperience: 2 },
    { id: '5', name: 'HTML/CSS', category: 'languages', proficiency: 5, yearsOfExperience: 4 },
    { id: '6', name: 'SQL', category: 'languages', proficiency: 3, yearsOfExperience: 2 },

    // Frameworks
    { id: '7', name: 'React', category: 'frameworks', proficiency: 4, yearsOfExperience: 2 },
    { id: '8', name: 'Node.js', category: 'frameworks', proficiency: 4, yearsOfExperience: 2 },
    { id: '9', name: 'Express.js', category: 'frameworks', proficiency: 3, yearsOfExperience: 2 },
    // { id: '10', name: 'Next.js', category: 'frameworks', proficiency: 3, yearsOfExperience: 1 },
    { id: '11', name: 'Tailwind CSS', category: 'frameworks', proficiency: 4, yearsOfExperience: 2 },
    { id: '12', name: 'Django', category: 'frameworks', proficiency: 3, yearsOfExperience: 1 },

    // Tools
    { id: '13', name: 'Git', category: 'tools', proficiency: 4, yearsOfExperience: 3 },
    { id: '14', name: 'VS Code', category: 'tools', proficiency: 5, yearsOfExperience: 4 },
    { id: '15', name: 'MongoDB', category: 'tools', proficiency: 3, yearsOfExperience: 2 },
    // { id: '16', name: 'PostgreSQL', category: 'tools', proficiency: 3, yearsOfExperience: 1 },
    // { id: '17', name: 'Docker', category: 'tools', proficiency: 2, yearsOfExperience: 1 },
    { id: '18', name: 'AWS', category: 'tools', proficiency: 2, yearsOfExperience: 1 },

    // Soft Skills
    { id: '19', name: 'Problem Solving', category: 'soft-skills', proficiency: 5 },
    { id: '20', name: 'Team Collaboration', category: 'soft-skills', proficiency: 4 },
    // { id: '21', name: 'Communication', category: 'soft-skills', proficiency: 4 },
    { id: '22', name: 'Leadership', category: 'soft-skills', proficiency: 3 },
    { id: '23', name: 'Time Management', category: 'soft-skills', proficiency: 4 },
    // { id: '24', name: 'Adaptability', category: 'soft-skills', proficiency: 5 },
  ]

  const categories = [
    // { id: 'all', label: 'All Skills', icon: '🎯' },
    { id: 'languages', label: 'Languages', icon: '💻' },
    { id: 'frameworks', label: 'Frameworks', icon: '⚛️' },
    { id: 'tools', label: 'Tools', icon: '🛠️' },
    { id: 'soft-skills', label: 'Soft Skills', icon: '🤝' },
  ]

  const filteredSkills = skills.filter(skill => skill.category === activeCategory)

  const getProficiencyLabel = (level: number): string => {
    const labels = ['', 'Beginner', 'Novice', 'Intermediate', 'Advanced', 'Expert']
    return labels[level]
  }

  const getProficiencyColor = (level: number): string => {
    const colors = ['', 'bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500']
    return colors[level]
  }

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and skills I've developed through my studies and projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                ? 'bg-yellow-400 text-gray-900 shadow-lg transform scale-105'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white shadow-md hover:shadow-lg'
                }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-sm text-gray-400 capitalize">
                  {skill.category.replace('-', ' ')}
                </span>
              </div>

              {/* Proficiency Bar */}
              <div className="mb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-300">
                    {getProficiencyLabel(skill.proficiency)}
                  </span>
                  <span className="text-sm text-gray-400">
                    {skill.proficiency}/5
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${getProficiencyColor(skill.proficiency)}`}
                    style={{ width: `${(skill.proficiency / 5) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Years of Experience */}
              {skill.yearsOfExperience && (
                <div className="text-sm text-gray-400">
                  <span className="font-medium">{skill.yearsOfExperience}</span> year{skill.yearsOfExperience !== 1 ? 's' : ''} experience
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gray-800 rounded-lg p-8 shadow-md border border-gray-700">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Skills Overview
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {skills.filter(s => s.category === 'languages').length}
              </div>
              <div className="text-gray-300">Programming Languages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {skills.filter(s => s.category === 'frameworks').length}
              </div>
              <div className="text-gray-300">Frameworks & Libraries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {skills.filter(s => s.category === 'tools').length}
              </div>
              <div className="text-gray-300">Tools & Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {skills.filter(s => s.proficiency >= 4).length}
              </div>
              <div className="text-gray-300">Advanced Skills</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
import React, { useState } from 'react'
import { Project } from '../types'

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with user authentication, shopping cart, and payment integration.',
      longDescription: 'A comprehensive e-commerce platform built with React and Node.js. Features include user authentication, product catalog, shopping cart functionality, order management, and Stripe payment integration. The application uses MongoDB for data storage and implements RESTful APIs for seamless frontend-backend communication.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe API', 'JWT', 'Tailwind CSS'],
      category: 'web',
      imageUrl: '/api/placeholder/600/400',
      screenshots: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
      liveUrl: 'https://ecommerce-demo.example.com',
      githubUrl: 'https://github.com/johnsmith/ecommerce-platform',
      featured: true,
      completedDate: '2024-03',
      challenges: [
        'Implementing secure payment processing with Stripe',
        'Managing complex state for shopping cart across components',
        'Optimizing database queries for product search and filtering'
      ],
      learnings: [
        'Advanced React patterns and state management',
        'RESTful API design and implementation',
        'Payment gateway integration and security best practices'
      ]
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      longDescription: 'A modern task management application inspired by Trello and Asana. Built with React and Firebase, it features real-time collaboration, drag-and-drop functionality, team management, and progress tracking. Users can create projects, assign tasks, set deadlines, and track progress with visual dashboards.',
      technologies: ['React', 'Firebase', 'TypeScript', 'Material-UI', 'React DnD'],
      category: 'web',
      imageUrl: '/api/placeholder/600/400',
      screenshots: ['/api/placeholder/800/600', '/api/placeholder/800/600'],
      liveUrl: 'https://taskmanager-demo.example.com',
      githubUrl: 'https://github.com/johnsmith/task-manager',
      featured: true,
      completedDate: '2024-01',
      challenges: [
        'Implementing real-time synchronization across multiple users',
        'Creating smooth drag-and-drop interactions',
        'Designing an intuitive user interface for complex workflows'
      ],
      learnings: [
        'Real-time database management with Firebase',
        'Advanced TypeScript patterns and type safety',
        'User experience design for productivity applications'
      ]
    },
    {
      id: '3',
      title: 'Weather Forecast App',
      description: 'Mobile-responsive weather application with location-based forecasts and interactive maps.',
      longDescription: 'A comprehensive weather application that provides current conditions, 7-day forecasts, and interactive weather maps. Built with React and integrated with multiple weather APIs for accurate data. Features include location detection, favorite locations, weather alerts, and beautiful data visualizations.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation API', 'CSS3'],
      category: 'web',
      imageUrl: '/api/placeholder/600/400',
      screenshots: ['/api/placeholder/800/600'],
      liveUrl: 'https://weather-app-demo.example.com',
      githubUrl: 'https://github.com/johnsmith/weather-app',
      featured: false,
      completedDate: '2023-11',
      challenges: [
        'Handling multiple API integrations and error states',
        'Creating responsive design for various screen sizes',
        'Implementing efficient data caching for better performance'
      ],
      learnings: [
        'API integration and error handling strategies',
        'Data visualization with Chart.js',
        'Progressive Web App (PWA) development'
      ]
    },
    {
      id: '4',
      title: 'Personal Finance Tracker',
      description: 'Desktop application for tracking personal expenses and budget management with data visualization.',
      longDescription: 'A desktop application built with Electron and React for comprehensive personal finance management. Features include expense tracking, budget planning, financial goal setting, and detailed analytics with charts and reports. The app stores data locally with encryption for privacy.',
      technologies: ['Electron', 'React', 'SQLite', 'Chart.js', 'Node.js'],
      category: 'desktop',
      imageUrl: '/api/placeholder/600/400',
      screenshots: ['/api/placeholder/800/600', '/api/placeholder/800/600'],
      githubUrl: 'https://github.com/johnsmith/finance-tracker',
      featured: false,
      completedDate: '2023-09',
      challenges: [
        'Implementing secure local data storage',
        'Creating complex financial calculations and analytics',
        'Designing intuitive desktop user interface'
      ],
      learnings: [
        'Electron framework for desktop app development',
        'Local database management with SQLite',
        'Financial data modeling and calculations'
      ]
    },
    {
      id: '5',
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time metrics and scheduling features.',
      longDescription: 'A comprehensive social media management dashboard that aggregates data from multiple platforms. Built with Next.js and integrated with various social media APIs. Features include post scheduling, analytics tracking, engagement metrics, and automated reporting.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Social Media APIs'],
      category: 'web',
      imageUrl: '/api/placeholder/600/400',
      screenshots: ['/api/placeholder/800/600'],
      liveUrl: 'https://social-dashboard-demo.example.com',
      githubUrl: 'https://github.com/johnsmith/social-dashboard',
      featured: true,
      completedDate: '2024-02',
      challenges: [
        'Integrating multiple social media APIs with different rate limits',
        'Creating real-time data synchronization',
        'Building complex data visualization components'
      ],
      learnings: [
        'Next.js advanced features and optimization',
        'Database design with Prisma ORM',
        'API rate limiting and caching strategies'
      ]
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'desktop', label: 'Desktop Apps' },
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  // const featuredProjects = projects.filter(project => project.featured)

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and passion for development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${filter === category.id
                ? 'bg-yellow-400 text-gray-900 shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-700"
              onClick={() => openProjectModal(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                <div className="text-gray-900 text-6xl font-bold opacity-20">
                  {project.title.charAt(0)}
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-gray-400 text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-yellow-400 hover:text-yellow-300 font-medium text-sm flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-gray-300 font-medium text-sm flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-600">{selectedProject.description}</p>
                  </div>
                  <button
                    onClick={closeProjectModal}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">About This Project</h4>
                    <p className="text-gray-600 leading-relaxed">{selectedProject.longDescription}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Challenges</h4>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-gray-600">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What I Learned</h4>
                    <ul className="space-y-2">
                      {selectedProject.learnings.map((learning, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span className="text-gray-600">{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 pt-4 border-t">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                      >
                        View Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors"
                      >
                        View Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
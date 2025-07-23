import React, { useState, useEffect } from 'react'

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const titles = [
    'Full Stack Developer',
    'Bot Developer',
    'Problem Solver',
    'Automation'

  ]

  useEffect(() => {
    const currentTitle = titles[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, titles])

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleResumeClick = () => {
    // This would typically download or open a resume PDF
    alert('Resume download would be implemented here')
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Dark navy blue background */}
      <div className="absolute inset-0 bg-slate-900"></div>

      <div className="relative z-10 min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Hi, I'm{' '}
                <span className="text-yellow-400">Shams Tabraiz</span>
              </h1>

              {/* Animated Subtitle */}
              <div className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-6 h-12 flex items-center">
                <span>I'm a </span>
                <span className="text-yellow-400 font-semibold ml-2 min-w-[200px] text-left">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-200 mb-8 max-w-lg leading-relaxed">
                Passionate Software Engineering last year student with a love for creating innovative web applications,
                solving complex problems and Bot Developer. I enjoy turning ideas into reality through clean,
                efficient code and thoughtful design.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleContactClick}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </button>
                <button
                  onClick={handleResumeClick}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Download Resume
                </button>
              </div>
            </div>

            {/* Right side - Profile image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Circular profile image */}
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/30 shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)] hover:shadow-[0_45px_80px_-15px_rgba(255,255,255,0.4)] transition-shadow duration-300">
                  <img
                    src="/my_pic.png"
                    alt="Shams Tabraiz"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                    <div className="text-6xl text-white font-bold">ST</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
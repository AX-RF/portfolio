import { Github, X, Calendar, User } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  tags: string[];
  github: string;
  color: string;
  createdDate: string;
  features: string[];
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      title: "Let's Go Travel",
      description: 'A comprehensive travel booking platform for exploring destinations',
      detailedDescription: 'A full-featured travel booking platform that allows users to discover new destinations, book flights and hotels, and plan their perfect vacation. Built with modern web technologies for a seamless user experience.',
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['JavaScript', 'PHP', 'HTML', 'CSS', 'MySQL'],
      github: 'https://github.com/AX-RF/travel-project',
      color: 'cyan',
      createdDate: 'March 2024',
      features: ['Search destinations', 'Book flights & hotels', 'User reviews', 'Payment integration']
    },
    {
      title: 'Masaha Platform',
      description: 'This is a PHP web project for Masaha, a modern and responsive medical website',
      detailedDescription: 'This is a PHP-based web project for Masaha, designed as a modern and responsive medical services website. The frontend uses HTML, CSS (Bootstrap), and JavaScript. The backend connects to a database using PHP.',
      image: 'https://media.istockphoto.com/id/2222946930/photo/health-care-services-and-medical-insurance-payments.webp?a=1&b=1&s=612x612&w=0&k=20&c=YcejP6AEgLeDz4Cn7NvgDM2qVGnhAHMpR4M7xdnoFGs=',
      tags: ['JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/AX-RF/Masaha-project',
      color: 'blue',
      createdDate: 'February 2024',
      features: ['Appointment booking', 'Patient management', 'Medical records', 'Online consultation', 'Health services info', 'Admin dashboard']
    },
    {
      title: 'Hotel Booking System',
      description: 'Modern hotel reservation system with real-time availability',
      detailedDescription: 'A sleek hotel booking system that provides real-time room availability, pricing, and reservation management. Built with responsive design principles for optimal mobile and desktop experience.',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Bootstrap', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/AX-RF/hotel-booking-system',
      color: 'pink',
      createdDate: 'January 2024',
      features: ['Room search', 'Online booking', 'Payment system', 'Booking management']
    },
    {
      title: 'Weather App',
      description: 'Real-time weather forecasting application',
      detailedDescription: 'A beautiful weather application that provides accurate real-time weather information, forecasts, and weather alerts. Built with Python and Tkinter with API integration for live weather data.',
      image: 'https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Python', 'Tkinter', 'API'],
      github: 'https://github.com/AX-RF/Weather_App',
      color: 'green',
      createdDate: 'December 2023',
      features: ['Current weather', '7-day forecast', 'Multiple locations', 'Weather alerts']
    },
    {
      title: 'Task Manager',
      description: 'Organize your life with todos, reminders, and productivity tracking',
      detailedDescription: 'A powerful task management app built with Flutter that helps you stay organized and productive. Features cloud sync, reminders, categories, and beautiful Material Design interface.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Python', 'JSON', 'PyQt'],
      github: 'https://github.com/AX-RF/todo-list-app',
      color: 'purple',
      createdDate: 'November 2023',
      features: ['Task lists', 'Reminders', 'Cloud sync', 'Categories']
    },
    {
      title: 'Tic Tac Toe vs AI',
      description: 'Classic game with intelligent AI opponent',
      detailedDescription: 'An intelligent Tic Tac Toe game featuring an AI opponent powered by minimax algorithm. Challenge yourself against different difficulty levels and enjoy smooth gameplay.',
      image: 'https://t3.ftcdn.net/jpg/15/43/24/38/360_F_1543243860_LAomDPgFi3rw8N7Wq77NhitACmUaYGHe.jpg',
      tags: ['Python', 'API', 'AI'],
      github: 'https://github.com/AX-RF/tic_tac_toe',
      color: 'cyan',
      createdDate: 'October 2023',
      features: ['AI opponent', 'Multiple difficulty levels', 'Score tracking', 'Clean UI']
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; text: string; bg: string; badge: string }> = {
      cyan: {
        border: 'border-cyan-400',
        text: 'text-cyan-400',
        bg: 'bg-cyan-400/10',
        badge: 'bg-cyan-400/20 border-cyan-400/30'
      },
      blue: {
        border: 'border-blue-400',
        text: 'text-blue-400',
        bg: 'bg-blue-400/10',
        badge: 'bg-blue-400/20 border-blue-400/30'
      },
      pink: {
        border: 'border-pink-400',
        text: 'text-pink-400',
        bg: 'bg-pink-400/10',
        badge: 'bg-pink-400/20 border-pink-400/30'
      },
      green: {
        border: 'border-green-400',
        text: 'text-green-400',
        bg: 'bg-green-400/10',
        badge: 'bg-green-400/20 border-green-400/30'
      },
      purple: {
        border: 'border-purple-400',
        text: 'text-purple-400',
        bg: 'bg-purple-400/10',
        badge: 'bg-purple-400/20 border-purple-400/30'
      }
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gray-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-1/3 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-400">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my mobile applications and development journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            return (
              <div
                key={index}
                onClick={() => setSelectedProject(project)}
                className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border ${colorClasses.border} hover:shadow-lg hover:shadow-${project.color}-400/50 transition-all duration-700 cursor-pointer hover:scale-105 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 text-white group-hover:${colorClasses.text} transition-colors`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 text-xs rounded-full ${colorClasses.badge} ${colorClasses.text} border`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 items-center justify-between">
                    <a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      className={`flex items-center gap-2 text-sm ${colorClasses.text} hover:text-white transition-colors`}
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <span className="text-xs text-gray-500">Click for details</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/AX-RF"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-gray-900 font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base"
          >
            <Github size={20} />
            View All Projects
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-gray-800 rounded-2xl max-w-4xl w-full my-4 border border-cyan-400/30 shadow-2xl sm:translate-y-0 translate-y-20 lg:translate-y-20 sm:mt-0 mt-20 lg:mt-40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Image */}
            <div className="relative h-70 md:h-60 rounded-t-2xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-gray-900/80 text-white p-2 rounded-full hover:bg-gray-900 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h2>
                <div className="flex items-center gap-4 text-gray-300 text-sm">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {selectedProject.createdDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Description */}
              <div>
                <h3 className={`text-xl font-semibold ${getColorClasses(selectedProject.color).text} mb-3`}>
                  About the Project
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.detailedDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className={`text-xl font-semibold ${getColorClasses(selectedProject.color).text} mb-3`}>
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <span className={`w-2 h-2 rounded-full ${getColorClasses(selectedProject.color).bg}`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className={`text-xl font-semibold ${getColorClasses(selectedProject.color).text} mb-3`}>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 text-sm rounded-full ${getColorClasses(selectedProject.color).badge} ${getColorClasses(selectedProject.color).text} border`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <div className="flex items-center gap-4 bg-gray-900/50 rounded-xl p-4 hover:bg-gray-900/70 transition-all duration-300 group">
                  <a 
                    href="#about" 
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center gap-4 flex-1 cursor-pointer"
                  >
                    <img
                      src="/images/me1.png"
                      alt="Developer"
                      className="w-16 h-16 rounded-full border-2 border-cyan-400 group-hover:border-cyan-300 transition-colors"
                      onError={(e) => {
                        e.currentTarget.src = 'https://ui-avatars.com/api/?name=FAYSAL+ELALLAOUI&background=22d3ee&color=fff&size=128';
                      }}
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <User size={16} className="text-cyan-400" />
                        <span className="text-gray-400 text-sm">Created by</span>
                      </div>
                      <p className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">ELALLAOUI FAYSAL</p>
                      <p className="text-gray-400 text-sm">Web Developer | Mobile App Developer</p>
                    </div>
                  </a>
                  <a
                    href="/Faysal_Elalaoui_Developer_App.pdf"
                    download
                    className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500 text-gray-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300 whitespace-nowrap"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="hidden sm:inline">Download CV</span>
                    <span className="sm:hidden">CV</span>
                  </a>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-gray-900 font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Github size={20} />
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
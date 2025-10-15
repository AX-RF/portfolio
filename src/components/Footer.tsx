import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="https://github.com/AX-RF"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-cyan transition-colors hover:scale-110 transform duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/faysal-elallaoui"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors hover:scale-110 transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&to=faysalelallaoui0@gmail.com" 
              target="_blank"
              className="text-gray-400 hover:text-neon-pink transition-colors hover:scale-110 transform duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-neon-pink animate-pulse" fill="currentColor" />
            <span>by a Passionate Mobile Developer</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm">
            <a href="#home" className="text-gray-400 hover:text-neon-cyan transition-colors">
              Home
            </a>
            <span className="text-gray-600">•</span>
            <a href="#about" className="text-gray-400 hover:text-neon-cyan transition-colors">
              About
            </a>
            <span className="text-gray-600">•</span>
            <a href="#skills" className="text-gray-400 hover:text-neon-cyan transition-colors">
              Skills
            </a>
            <span className="text-gray-600">•</span>
            <a href="#projects" className="text-gray-400 hover:text-neon-cyan transition-colors">
              Projects
            </a>
            <span className="text-gray-600">•</span>
            <a href="#roadmap" className="text-gray-400 hover:text-neon-cyan transition-colors">
              Roadmap
            </a>
            <span className="text-gray-600">•</span>
            <a href="#contact" className="text-gray-400 hover:text-neon-cyan transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-4 sm:right-8 lg:right-12 top-1/2 -translate-y-1/2 group"
        aria-label="Scroll to top"
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          
          {/* Button */}
          <div className="relative bg-gradient-to-r from-neon-cyan to-neon-blue p-3 rounded-full shadow-lg group-hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] group-hover:scale-110 transition-all duration-300">
            <ArrowUp size={20} className="text-gray-900 group-hover:animate-bounce" strokeWidth={3} />
          </div>
        </div>
      </button>
    </footer>
  );
};

export default Footer;
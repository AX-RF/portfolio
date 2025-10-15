import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>

        <div className="hidden lg:block absolute left-10 top-1/4 animate-float z-0">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-neon-cyan to-neon-blue p-1 opacity-40">
            <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden">
              <img
                src="src/assets/images/asme.png"
                alt="Floating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute right-10 top-1/3 animate-float z-0" style={{ animationDelay: '1s' }}>
          <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-neon-pink to-neon-purple p-1 opacity-40">
            <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden">
              <img
                src="src/assets/images/me1.png"
                alt="Floating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute left-20 bottom-1/4 animate-float z-0" style={{ animationDelay: '2s' }}>
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-neon-green to-neon-cyan p-1 opacity-40">
            <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden">
              <img
                src="src/assets/images/meLight.jpg"
                alt="Floating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute right-16 bottom-[10%] animate-float z-0" style={{ animationDelay: '1.5s' }}>
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-neon-blue to-neon-cyan p-1 opacity-40">
            <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden">
              <img
                src="src/assets/images/meh.jpg"
                alt="Floating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>




      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-0">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mt-20 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-pink p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="src/assets/images/me.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-5xl font-bold mt-4">
            <span className=" text-neon-blue">Elallaoui Faysal</span>
          </h1>
          <h2 className="text-5xl md:text-2xl font-bold  mt-2">
            <span className="text-neon-cyan text-glow">Mobile App </span>
            <span className="text-white">Developer</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto mt-4">
            Passionate trainee crafting beautiful mobile experiences.
          </p>

          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://github.com/AX-RF"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-gray-900 transition-all duration-300 border-glow"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/faysal-elallaoui"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-gray-900 transition-all duration-300 border-glow"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=faysalelallaoui0@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-gray-900 transition-all duration-300 border-glow"
            >
              <Mail size={24} />
            </a>


          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-10 mt-6 sm:mt-8">
                <a
                  download
                  href="src\assets\Faysal_Elalaoui_Developer_App.pdf"
                  className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 lg:gap-5 px-6 sm:px-3 lg:px-8 py-3 bg-gradient-to-r from-neon-cyan to-neon-blue text-gray-900 font-bold rounded-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  <span className="relative z-10">Download CV</span>
                </a>

                <a
                  href="#about"
                  className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 lg:gap-5 px-6 sm:px-6 lg:px-8 py-3 bg-gray-800/80 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-neon-pink hover:bg-gray-800 hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <svg className="w-5 h-5 relative z-10 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="relative z-10">Explore More</span>
                </a>
              </div>




          <div className="mt-20 animate-bounce">
            <a href="#skills" className="text-neon-cyan">
              <ArrowDown size={32} className="mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

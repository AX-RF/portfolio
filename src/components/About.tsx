import { Code2, Heart, Rocket, Target } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-pink rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-cyan text-glow">About Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my journey and passion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-pink rounded-3xl blur-xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-2 border border-neon-cyan/30">
                <img
                  src="/images/Best.jpg"
                  alt="Profile"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
                        
              <div className="absolute z-20 -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-neon-pink to-neon-purple rounded-full opacity-60 blur-2xl animate-float"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-full opacity-60 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>


            <div className=" bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-pink rounded-3xl blur-xl opacity-50 animate-pulse"></div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-10 mt-6 px-4">
  <a
    href="/Faysal_Elalaoui_Developer_App.pdf"
    download
    className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 lg:gap-5 px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 bg-gradient-to-r from-neon-cyan to-neon-blue text-gray-900 text-sm sm:text-base font-bold rounded-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105 transition-all duration-300 overflow-hidden"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
    <span className="relative z-10">Download CV</span>
  </a>

<a
    href="/Faysal_Elalaoui_Developer_App.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 lg:gap-5 px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 bg-gray-800/80 backdrop-blur-sm text-white text-sm sm:text-base font-bold rounded-xl border-2 border-neon-pink hover:bg-gray-800 hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:scale-105 transition-all duration-300 overflow-hidden"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
    <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
    <span className="relative z-10">View CV</span>
  </a>
</div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-neon-cyan/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hello, I'm a <span className="text-neon-cyan">Junior Mobile Apps Developer</span>
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">I'm currently a trainee in mobile app development at 
                   <a href="https://cmc.ac.ma/fr/cmc-rabat-sale-kenitra" className='font-bold text-neon-blue'> the City of Trades and Skills (CMC)</a>, passionate about creating beautiful and functional applications that make a 
                   difference in people's lives. My journey in tech started with a curiosity about how apps work,
                    and it has evolved into a full-fledged passion for mobile development.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I specialize in building cross-platform mobile applications using modern
                  technologies like React Native and Flutter. Every day is an opportunity to
                  learn something new and push the boundaries of what's possible.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-neon-blue/20 card-glow">
                  <div className="flex items-center gap-3 mb-2">
                    <Code2 className="text-neon-cyan" size={24} />
                    <h4 className="font-bold text-white">Clean Code</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Writing maintainable and efficient code
                  </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-neon-pink/20 card-glow">
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="text-neon-pink" size={24} />
                    <h4 className="font-bold text-white">Passion</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Love for creating amazing experiences
                  </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-neon-green/20 card-glow">
                  <div className="flex items-center gap-3 mb-2">
                    <Rocket className="text-neon-green" size={24} />
                    <h4 className="font-bold text-white">Innovation</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Always exploring new technologies
                  </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-neon-blue/20 card-glow">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="text-neon-blue" size={24} />
                    <h4 className="font-bold text-white">Goal-Driven</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Focused on continuous improvement
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-neon-cyan/10 to-neon-blue/10 rounded-2xl p-6 border border-neon-cyan/30">
                <p className="text-white text-lg font-semibold mb-2">
                  "The only way to do great work is to love what you do."
                </p>
                <p className="text-gray-400 text-sm">- Steve Jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

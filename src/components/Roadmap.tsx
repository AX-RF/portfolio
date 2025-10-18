import { CheckCircle2, Circle, Target } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const Roadmap = () => {
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

  const roadmapItems = [
    {
      year: '2023',
      title: 'Started Learning',
      description: 'Began my journey in mobile development, learning fundamentals of programming and app design.',
      status: 'completed',
      color: 'neon-green',
    },
    {
      year: '2024 Q1',
      title: 'First Website',
      description: 'Built my first complete website after learning and practicing multiple web technologies. This project was the result of many smaller projects and continuous learning in HTML, CSS, JavaScript, and responsive design.',
      status: 'completed',
      color: 'neon-cyan',
    },
    {
      year: '2024 Q2',
      title: 'Training Program',
      description: 'Joined intensive mobile app development training program, mastering advanced concepts.',
      status: 'completed',
      color: 'neon-blue',
    },
    {
      year: '2024 Q3/Q4',
      title: 'Junior Developer',
      description: 'Seeking opportunities to join a professional team and contribute to real-world projects.',
      status: 'upcoming',
      color: 'neon-purple',
    },
    {
      year: '2025',
      title: 'Portfolio Projects',
      description: 'Creating diverse projects showcasing various skills and technologies.',
      status: 'upcoming',
      color: 'neon-pink',
    },
    {
      year: '2025',
      title: 'Full-Stack Mobile Developer',
      description: 'Expanding skills to include backend development and becoming a complete mobile solutions developer.',
      status: 'current',
      color: 'neon-cyan',
    },
  ];

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-20 w-72 h-72 bg-neon-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-20 w-72 h-72 bg-neon-blue rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-pink text-glow">My Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From beginner to developer - tracking my progress and future goals
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-cyan via-neon-pink to-neon-purple hidden md:block"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : index % 2 === 0
                    ? 'opacity-0 -translate-x-10'
                    : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="md:w-1/2"></div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                    <div className={`w-12 h-12 rounded-full bg-gray-900 border-4 border-${item.color} flex items-center justify-center`}>
                      {item.status === 'completed' ? (
                        <CheckCircle2 className={`text-${item.color}`} size={24} />
                      ) : item.status === 'current' ? (
                        <Target className={`text-${item.color} animate-pulse`} size={24} />
                      ) : (
                        <Circle className={`text-${item.color}`} size={24} />
                      )}
                    </div>
                  </div>

                  <div className="md:w-1/2 w-full">
                    <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-${item.color}/30 card-glow`}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-${item.color} font-bold text-lg`}>
                          {item.year}
                        </span>
                        {item.status === 'current' && (
                          <span className="px-3 py-1 text-xs rounded-full bg-neon-cyan/20 text-neon-cyan border border-neon-cyan animate-pulse">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-neon-cyan/30">
            <h3 className="text-2xl font-bold mb-4 text-neon-cyan">
              The Journey Continues
            </h3>
            <p className="text-gray-400 max-w-2xl">
              Every day is a new opportunity to learn, grow, and build something amazing.
              I'm committed to continuous improvement and staying current with the latest technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

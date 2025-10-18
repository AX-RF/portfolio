import { Smartphone, Code, Palette, Database, GitBranch, Zap, X } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface Technology {
  name: string;
  logo: string;
  description: string;
}

interface Skill {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
  detailedDescription: string;
  technologies: Technology[];
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);
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

  useEffect(() => {
    if (selectedSkill) {
      const style = document.createElement('style');
      style.textContent = `
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `;
      document.head.appendChild(style);
      return () => {
        if (style && document.head.contains(style)) {
          document.head.removeChild(style);
        }
      };
    }
  }, [selectedSkill]);

  const skills: Skill[] = [
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Development',
      description: 'Kotlin, Android, Flutter',
      color: 'cyan',
      detailedDescription: 'Experienced in building native Android applications using Kotlin and cross-platform apps with Flutter. Proficient in Android SDK, Material Design, and modern Android architecture patterns like MVVM and Clean Architecture. Skilled in creating responsive, user-friendly mobile interfaces and implementing complex features.',
      technologies: [
        { 
          name: 'Kotlin', 
          logo: 'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg',
          description: 'A modern, concise, and safe programming language for Android development. Kotlin is 100% interoperable with Java and offers features like null safety, extension functions, and coroutines for asynchronous programming.'
        },
        { 
          name: 'Android', 
          logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
          description: 'The world\'s most popular mobile operating system. Android provides a rich application framework that allows you to build innovative apps and games for mobile devices in a Java or Kotlin language environment.'
        },
        { 
          name: 'Flutter', 
          logo: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg',
          description: 'Google\'s UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. Flutter uses Dart language and offers fast development with hot reload.'
        },
        { 
          name: 'Android Studio', 
          logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Android_Studio_Icon_3.6.svg',
          description: 'The official IDE for Android development. It provides the fastest tools for building apps on every type of Android device with intelligent code editing, debugging, and performance tooling.'
        },
        { 
          name: 'Jetpack Compose', 
          logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jetpackcompose/jetpackcompose-original.svg',
          description: 'Android\'s modern toolkit for building native UI. It simplifies and accelerates UI development with less code, powerful tools, and intuitive Kotlin APIs.'
        },
        { 
          name: 'Material Design', 
          logo: 'https://www.vectorlogo.zone/logos/google/google-icon.svg',
          description: 'A design system created by Google to help teams build high-quality digital experiences. It provides guidelines for visual, motion, and interaction design across platforms and devices.'
        },
      ]
    },
    {
      icon: <Code size={40} />,
      title: 'Programming',
      description: 'JavaScript, PHP, Kotlin, Python, C, MySQL, Java',
      color: 'blue',
      detailedDescription: 'Versatile programmer with expertise across multiple languages including Java for enterprise applications. Strong foundation in object-oriented programming, functional programming, and algorithm design. Experience in building scalable applications and solving complex technical challenges.',
      technologies: [
        { 
          name: 'JavaScript', 
          logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
          description: 'A versatile programming language that is the core technology of the web. It enables interactive web pages and is an essential part of web applications, with frameworks like React, Vue, and Node.js.'
        },
        { 
          name: 'PHP', 
          logo: 'https://www.vectorlogo.zone/logos/php/php-icon.svg',
          description: 'A popular general-purpose scripting language especially suited for web development. PHP powers major websites and is known for its simplicity, speed, and flexibility in building dynamic web applications.'
        },
        { 
          name: 'Kotlin', 
          logo: 'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg',
          description: 'A modern, concise, and safe programming language for Android development. Kotlin is 100% interoperable with Java and offers features like null safety, extension functions, and coroutines.'
        },
        { 
          name: 'Python', 
          logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg',
          description: 'A high-level, interpreted programming language known for its simplicity and readability. Python is widely used in web development, data science, AI, automation, and scientific computing.'
        },
        { 
          name: 'Java', 
          logo: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
          description: 'A class-based, object-oriented programming language designed to have few implementation dependencies. Java is widely used for building enterprise-scale applications, Android apps, and server-side applications.'
        },
        { 
          name: 'C', 
          logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
          description: 'A powerful general-purpose programming language that is widely used for system programming, embedded systems, and performance-critical applications. C provides low-level memory access and is known for its efficiency and control.'
        },
        { 
          name: 'MySQL', 
          logo: 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg',
          description: 'The world\'s most popular open-source relational database management system. MySQL is known for its reliability, ease of use, and is used by major web applications worldwide.'
        },
      ]
    },
    // UI/UX Design - Focus on design tools and principles
{
  icon: <Palette size={40} />,
  title: 'UI/UX Design',
  description: 'Figma, Canva, Prototyping',
  color: 'pink',
  detailedDescription: 'Passionate about creating intuitive and visually appealing user interfaces. Skilled in wireframing, prototyping, and designing user experiences that delight users. Strong understanding of design principles, color theory, typography, and accessibility standards. Experienced in creating design systems and maintaining brand consistency.',
  technologies: [
    { 
      name: 'Figma', 
      logo: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
      description: 'A collaborative interface design tool for creating user interfaces, prototypes, and design systems. Figma is web-based and enables real-time collaboration between designers and developers.'
    },
    { 
      name: 'Canva', 
      logo: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg',
      description: 'An easy-to-use graphic design platform for creating social media graphics, presentations, posters, and other visual content. Canva offers thousands of templates and design elements.'
    },
  ]
},

// Front-end Development - Focus on coding and implementation
{
  icon: <Code size={40} />, // You'll need to import Code from lucide-react
  title: 'Front-end Development',
  description: 'HTML, CSS, JavaScript, React, Bootstrap',
  color: 'blue', // or any color that fits your design
  detailedDescription: 'Experienced in building responsive, performant, and accessible web applications. Proficient in modern front-end frameworks and libraries, with a focus on clean code, component architecture, and best practices. Skilled in translating designs into pixel-perfect, interactive user interfaces.',
  technologies: [
    { 
      name: 'HTML5', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
      description: 'The standard markup language for creating web pages. HTML5 introduces semantic elements, multimedia support, and APIs for building modern, feature-rich web applications.'
    },
    { 
      name: 'CSS3', 
      logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
      description: 'The latest evolution of CSS, used for styling web pages. CSS3 introduces powerful features like animations, transitions, flexbox, grid layouts, and responsive design capabilities.'
    },
    { 
      name: 'Bootstrap', 
      logo: 'https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg',
      description: 'The world\'s most popular front-end framework for building responsive, mobile-first websites. Bootstrap provides pre-built components, grid system, and utilities for rapid development.'
    },
    { 
      name: 'React', 
      logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
      description: 'A JavaScript library for building user interfaces. React allows developers to create reusable UI components and manage application state efficiently with a virtual DOM for optimal performance.'
    },
  ]
},
    {
      icon: <Database size={40} />,
      title: 'Backend Development',
      description: 'MySQL, SQLite, Firebase, Supabase, Laravel',
      color: 'green',
      detailedDescription: 'Experienced in designing and implementing robust backend systems using Laravel and other modern frameworks. Proficient in database design, optimization, and management. Skilled in creating RESTful APIs and integrating third-party services for seamless data flow.',
      technologies: [
        { 
          name: 'MySQL', 
          logo: 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg',
          description: 'An open-source relational database management system based on SQL. MySQL is reliable, scalable, and widely used for web applications, from small projects to large-scale enterprise systems.'
        },
        { 
          name: 'SQLite', 
          logo: 'https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg',
          description: 'A lightweight, serverless, self-contained SQL database engine. SQLite is embedded in mobile apps and is the most widely deployed database in the world, perfect for local data storage.'
        },
        { 
          name: 'Firebase', 
          logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
          description: 'Google\'s platform for building mobile and web applications. Firebase provides real-time databases, authentication, hosting, cloud functions, and analytics with seamless integration.'
        },
        { 
          name: 'Supabase', 
          logo: 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg',
          description: 'An open-source Firebase alternative. Supabase provides PostgreSQL database, authentication, real-time subscriptions, storage, and edge functions with a developer-friendly API.'
        },
        { 
          name: 'Laravel', 
          logo: 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg',
          description: 'A PHP web application framework with expressive, elegant syntax. Laravel provides tools for routing, authentication, sessions, caching, and database migrations, making web development a delightful experience.'
        },
        { 
          name: 'PostgreSQL', 
          logo: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg',
          description: 'A powerful, open-source object-relational database system. PostgreSQL is known for its reliability, feature robustness, and performance in handling complex queries and large datasets.'
        },
      ]
    },
    {
      icon: <GitBranch size={40} />,
      title: 'Version Control',
      description: 'Git, GitHub, Linux, VS Code',
      color: 'purple',
      detailedDescription: 'Proficient in version control systems and collaborative development workflows using Linux environments and VS Code. Experienced in managing repositories, handling merge conflicts, and following best practices for code collaboration. Familiar with CI/CD pipelines and code review processes.',
      technologies: [
        { 
          name: 'Git', 
          logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
          description: 'A distributed version control system for tracking changes in source code. Git enables multiple developers to work together, manage branches, and maintain a complete history of all changes.'
        },
        { 
          name: 'GitHub', 
          logo: 'https://www.vectorlogo.zone/logos/github/github-icon.svg',
          description: 'The world\'s largest code hosting platform for version control and collaboration. GitHub enables developers to work together on projects, review code, manage issues, and deploy applications.'
        },
        { 
          name: 'Linux', 
          logo: 'https://www.vectorlogo.zone/logos/linux/linux-icon.svg',
          description: 'A family of open-source Unix-like operating systems. Linux is widely used in servers, development environments, and embedded systems, known for its stability, security, and flexibility.'
        },
        { 
          name: 'VS Code', 
          logo: 'https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg',
          description: 'A lightweight but powerful source code editor from Microsoft. VS Code offers built-in Git integration, debugging support, syntax highlighting, intelligent code completion, and extensive extensions.'
        },
        { 
          name: 'GitLab', 
          logo: 'https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg',
          description: 'A complete DevOps platform delivered as a single application. GitLab provides Git repository management, CI/CD, issue tracking, and more in one integrated interface.'
        },
        { 
          name: 'Bitbucket', 
          logo: 'https://www.vectorlogo.zone/logos/bitbucket/bitbucket-icon.svg',
          description: 'Atlassian\'s Git-based code hosting and collaboration tool. Bitbucket integrates seamlessly with Jira and other Atlassian products for comprehensive project management.'
        },
      ]
    },
    {
      icon: <Zap size={40} />,
      title: 'Performance',
      description: 'Debugging, Testing, Arduino, Robotics, Cyber Security',
      color: 'cyan',
      detailedDescription: 'Focused on delivering high-performance applications through code optimization, debugging, and security best practices. Experienced in embedded systems with Arduino, robotics projects, and implementing cybersecurity measures. Skilled in comprehensive testing strategies to ensure code quality and reliability.',
      technologies: [
        { 
          name: 'Debugging', 
          logo: 'https://www.vectorlogo.zone/logos/google_chrome/google_chrome-icon.svg',
          description: 'The process of finding and resolving bugs or defects in software. Professional debugging involves using tools like Chrome DevTools, breakpoints, console logging, and systematic problem-solving approaches.'
        },
        { 
          name: 'Jest', 
          logo: 'https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg',
          description: 'A delightful JavaScript testing framework with a focus on simplicity. Jest works with projects using Babel, TypeScript, Node, React, Angular, Vue and more, providing zero-config testing.'
        },
        { 
          name: 'Arduino', 
          logo: 'https://www.vectorlogo.zone/logos/arduino/arduino-icon.svg',
          description: 'An open-source electronics platform for creating interactive projects. Arduino provides easy-to-use hardware and software for building digital devices and interactive objects that can sense and control physical world.'
        },
        { 
          name: 'Robotics', 
          logo: 'https://cdn-icons-png.flaticon.com/512/2530/2530781.png',
          description: 'The interdisciplinary field involving design, construction, and operation of robots. Combines mechanical engineering, electrical engineering, and computer science to create autonomous systems.'
        },
        { 
          name: 'Cyber Security', 
          logo: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg',
          description: 'The practice of protecting systems, networks, and programs from digital attacks. Involves implementing security measures, encryption, authentication, and monitoring to prevent unauthorized access and data breaches.'
        },
        { 
          name: 'Webpack', 
          logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-original.svg',
          description: 'A static module bundler for modern JavaScript applications. Webpack bundles your assets, scripts, images, and styles, optimizing them for production with features like code splitting.'
        },
      ]
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; text: string; bg: string; glow: string }> = {
      cyan: {
        border: 'border-cyan-400',
        text: 'text-cyan-400',
        bg: 'bg-cyan-400/10',
        glow: 'shadow-cyan-400/50'
      },
      blue: {
        border: 'border-blue-400',
        text: 'text-blue-400',
        bg: 'bg-blue-400/10',
        glow: 'shadow-blue-400/50'
      },
      pink: {
        border: 'border-pink-400',
        text: 'text-pink-400',
        bg: 'bg-pink-400/10',
        glow: 'shadow-pink-400/50'
      },
      green: {
        border: 'border-green-400',
        text: 'text-green-400',
        bg: 'bg-green-400/10',
        glow: 'shadow-green-400/50'
      },
      purple: {
        border: 'border-purple-400',
        text: 'text-purple-400',
        bg: 'bg-purple-400/10',
        glow: 'shadow-purple-400/50'
      }
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400">My Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Constantly learning and growing in the world of mobile development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const colorClasses = getColorClasses(skill.color);
            return (
              <div
                key={index}
                onClick={() => setSelectedSkill(skill)}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border ${colorClasses.border} hover:shadow-lg ${colorClasses.glow} transition-all duration-700 cursor-pointer hover:scale-105 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`${colorClasses.text} mb-4`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {skill.title}
                </h3>
                <p className="text-gray-400">{skill.description}</p>
                <p className="text-sm text-gray-500 mt-4">Click for more details</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-400">
            Technical Proficiency
          </h3>
          <div className="space-y-6">
            {[
              { name: 'Mobile App Development', level: 85 },
              { name: 'UI/UX Design', level: 60 },
              { name: 'Backend Integration', level: 70 },
              { name: 'Problem Solving', level: 90 },
              { name: 'Web Platform Development', level: 95 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-medium">{item.name}</span>
                  <span className="text-cyan-400">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-all duration-1000 ${
                      isVisible ? 'w-full' : 'w-0'
                    }`}
                    style={{
                      width: isVisible ? `${item.level}%` : '0%',
                      transitionDelay: `${(index + 1) * 200}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedSkill && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedSkill(null)}
        >
          <div 
            className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-cyan-400/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className={getColorClasses(selectedSkill.color).text}>
                  {selectedSkill.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{selectedSkill.title}</h3>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h4 className={`text-lg font-semibold ${getColorClasses(selectedSkill.color).text} mb-3`}>Overview</h4>
                <p className="text-gray-300 leading-relaxed">
                  {selectedSkill.detailedDescription}
                </p>
              </div>

              <div>
                <h4 className={`text-lg font-semibold ${getColorClasses(selectedSkill.color).text} mb-3`}>Technologies & Tools</h4>
                <div className="relative overflow-hidden py-4 bg-gray-900/50 rounded-xl">
                  <div className="flex gap-8 animate-scroll items-center">
                    {[...selectedSkill.technologies, ...selectedSkill.technologies].map((tech, idx) => (
                      <div
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTech(tech);
                        }}
                        className="flex-shrink-0 hover:scale-110 transition-transform duration-300 cursor-pointer"
                        title="Click for more info"
                      >
                        <img 
                          src={tech.logo} 
                          alt={tech.name}
                          className="w-16 h-16 object-contain filter drop-shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedTech && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          onClick={() => setSelectedTech(null)}
        >
          <div 
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl max-w-md w-full border border-cyan-400/30 shadow-2xl transform animate-scale"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img 
                    src={selectedTech.logo} 
                    alt={selectedTech.name}
                    className="w-16 h-16 object-contain"
                  />
                  <h3 className="text-2xl font-bold text-white">{selectedTech.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedTech(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-300 leading-relaxed text-sm">
                  {selectedTech.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;




const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error' | null; message: string }>({ 
    type: null, 
    message: '' 
  });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAlert({ type: null, message: '' });

    try {
      await emailjs.send(
        serviceID,       // Replace with your Service ID from EmailJS
        templateID,        // Replace with your Template ID from EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Faysal',
        },
        publicKey      // Replace with your Public Key from EmailJS
      );

      // Success alert
      setAlert({ 
        type: 'success', 
        message: 'Message sent successfully! I will get back to you soon.' 
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });

      // Auto-hide alert after 5 seconds
      setTimeout(() => {
        setAlert({ type: null, message: '' });
      }, 5000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      // Error alert
      setAlert({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or contact me directly via email.' 
      });

      // Auto-hide alert after 5 seconds
      setTimeout(() => {
        setAlert({ type: null, message: '' });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gray-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-neon-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-neon-pink rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-cyan text-glow">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-neon-cyan/20">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-neon-cyan/10 text-neon-cyan">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a
                    href="https://mail.google.com/mail/?view=cm&to=faysalelallaoui0@gmail.com" 
                    target="_blank"
                    className="text-gray-400 hover:text-neon-cyan transition-colors"
                    >
                      faysalelallaoui0@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-neon-blue/10 text-neon-blue">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <a
                      href="tel:+212633884041"
                      className="text-gray-400 hover:text-neon-blue transition-colors"
                    >
                      +212 633-884-041
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-neon-pink/10 text-neon-pink">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-400">Rabat, Morocco</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8 pt-8 border-t border-gray-700">
                <h4 className="font-semibold text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/AX-RF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-gray-900 transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/faysal-elallaoui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-gray-900 transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://x.com/FaysalE9584"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-gray-900 transition-all duration-300"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-3 mt-6">
                <a 
                  href="https://mail.google.com/mail/?view=cm&to=faysalelallaoui0@gmail.com" 
                  target="_blank" 
                  className="flex items-center gap-4 rounded-xl p-4 hover:bg-green-200/10 transition-colors cursor-pointer group"
                >
                  <img
                    src="/images/asme.png"
                    alt="Developer"
                    className="w-16 h-16 rounded-full border-2 border-green-400 group-hover:border-green-400 transition-colors"
                    onError={(e) => {
                      e.currentTarget.src = 'https://ui-avatars.com/api/?name=AX+RF&background=22d3ee&color=fff&size=128';
                    }}
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-400 text-sm">Available for new projects</span>
                    </div>
                    <p className="text-white font-semibold text-lg group-hover:text-green-400 transition-colors">ELALLAOUI FAYSAL</p>
                    <p className="text-gray-400 text-sm">
                      <span>Web Developer | Mobile App Developer</span> 
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Alert Message */}
            {alert.type && (
              <div
                className={`mb-6 p-4 rounded-lg border-l-4 flex items-start gap-3 ${
                  alert.type === 'success'
                    ? 'bg-green-500/10 border-green-500 text-green-400'
                    : 'bg-red-500/10 border-red-500 text-red-400'
                }`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  {alert.type === 'success' ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium">
                    {alert.type === 'success' ? 'Success!' : 'Error!'}
                  </p>
                  <p className="text-sm mt-1 opacity-90">{alert.message}</p>
                </div>
                <button
                  onClick={() => setAlert({ type: null, message: '' })}
                  className="flex-shrink-0 text-current opacity-70 hover:opacity-100 transition-opacity"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-neon-blue/20 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="Karim Ali"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="karim@ali.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-gray-900 font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
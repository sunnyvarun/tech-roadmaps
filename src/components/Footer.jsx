import { useState } from 'react';
import { Github, Twitter, Linkedin, Mail, ChevronUp, MapPin, Phone, ExternalLink, Send, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);
  
  // Social links with hover labels
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com', label: 'GitHub' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:contact@techroad.com', label: 'Email' },
  ];

  // Quick links with nested categories for better organization
  const quickLinks = [
    { 
      title: 'Company',
      links: [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Services', url: '/services' },
        { name: 'Careers', url: '/careers' },
        { name: 'Contact', url: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', url: '/docs' },
        { name: 'Blog', url: '/blog' },
        { name: 'Community', url: '/community' },
        { name: 'Support', url: '/support' },
        { name: 'Help Center', url: '/help' }
      ]
    },
    {
      title: 'Categories',
      links: [
        { name: 'Web Development', url: '/technologies?category=web' },
        { name: 'Mobile Development', url: '/technologies?category=mobile' },
        { name: 'Data Structures', url: '/technologies?category=dsa' },
        { name: 'Programming Languages', url: '/technologies?category=lang' },
        { name: 'AI & Machine Learning', url: '/technologies?category=ai' }
      ]
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Simulating scroll detection (would use useEffect with event listener in real implementation)
  useState(() => {
    setScrollToTopVisible(true); // For demo purposes
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden">
        <svg className="absolute bottom-0 w-full text-gray-900 fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
      
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Company info section */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">TR</span>
              </div>
              <h2 className="text-2xl font-bold">TechRoad</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Your ultimate guide to mastering technology through structured roadmaps and expert-curated learning paths.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <MapPin size={16} className="text-indigo-400 mr-2" />
                <span className="text-gray-300">123 Tech Street, San Francisco, CA 94107</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-indigo-400 mr-2" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-indigo-400 mr-2" />
                <a href="mailto:contact@techroad.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@techroad.com
                </a>
              </div>
            </div>
            
            {/* Newsletter subscription */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Subscribe to our newsletter</h3>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-grow bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-md transition-colors"
                >
                  {subscribed ? <Check size={20} /> : <Send size={20} />}
                </button>
              </form>
              {subscribed && (
                <p className="text-green-400 text-sm mt-2">Thanks for subscribing!</p>
              )}
            </div>
          </div>
          
          {/* Quick links section */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {quickLinks.map((category, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4 text-white">{category.title}</h3>
                <ul className="space-y-2">
                  {category.links.map((link, idx) => (
                    <li key={idx}>
                      <a 
                        href={link.url} 
                        className="text-gray-400 hover:text-white transition-colors flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Connect section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 p-3 rounded-lg text-gray-400 hover:text-white transition-all hover:scale-105 group"
                >
                  <div className="flex flex-col items-center">
                    {link.icon}
                    <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">{link.label}</span>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-3">Our Certifications</h4>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-300">ISO</span>
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-300">SOC2</span>
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-300">GDPR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section with copyright and additional links */}
        <div className="mt-12 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-gray-400 text-sm flex flex-wrap gap-x-6 gap-y-2">
            <span>&copy; {new Date().getFullYear()} TechRoad. All rights reserved.</span>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
          
          <div className="flex justify-start md:justify-end items-center space-x-4 text-xs text-gray-500">
            <span>Made with ❤️ by TechRoad Team</span>
            <a href="/accessibility" className="hover:text-gray-300 transition-colors">Accessibility</a>
            <div className="flex items-center">
              <span className="mr-1">English</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      {scrollToTopVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
};

// For demo purposes - showing a complete page with the enhanced footer
export default function FooterShowcase() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple header for demo
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">TR</span>
            </div>
            <span className="font-bold text-lg text-gray-900">TechRoad</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Roadmaps</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Tutorials</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Blog</a>
          </nav>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Sign Up
          </button>
        </div>
      </header> */}
      
      {/* Main content area */}
      <main className="flex-grow bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900  text-center"></h1>
          
        </div>
      </main>
      
      {/* Our enhanced footer */}
      <Footer />
    </div>
  );
}

function Check(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
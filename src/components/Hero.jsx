/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Play, ChevronDown, Star, Search, Code, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Hero = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function
  
  const technologies = [
    "React", "Node.js", "Python", "AWS", "Data Science", "AI"
  ];

  // Auto-rotate through technologies with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech(prev => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [technologies.length]);

  const stats = [
    { value: '150+', label: 'Roadmaps' },
    { value: '2.5M+', label: 'Users' },
    { value: '98%', label: 'Success Rate' }
  ];

  const triggerAnimation = () => {
    if (!animationTriggered) {
      setAnimationTriggered(true);
      setTimeout(() => setAnimationTriggered(false), 1000);
    }
  };

  // Function to handle navigation to TechRoadmap page
  const handleExploreRoadmaps = () => {
    navigate('/Technologies'); // Navigate to the TechRoadmap route
  };

  // Animation variants
  const techWordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-indigo-900 text-white overflow-hidden ">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -10, 0],
            y: [0, 10, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 10, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          animation: 'pan 60s linear infinite'
        }}></div>
      </div>

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content column */}
          <div className="space-y-6">
            {/* Trending badge with enhanced animation */}
            <motion.div
              className="inline-flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm cursor-pointer"
              onMouseEnter={triggerAnimation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Star size={16} className={`mr-2 text-yellow-400 ${animationTriggered ? 'animate-ping' : ''}`} />
              <span>Most trusted technology roadmaps</span>
            </motion.div>
            
            {/* Main heading with enhanced animated tech name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Master{' '}
              <motion.span 
                className="tech-word relative inline-block"
                key={currentTech}
                initial="hidden"
                animate="visible"
                variants={techWordVariants}
                transition={{ duration: 0.5 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                  {technologies[currentTech]}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded"></span>
              </motion.span>{' '}
              <br />
              with structured roadmaps
            </h1>
            
            
            {/* Animated feature list */}
            <div className="space-y-3">
              {[
                "Step-by-step learning paths", 
                "Expert-verified resources", 
                "Progress tracking"
              ].map((feature, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-center text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <CheckCircle size={18} className="text-green-400 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Enhanced action buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button 
                className="flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-medium shadow-lg shadow-indigo-700/30 transition-all hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleExploreRoadmaps} // Add onClick handler to navigate
              >
                Explore Roadmaps <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>
            
            {/* Stats row with animation */}
            <motion.div 
              className="flex flex-wrap gap-8 pt-6 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Right feature showcase with enhanced animations */}
          <motion.div 
      className="relative w-[300px] mr-8" /* Added right margin */
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
    >
      {/* Roadmap card previews with enhanced stacked effect */}
      <div className="relative h-72 w-full">
        {/* Base card - fully visible */}
        <motion.div 
          className="absolute top-0 left-0 right-0 w-full h-full bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl overflow-hidden shadow-xl z-20 transform rotate-2"
          whileHover={{ y: -8 }}
        >
          <div className="absolute inset-0 bg-[url('/api/placeholder/800/600')] bg-cover bg-center opacity-20"></div>
          <div className="relative h-full p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-1">
                <Zap size={14} className="text-yellow-400 mr-1 animate-pulse" />
                <span className="text-yellow-400 text-xs font-semibold">POPULAR PATH</span>
              </div>
              <h3 className="text-lg font-bold mb-1">Full Stack Developer</h3>
              <p className="text-gray-200 text-xs mb-2">Master frontend, backend, and everything in between</p>
              <div className="flex flex-wrap gap-1 mb-2">
                {["JavaScript", "React", "Node.js"].map((tech, i) => (
                  <motion.span 
                    key={i} 
                    className="px-1 py-0.5 bg-white/20 rounded-full text-[10px]"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="bg-white/10 rounded-md p-1.5">
                <div className="flex justify-between text-[10px] mb-0.5">
                  <span>Progress</span>
                  <span>42%</span>
                </div>
                <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-white rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '42%' }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                </div>
              </div>
              
              <motion.button 
                className="w-full bg-white text-indigo-700 flex items-center justify-center py-2 rounded-md font-medium hover:bg-gray-100 transition-colors text-s"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Continue Learning
              </motion.button>
            </div>
          </div>
        </motion.div>
        
        {/* Background cards - partially visible - slightly reduced width */}
        <motion.div 
          className="absolute top-3 left-3 right-0 w-full h-full bg-indigo-800 rounded-xl z-10 transform -rotate-3"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-6 left-6 right-0 w-full h-full bg-indigo-900 rounded-xl z-0 transform -rotate-6"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      {/* Floating statistics pill with animation */}
      <motion.div 
        className="absolute -top-5 -right-2 bg-white rounded-md shadow-md px-2 py-1.5 z-30 flex items-center space-x-1.5"
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1, 
          y: [0, -8, 0] /* Added floating animation to the pill */
        }}
        transition={{ 
          delay: 1.2,
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        whileHover={{ y: -3 }}
      >
        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle size={12} className="text-green-600" />
        </div>
        <div>
          <div className="text-gray-800 font-medium text-xs">95% Completion</div>
          <div className="text-gray-500 text-[10px]">For this roadmap</div>
        </div>
      </motion.div>
    </motion.div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={20} />
        </motion.div>
      </div>
      
      {/* Enhanced trusted by companies section */}
      <motion.div 
        className="relative bg-gray-900/80 border-t border-white/10 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-black-400 text-sm mb-8">TRUSTED BY DEVELOPERS FROM</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {["Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix", "Uber"].map((company, index) => (
              <motion.div 
                key={index} 
                className="text-black-400 text-xl font-semibold opacity-70 hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
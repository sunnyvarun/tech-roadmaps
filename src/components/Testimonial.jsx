/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useState } from 'react';

const Testimonial = ({ quote, author, role, avatar, rating = 5 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { 
      scale: 1.02, 
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2 }
    }
  };
  
  const quoteVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.2, duration: 0.3 } }
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={`Testimonial from ${author}`}
    >
      {/* Quote mark decoration */}
      <div className="absolute -top-4 -left-2 text-6xl text-indigo-100 opacity-80" aria-hidden="true">
        "
      </div>
      
      {/* Content container */}
      <div className="relative z-10">
        {/* Quote text */}
        <motion.p 
          className="text-gray-700 text-lg leading-relaxed mb-6"
          variants={quoteVariants}
        >
          "{quote}"
        </motion.p>
        
        {/* Author info with improved layout */}
        <div className="flex items-center mt-8">
          <div className="w-14 h-14 rounded-full overflow-hidden mr-4 ring-2 ring-indigo-100">
            <img 
              src={avatar} 
              alt={author}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-gray-900">{author}</h4>
            <p className="text-indigo-600 text-sm">{role}</p>
            
            {/* Rating stars with better spacing and animation */}
            <div className="flex mt-2 items-center" aria-label={`Rating: ${rating} out of 5 stars`}>
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} mr-1`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  animate={isHovered ? { scale: [1, 1.2, 1], transition: { delay: i * 0.1 } } : {}}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
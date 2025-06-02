
import React, { useState } from 'react';
import { ArrowRight, Star, Clock, BookOpen, UserCheck } from 'lucide-react';

const TechCard = ({ tech, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getLevelColor = (level) => {
    switch(level.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };
  
  const getCategoryIcon = (category) => {
    switch(category.toLowerCase()) {
      case 'frontend': return '🖥️';
      case 'backend': return '⚙️';
      case 'devops': return '🔄';
      case 'mobile': return '📱';
      case 'ai': return '🤖';
      case 'data': return '📊';
      default: return '💻';
    }
  };

  return (
    <div 
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`${tech.name} - ${tech.category} technology`}
    >
      {/* Ribbon for featured courses */}
      {tech.featured && (
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
            <Star className="w-3 h-3 mr-1" />
            Featured
          </div>
        </div>
      )}
      
      {/* Image container with overlay on hover */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={tech.image || "/api/placeholder/400/320"} 
          alt={`${tech.name} illustration`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-50'}`}></div>
        
        {/* Category badge on image */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full text-sm font-medium flex items-center space-x-1">
          <span>{getCategoryIcon(tech.category)}</span>
          <span>{tech.category}</span>
        </div>
      </div>
      
      {/* Content section */}
      <div className="p-5">
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
            {tech.name}
          </h3>
          
          <p className="text-gray-600 text-sm line-clamp-2">
            {tech.description}
          </p>
          
          {/* Stats & metadata */}
          <div className="flex flex-wrap gap-2 pt-2">
            <div className={`px-2 py-1 rounded-md text-xs font-medium ${getLevelColor(tech.level)} flex items-center`}>
              <UserCheck className="w-3 h-3 mr-1" />
              {tech.level}
            </div>
            
            {tech.duration && (
              <div className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {tech.duration}
              </div>
            )}
            
            {tech.lessons && (
              <div className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium flex items-center">
                <BookOpen className="w-3 h-3 mr-1" />
                {tech.lessons} lessons
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Action footer */}
      <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
        <div className="flex justify-between items-center">
          {tech.rating && (
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(tech.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
              <span className="ml-1 text-sm font-medium text-gray-700">{tech.rating.toFixed(1)}</span>
            </div>
          )}
          
          <button 
            onClick={() => onClick(tech)}
            className="flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors text-sm font-medium"
            aria-label={`Learn more about ${tech.name}`}
          >
            Explore
            <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
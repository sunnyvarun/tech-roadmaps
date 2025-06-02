import { useState } from 'react';
import { CheckCircle, Sparkles, ChevronRight } from 'lucide-react';

const Card = ({ icon, title, description, className, tags = [] }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 ${
        isHovered ? 'shadow-xl -translate-y-2' : ''
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start">
        <div className={`p-3 rounded-lg ${isHovered ? 'bg-indigo-100' : 'bg-indigo-50'} text-indigo-600 mb-4 transition-colors duration-300`}>
          {icon}
        </div>
        
        <div className={`transform transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <ChevronRight className="text-indigo-500" size={20} />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <div className={`flex items-center mt-4 text-sm font-medium transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-indigo-600">Learn more</span>
      </div>
    </div>
  );
};

export default Card;
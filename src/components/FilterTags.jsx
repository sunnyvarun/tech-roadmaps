import { useState, useEffect } from 'react';
import { X, Filter, Check, ChevronDown } from 'lucide-react';

const FilterTags = ({ 
  tags, 
  activeTag, 
  onTagClick,
  allowMultiple = false,
  maxVisibleTags = 5,
  showCounts = true,
  onClearFilters = () => {}
}) => {
  const [selectedTags, setSelectedTags] = useState(allowMultiple ? [activeTag].filter(Boolean) : activeTag ? [activeTag] : []);
  const [showAllTags, setShowAllTags] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  
  useEffect(() => {
    // Sync with parent component if activeTag changes externally
    if (!allowMultiple && activeTag !== null) {
      setSelectedTags(activeTag ? [activeTag] : []);
    }
  }, [activeTag, allowMultiple]);
  
  const handleTagClick = (tagId) => {
    if (allowMultiple) {
      setSelectedTags(prev => 
        prev.includes(tagId) 
          ? prev.filter(id => id !== tagId) 
          : [...prev, tagId]
      );
      
      // Call parent's handler with all selected tags
      const updatedTags = selectedTags.includes(tagId)
        ? selectedTags.filter(id => id !== tagId)
        : [...selectedTags, tagId];
      
      onTagClick(updatedTags);
    } else {
      const newActiveTag = selectedTags[0] === tagId ? null : tagId;
      setSelectedTags(newActiveTag ? [newActiveTag] : []);
      onTagClick(newActiveTag);
    }
  };
  
  const handleClearFilters = () => {
    setSelectedTags([]);
    onClearFilters();
  };
  
  const visibleTags = showAllTags ? tags : tags.slice(0, maxVisibleTags);
  const remainingTagsCount = tags.length - maxVisibleTags;
  
  const sortedTags = [...visibleTags].sort((a, b) => {
    // Selected tags come first
    const aSelected = selectedTags.includes(a.id);
    const bSelected = selectedTags.includes(b.id);
    
    if (aSelected && !bSelected) return -1;
    if (!aSelected && bSelected) return 1;
    
    // Then sort by count if showing counts
    if (showCounts) {
      return (b.count || 0) - (a.count || 0);
    }
    
    return 0;
  });

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-800">Filters</h3>
        
        <div className="flex gap-2">
          {selectedTags.length > 0 && (
            <button
              onClick={handleClearFilters}
              className="flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              <X size={16} className="mr-1" />
              Clear filters
            </button>
          )}
          
          <button
            onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            <Filter size={18} />
          </button>
        </div>
      </div>
      
      <div className={`
        md:flex flex-wrap gap-2 transition-all duration-300
        ${isFilterMenuOpen ? 'flex flex-col' : 'hidden md:flex'}
      `}>
        {sortedTags.map((tag) => (
          <button
            key={tag.id}
            onClick={() => handleTagClick(tag.id)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              flex items-center justify-center
              ${selectedTags.includes(tag.id) 
                ? 'bg-indigo-600 text-white ring-2 ring-indigo-300' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
              ${isFilterMenuOpen ? 'w-full' : ''}
            `}
          >
            {selectedTags.includes(tag.id) && (
              <Check size={14} className="mr-1" />
            )}
            {tag.name}
            {showCounts && tag.count !== undefined && (
              <span className={`
                ml-2 px-1.5 py-0.5 rounded-full text-xs
                ${selectedTags.includes(tag.id) 
                  ? 'bg-indigo-700 text-white' 
                  : 'bg-gray-200 text-gray-700'
                }
              `}>
                {tag.count}
              </span>
            )}
          </button>
        ))}
        
        {remainingTagsCount > 0 && !showAllTags && (
          <button 
            onClick={() => setShowAllTags(true)}
            className="flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-indigo-600 hover:bg-gray-200"
          >
            +{remainingTagsCount} more
            <ChevronDown size={16} className="ml-1" />
          </button>
        )}
        
        {showAllTags && remainingTagsCount > 0 && (
          <button 
            onClick={() => setShowAllTags(false)}
            className="flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-indigo-600 hover:bg-gray-200"
          >
            Show less
            <ChevronDown size={16} className="ml-1 transform rotate-180" />
          </button>
        )}
      </div>
      
      {selectedTags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 items-center">
          <span className="text-sm text-gray-500">Active filters:</span>
          {selectedTags.map(tagId => {
            const tag = tags.find(t => t.id === tagId);
            return tag ? (
              <div 
                key={tag.id}
                className="flex items-center bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs"
              >
                {tag.name}
                <button 
                  onClick={() => handleTagClick(tag.id)}
                  className="ml-1 p-0.5 hover:bg-indigo-200 rounded-full"
                >
                  <X size={12} />
                </button>
              </div>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
};

// Example usage with full UI showcase
export default function FilterTagsShowcase() {
  const [activeTag, setActiveTag] = useState(null);
  const [activeMultipleTags, setActiveMultipleTags] = useState([]);
  const [view, setView] = useState('single');
  
  const sampleTags = [
    { id: 'design', name: 'Design', count: 24 },
    { id: 'development', name: 'Development', count: 36 },
    { id: 'marketing', name: 'Marketing', count: 18 },
    { id: 'business', name: 'Business', count: 12 },
    { id: 'productivity', name: 'Productivity', count: 9 },
    { id: 'technology', name: 'Technology', count: 42 },
    { id: 'education', name: 'Education', count: 15 },
    { id: 'health', name: 'Health & Wellness', count: 7 },
    { id: 'finance', name: 'Finance', count: 5 },
    { id: 'lifestyle', name: 'Lifestyle', count: 11 },
  ];
  
  // Sample card items for the filtered content
  const items = [
    {
      id: 1,
      title: 'UI Design Principles',
      description: 'Learn the fundamental principles of effective user interface design.',
      tags: ['design', 'education'],
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'React Development',
      description: 'Build interactive web applications with React and modern JavaScript.',
      tags: ['development', 'technology'],
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'Social Media Strategy',
      description: 'Create an effective social media marketing plan for your business.',
      tags: ['marketing', 'business'],
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      title: 'Productivity Tools',
      description: 'Discover tools and techniques to boost your productivity.',
      tags: ['productivity', 'technology'],
      image: '/api/placeholder/300/200'
    }
  ];
  
  // Filter items based on active tag(s)
  const filteredItems = items.filter(item => {
    if (view === 'single') {
      return activeTag === null || item.tags.includes(activeTag);
    } else {
      return activeMultipleTags.length === 0 || activeMultipleTags.some(tag => item.tags.includes(tag));
    }
  });
  
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">Explore Resources</h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Browse our collection of resources by category. Use the filters below to find exactly what you're looking for.
        </p>
        
        <div className="mb-8 flex justify-center gap-4">
          <button 
            onClick={() => setView('single')}
            className={`px-4 py-2 rounded-md ${view === 'single' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
          >
            Single Filter
          </button>
          <button 
            onClick={() => setView('multiple')}
            className={`px-4 py-2 rounded-md ${view === 'multiple' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
          >
            Multiple Filters
          </button>
        </div>
        
        {view === 'single' ? (
          <FilterTags 
            tags={sampleTags} 
            activeTag={activeTag} 
            onTagClick={setActiveTag}
            onClearFilters={() => setActiveTag(null)}
          />
        ) : (
          <FilterTags 
            tags={sampleTags} 
            activeTag={null}
            onTagClick={setActiveMultipleTags}
            allowMultiple={true}
            onClearFilters={() => setActiveMultipleTags([])}
          />
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tagId => {
                    const tag = sampleTags.find(t => t.id === tagId);
                    return tag ? (
                      <span key={tagId} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {tag.name}
                      </span>
                    ) : null;
                  })}
                </div>
                <div className="mt-4">
                  <button className="text-indigo-600 font-medium hover:text-indigo-800">
                    Learn more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No matching resources found</h3>
            <p className="text-gray-600">Try adjusting your filters or browse all resources.</p>
            <button 
              onClick={() => view === 'single' ? setActiveTag(null) : setActiveMultipleTags([])}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              View all resources
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
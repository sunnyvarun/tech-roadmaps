/* eslint-disable no-unused-vars */
import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { Search, X, Filter, BookOpen, Code, ChevronRight, Info, ArrowLeft } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import FilterTags from '../components/FilterTags'
import RoadmapModal from '../components/RoadmapModal'


// Enhanced Tech Card Component with better animations and visuals
const TechCard = ({ tech, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100"
    >
      <div 
        className="h-48 bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${tech.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
          <span className={`
            text-xs font-semibold px-3 py-1 rounded-full inline-block w-fit
            ${tech.level === 'Beginner' ? 'bg-green-500/90 text-white' : 
              tech.level === 'Intermediate' ? 'bg-yellow-500/90 text-white' : 
              'bg-red-500/90 text-white'}
          `}>
            {tech.level}
          </span>
          <h3 className="text-2xl font-bold text-white mt-2">{tech.name}</h3>
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <p className="text-gray-600 mb-4 flex-grow">{tech.description}</p>
        
        <div className="mt-3 flex justify-between items-center">
          <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
            {tech.category === 'web' ? 'Web Development' :
             tech.category === 'mobile' ? 'Mobile Development' :
             tech.category === 'dsa' ? 'Data Structures' :
             tech.category === 'lang' ? 'Programming Languages' :
             tech.category === 'devops' ? 'DevOps' : tech.category}
          </span>
          <button 
            onClick={onClick} 
            className="flex items-center gap-1 text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors"
          >
            View Roadmap <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// Empty State Component
const EmptyState = ({ query, activeTag }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="col-span-full py-16 flex flex-col items-center justify-center text-center"
    >
      <div className="bg-gray-100 p-5 rounded-full mb-4">
        <Info size={32} className="text-gray-400" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">No technologies found</h3>
      <p className="text-gray-600 max-w-md">
        {query ? `No results found for "${query}"` : ''} 
        {query && activeTag !== 'all' ? ' in ' : ''}
        {activeTag !== 'all' ? `the "${activeTag === 'web' ? 'Web Development' : 
                                      activeTag === 'mobile' ? 'Mobile Development' : 
                                      activeTag === 'dsa' ? 'Data Structures' :
                                      activeTag === 'lang' ? 'Programming Languages' :
                                      activeTag === 'devops' ? 'DevOps' : activeTag}" category` : ''}
      </p>
      <div className="mt-6">
        <button className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md font-medium flex items-center gap-2 hover:bg-indigo-200 transition-colors">
          <ArrowLeft size={16} /> Clear filters
        </button>
      </div>
    </motion.div>
  )
}
const levels = [
  { id: 'all', name: 'All Levels' },
  { id: 'beginner', name: 'Beginner' },
  { id: 'intermediate', name: 'Intermediate' },
  { id: 'advanced', name: 'Advanced' }
]

const Technologies = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTech, setSelectedTech] = useState(null)
  const [activeTag, setActiveTag] = useState('all')
  const [isFiltersVisible, setIsFiltersVisible] = useState(true)
  const [view, setView] = useState('grid') // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('name') // 'name', 'level'
  const [filterLevel, setFilterLevel] = useState('all') // 'all', 'Beginner', 'Intermediate', 'Advanced'
  const [isScrolled, setIsScrolled] = useState(false)

  // Memoizing the tags array
  const tags = useMemo(() => [
    { id: 'all', name: 'All', icon: Filter },
    { id: 'web', name: 'Web Development', icon: Code },
    { id: 'mobile', name: 'Mobile Development', icon: BookOpen },
    { id: 'dsa', name: 'Data Structures', icon: Code },
    { id: 'lang', name: 'Programming Languages', icon: Code },
    { id: 'devops', name: 'DevOps', icon: BookOpen }
  ], [])

  

  // Enhanced technology data with consistent images
  const technologies = [
    {
      id: 1,
      name: 'React',
      description: 'A JavaScript library for building user interfaces',
      category: 'web',
      level: 'Intermediate',
      image: 'https://qualitythought.in/wp-content/uploads/2024/08/the_future_of_web_development_reactjs.webp',
      beginnerTopics: [
        'JSX syntax',
        'Components and Props',
        'State and Lifecycle',
        'Handling Events',
        'Conditional Rendering'
      ],
      intermediateTopics: [
        'Hooks (useState, useEffect)',
        'Context API',
        'React Router',
        'Forms and Validation',
        'API Integration'
      ],
      advancedTopics: [
        'Custom Hooks',
        'Performance Optimization',
        'Server-side Rendering',
        'Testing (Jest, React Testing Library)',
        'State Management (Redux, Zustand)'
      ],
      docsUrl: 'https://reactjs.org/docs/getting-started.html',
      courseUrl: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/'
    },
    {
      id: 2,
      name: 'Node.js',
      description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
      category: 'web',
      level: 'Intermediate',
      image: 'https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/8960130/og_image/optimized/smart-node-js-form-validation-2121ed1d3f15a6cd9776415c5db7d86f.png',
      beginnerTopics: [
        'Node.js Fundamentals',
        'Modules and NPM',
        'File System Operations',
        'Basic HTTP Server',
        'Event Loop Basics'
      ],
      intermediateTopics: [
        'Express.js Framework',
        'Middleware Concepts',
        'REST API Development',
        'Authentication (JWT)',
        'Database Integration'
      ],
      advancedTopics: [
        'WebSockets (Socket.io)',
        'Performance Optimization',
        'Microservices Architecture',
        'Deployment and Scaling',
        'Testing (Mocha, Chai)'
      ],
      docsUrl: 'https://nodejs.org/en/docs/',
      courseUrl: 'https://www.udemy.com/course/the-complete-nodejs-developer-course-2/'
    },
    {
      id: 3,
      name: 'Python',
      description: 'High-level, interpreted programming language',
      category: 'lang',
      level: 'Beginner',
      image: 'https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FFeatures_Of_Python_1_f4ccd6d9f7.jpg&w=4500&q=90',
      beginnerTopics: [
        'Syntax Basics',
        'Data Types',
        'Control Flow',
        'Functions',
        'Modules and Packages'
      ],
      intermediateTopics: [
        'Object-Oriented Programming',
        'File Handling',
        'Error Handling',
        'List Comprehensions',
        'Working with APIs'
      ],
      advancedTopics: [
        'Decorators',
        'Generators',
        'Multithreading',
        'Metaprogramming',
        'Python for Data Science'
      ],
      docsUrl: 'https://docs.python.org/3/',
      courseUrl: 'https://www.udemy.com/course/complete-python-bootcamp/'
    },
    {
      id: 4,
      name: 'Flutter',
      description: 'UI toolkit for building natively compiled applications',
      category: 'mobile',
      level: 'Intermediate',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTng2BI0G3-FzK578C6BPbN0b9U99hHGbjU3U9Ywn_jISz2IibwtJgk1yqG_nOFvj47nPU&usqp=CAU',
      beginnerTopics: [
        'Dart Language Basics',
        'Widget Tree',
        'Stateless vs Stateful Widgets',
        'Basic Layouts',
        'Handling User Input'
      ],
      intermediateTopics: [
        'Navigation and Routing',
        'State Management (Provider)',
        'Networking',
        'Forms and Validation',
        'Working with APIs'
      ],
      advancedTopics: [
        'Advanced State Management (Bloc, Riverpod)',
        'Animations',
        'Platform Channels',
        'Testing',
        'CI/CD for Flutter'
      ],
      docsUrl: 'https://flutter.dev/docs',
      courseUrl: 'https://www.udemy.com/course/flutter-bootcamp-with-dart/'
    },
    {
      id: 5,
      name: 'Data Structures',
      description: 'Ways to organize and store data for efficient access',
      category: 'dsa',
      level: 'Beginner',
      image: 'https://staging.herovired.com/wp-content/uploads/2023/03/what-is-data-structure.webp',
      beginnerTopics: [
        'Arrays',
        'Linked Lists',
        'Stacks and Queues',
        'Hash Tables',
        'Basic Time Complexity'
      ],
      intermediateTopics: [
        'Trees (Binary, BST)',
        'Graphs',
        'Recursion',
        'Sorting Algorithms',
        'Searching Algorithms'
      ],
      advancedTopics: [
        'Advanced Graph Algorithms',
        'Dynamic Programming',
        'Tries',
        'Heaps',
        'Advanced Problem Solving'
      ],
      docsUrl: 'https://www.geeksforgeeks.org/data-structures/',
      courseUrl: 'https://www.udemy.com/course/data-structures-and-algorithms-deep-dive-using-java/'
    },
    {
      id: 6,
      name: 'Docker',
      description: 'Platform for developing, shipping, and running applications',
      category: 'devops',
      level: 'Intermediate',
      image: 'https://projectdiscovery.io/_next/image?url=https%3A%2F%2Fprojectdiscovery.ghost.io%2Fcontent%2Fimages%2F2024%2F01%2FBlog---Docker.png&w=828&q=75',
      beginnerTopics: [
        'Container Basics',
        'Docker Installation',
        'Docker Images',
        'Basic Commands',
        'Dockerfile Basics'
      ],
      intermediateTopics: [
        'Docker Compose',
        'Networking',
        'Volumes',
        'Multi-stage Builds',
        'Docker Hub'
      ],
      advancedTopics: [
        'Docker Swarm',
        'Kubernetes Integration',
        'Security Best Practices',
        'CI/CD Pipelines',
        'Monitoring Containers'
      ],
      docsUrl: 'https://docs.docker.com/',
      courseUrl: 'https://www.udemy.com/course/docker-mastery/'
    },
    {
      id: 7,
      name: 'TypeScript',
      description: 'Strongly typed programming language that builds on JavaScript',
      category: 'lang',
      level: 'Intermediate',
      image: 'https://miro.medium.com/v2/resize:fit:1200/1*NLy4TwRMzF1ac0AmHJ780w.png',
      beginnerTopics: [
        'Basic Types',
        'Interfaces',
        'Functions',
        'Classes',
        'Type Assertions'
      ],
      intermediateTopics: [
        'Generics',
        'Enums',
        'Advanced Types',
        'Namespaces',
        'Modules'
      ],
      advancedTopics: [
        'Decorators',
        'Utility Types',
        'Declaration Merging',
        'Mapped Types',
        'Performance Optimization'
      ],
      docsUrl: 'https://www.typescriptlang.org/docs/',
      courseUrl: 'https://www.udemy.com/course/understanding-typescript/'
    },
    {
      id: 8,
      name: 'Kubernetes',
      description: 'Open-source container orchestration platform',
      category: 'devops',
      level: 'Advanced',
      image: 'https://spaceliftio.wpcomstaging.com/wp-content/uploads/2024/05/386.kubernetes-tools.png',
      beginnerTopics: [
        'Kubernetes Architecture',
        'Pods',
        'Services',
        'Deployments',
        'ConfigMaps and Secrets'
      ],
      intermediateTopics: [
        'StatefulSets',
        'Volumes',
        'Ingress',
        'Namespaces',
        'RBAC'
      ],
      advancedTopics: [
        'Custom Resource Definitions',
        'Operators',
        'Scaling and Performance',
        'Multi-cluster Management',
        'Security Best Practices'
      ],
      docsUrl: 'https://kubernetes.io/docs/home/',
      courseUrl: 'https://www.udemy.com/course/certified-kubernetes-administrator/'
    }
  ]

  // Add scroll listener to detect when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const category = searchParams.get('category')
    const query = searchParams.get('q')
    const level = searchParams.get('level')
    const sort = searchParams.get('sort')
    
    if (category && tags.some(tag => tag.id === category)) {
      setActiveTag(category)
    }
    
    if (query) {
      setSearchQuery(query)
    }
    
    if (level && levels.some(l => l.id === level)) {
      setFilterLevel(level)
    }
    
    if (sort === 'name' || sort === 'level') {
      setSortBy(sort)
    }
  }, [searchParams, tags])

  const handleTagClick = (tagId) => {
    setActiveTag(tagId)
    updateSearchParams({ category: tagId === 'all' ? null : tagId })
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    if (e.target.value === '') {
      updateSearchParams({ q: null })
    }
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    updateSearchParams({ q: searchQuery || null })
  }

  const clearSearch = () => {
    setSearchQuery('')
    updateSearchParams({ q: null })
  }

  const updateSearchParams = (updates) => {
    const newParams = {}
    
    // Keep existing params
    for (const [key, value] of searchParams.entries()) {
      newParams[key] = value
    }
    
    // Apply updates
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null) {
        delete newParams[key]
      } else {
        newParams[key] = value
      }
    })
    
    setSearchParams(newParams)
  }

  const handleLevelChange = (level) => {
    setFilterLevel(level)
    updateSearchParams({ level: level === 'all' ? null : level })
  }

  const handleSortChange = (sort) => {
    setSortBy(sort)
    updateSearchParams({ sort: sort === 'name' ? null : sort })
  }

  const resetFilters = () => {
    setSearchQuery('')
    setActiveTag('all')
    setFilterLevel('all')
    setSortBy('name')
    setSearchParams({})
  }

  const filteredTechs = technologies.filter(tech => {
    const matchesSearch = !searchQuery || 
                          tech.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tech.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = activeTag === 'all' || tech.category === activeTag
    const matchesLevel = filterLevel === 'all' || 
                         tech.level.toLowerCase() === filterLevel.toLowerCase()
    return matchesSearch && matchesTag && matchesLevel
  }).sort((a, b) => {
    if (sortBy === 'level') {
      const levelOrder = { Beginner: 1, Intermediate: 2, Advanced: 3 }
      return levelOrder[a.level] - levelOrder[b.level]
    }
    return a.name.localeCompare(b.name)
  })

  // Derived state for active filters
  const hasActiveFilters = searchQuery !== '' || 
                          activeTag !== 'all' || 
                          filterLevel !== 'all' || 
                          sortBy !== 'name'

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Sticky Header that appears on scroll
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 bg-white shadow-md z-50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">Technologies</h2>
              <div className="flex items-center gap-4">
                <form onSubmit={handleSearchSubmit} className="relative">
                  <Search className="absolute left-3 top-2.5 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    className="pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-md w-64"
                    placeholder="Search technologies..."
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                  {searchQuery && (
                    <X
                      onClick={clearSearch}
                      className="absolute right-3 top-2.5 text-gray-400 cursor-pointer h-4 w-4"
                    />
                  )}
                </form>
                <button
                  onClick={() => setIsFiltersVisible(!isFiltersVisible)}
                  className="bg-indigo-50 text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 hover:bg-indigo-100 transition-colors"
                >
                  <Filter size={16} /> Filters
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-indigo-900  text-white py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Technologies</span>
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto mb-10">
              Explore learning paths, roadmaps, and resources for modern technologies to accelerate your development journey.
            </p>

            <form onSubmit={handleSearchSubmit} className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-4 text-gray-400" />
              <input
                type="text"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl shadow-lg text-gray-800 text-lg"
                placeholder="Search technologies..."
                value={searchQuery}
                onChange={handleSearch}
              />
              {searchQuery && (
                <X
                  onClick={clearSearch}
                  className="absolute right-4 top-4 text-gray-400 cursor-pointer"
                />
              )}
              <button type="submit" className="absolute right-0 top-0 h-full px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-r-xl font-semibold transition-colors">
                Search
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <AnimatePresence>
        {isFiltersVisible && (
          <motion.section 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Categories:</span>
                  {tags.map(tag => (
                    <button
                      key={tag.id}
                      onClick={() => handleTagClick(tag.id)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 transition-colors ${
                        tag.id === activeTag
                          ? 'bg-indigo-100 text-indigo-800 border-indigo-200 border'
                          : 'bg-gray-100 text-gray-800 border-gray-200 border hover:bg-gray-200'
                      }`}
                    >
                      <tag.icon size={14} /> {tag.name}
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">Level:</span>
                    <select
                      value={filterLevel}
                      onChange={(e) => handleLevelChange(e.target.value)}
                      className="border border-gray-300 rounded-md text-sm py-1.5 px-2"
                    >
                      {levels.map(level => (
                        <option key={level.id} value={level.id}>{level.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => handleSortChange(e.target.value)}
                      className="border border-gray-300 rounded-md text-sm py-1.5 px-2"
                    >
                      <option value="name">Name</option>
                      <option value="level">Level</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">View:</span>
                    <div className="flex border border-gray-300 rounded-md overflow-hidden">
                      <button
                        onClick={() => setView('grid')}
                        className={`px-3 py-1.5 text-sm ${view === 'grid' ? 'bg-gray-100 font-medium' : 'bg-white'}`}
                      >
                        Grid
                      </button>
                      <button
                        onClick={() => setView('list')}
                        className={`px-3 py-1.5 text-sm ${view === 'list' ? 'bg-gray-100 font-medium' : 'bg-white'}`}
                      >
                        List
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {hasActiveFilters && (
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium text-gray-800">{filteredTechs.length}</span> technologies found
                  </div>
                  <button
                    onClick={resetFilters}
                    className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1"
                  >
                    <X size={14} /> Clear all filters
                  </button>
                </div>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Technologies List Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filteredTechs.length > 0 ? (
              view === 'grid' ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredTechs.map((tech, index) => (
                    <motion.div
                      key={tech.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                    >
                      <TechCard
                        tech={tech}
                        onClick={() => setSelectedTech(tech)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col space-y-4"
                >
                  {filteredTechs.map((tech, index) => (
                    <motion.div
                      key={tech.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex flex-col sm:flex-row">
                        <div 
                          className="h-32 sm:w-48 sm:h-auto bg-cover bg-center" 
                          style={{ backgroundImage: `url(${tech.image})` }}
                        ></div>
                        <div className="p-5 flex-grow flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between mb-2">
                              <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                              <span className={`
                                text-xs font-semibold px-2.5 py-0.5 rounded-full
                                ${tech.level === 'Beginner' ? 'bg-green-100 text-green-800' : 
                                  tech.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 
                                  'bg-red-100 text-red-800'}
                              `}>
                                {tech.level}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-4">{tech.description}</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                              {tech.category === 'web' ? 'Web Development' :
                              tech.category === 'mobile' ? 'Mobile Development' :
                              tech.category === 'dsa' ? 'Data Structures' :
                              tech.category === 'lang' ? 'Programming Languages' :
                              tech.category === 'devops' ? 'DevOps' : tech.category}
                            </span>
                            <button
                              onClick={() => setSelectedTech(tech)}
                              className="flex items-center gap-1 text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors"
                            >
                              View Roadmap <ChevronRight size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )
            ) : (
              <EmptyState query={searchQuery} activeTag={activeTag} />
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Roadmap Modal */}
      <RoadmapModal 
        tech={selectedTech} 
        onClose={() => setSelectedTech(null)} 
      />
    </div>
  )
}

export default Technologies
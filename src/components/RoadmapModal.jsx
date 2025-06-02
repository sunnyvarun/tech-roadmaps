/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, BookOpen, Globe, Video, Code, Download, Share2, Star, ExternalLink, CheckCircle } from 'lucide-react'

const RoadmapModal = ({ tech, onClose }) => {
  const [activeTab, setActiveTab] = useState('roadmap')
  const [expandedSection, setExpandedSection] = useState('beginner')
  const [completedItems, setCompletedItems] = useState([])
  const [copied, setCopied] = useState(false)
  const modalRef = useRef(null)
  
  // For tracking progress (demo functionality)
  const toggleComplete = (topicId) => {
    if (completedItems.includes(topicId)) {
      setCompletedItems(completedItems.filter(id => id !== topicId))
    } else {
      setCompletedItems([...completedItems, topicId])
    }
  }
  
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])
  
  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [onClose])

  // Handle share functionality
  const handleShare = () => {
    navigator.clipboard.writeText(`Check out this ${tech.name} roadmap: ${window.location.href}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  if (!tech) return null

  const stages = [
    { id: 'beginner', title: 'Beginner', topics: tech.beginnerTopics, color: 'from-blue-500 to-cyan-400', icon: '🔰' },
    { id: 'intermediate', title: 'Intermediate', topics: tech.intermediateTopics, color: 'from-indigo-600 to-purple-500', icon: '🔄' },
    { id: 'advanced', title: 'Advanced', topics: tech.advancedTopics, color: 'from-purple-600 to-pink-500', icon: '🚀' },
  ]
  
  // Calculate progress percentage
  const totalTopics = stages.reduce((acc, stage) => acc + stage.topics.length, 0)
  const completedCount = completedItems.length
  const progressPercentage = totalTopics > 0 ? (completedCount / totalTopics) * 100 : 0

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="bg-white dark:bg-gray-800 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2 flex items-center">
                  {tech.name} Roadmap
                  <motion.div 
                    className="ml-3 text-white/80 bg-white/20 text-sm px-3 py-1 rounded-full"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    {Math.round(progressPercentage)}% Complete
                  </motion.div>
                </h2>
                <p className="text-white/80 max-w-2xl">{tech.description}</p>
              </div>
              <button
                onClick={onClose}
                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Progress bar */}
            <div className="mt-4 bg-white/10 rounded-full h-2 overflow-hidden">
              <motion.div 
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ delay: 0.3 }}
              />
            </div>
            
            {/* Tabs */}
            <div className="flex mt-6 space-x-1">
              <button
                onClick={() => setActiveTab('roadmap')}
                className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                  activeTab === 'roadmap' 
                    ? 'bg-white text-indigo-700' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Roadmap
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                  activeTab === 'resources' 
                    ? 'bg-white text-indigo-700' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Resources
              </button>
              <button
                onClick={() => setActiveTab('community')}
                className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                  activeTab === 'community' 
                    ? 'bg-white text-indigo-700' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Community
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {activeTab === 'roadmap' && (
              <div className="p-6">
                <div className="space-y-6">
                  {stages.map((stage, index) => (
                    <motion.div
                      key={stage.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedSection(expandedSection === stage.id ? null : stage.id)}
                        className={`w-full flex justify-between items-center p-5 text-left bg-gradient-to-r ${stage.color} text-white`}
                      >
                        <div className="flex items-center">
                          <span className="flex-shrink-0 h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                            {stage.icon}
                          </span>
                          <div>
                            <h3 className="text-xl font-semibold">{stage.title}</h3>
                            <p className="text-sm text-white/80">{stage.topics.length} topics</p>
                          </div>
                        </div>
                        <ChevronRight 
                          className={`h-5 w-5 transition-transform ${expandedSection === stage.id ? 'rotate-90' : ''}`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {expandedSection === stage.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                              {stage.topics.map((topic, i) => {
                                const topicId = `${stage.id}-${i}`
                                const isCompleted = completedItems.includes(topicId)
                                
                                return (
                                  <motion.li 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`p-4 flex items-start hover:bg-gray-50 dark:hover:bg-gray-700/50 ${
                                      isCompleted ? 'bg-green-50 dark:bg-green-900/10' : ''
                                    }`}
                                  >
                                    <button
                                      onClick={() => toggleComplete(topicId)}
                                      className={`flex-shrink-0 h-6 w-6 rounded-full mr-3 flex items-center justify-center border transition-colors ${
                                        isCompleted 
                                          ? 'bg-green-100 text-green-600 border-green-600 dark:bg-green-900/30 dark:text-green-400' 
                                          : 'bg-gray-100 text-gray-400 border-gray-300 dark:bg-gray-700 dark:border-gray-600'
                                      }`}
                                      aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
                                    >
                                      {isCompleted && <CheckCircle className="h-5 w-5" />}
                                    </button>
                                    <div className="flex-1">
                                      <p className={`text-gray-800 dark:text-gray-200 font-medium ${isCompleted ? 'line-through opacity-70' : ''}`}>
                                        {topic}
                                      </p>
                                    </div>
                                  </motion.li>
                                )
                              })}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={handleShare}
                    className="flex items-center px-5 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    {copied ? 'Copied!' : 'Share Roadmap'}
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('resources')}
                    className="flex items-center px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    View Resources
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'resources' && (
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Learning Resources</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <motion.a 
                    href={tech.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 rounded-xl p-5 transition-all shadow-sm hover:shadow-md flex flex-col h-full"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <span className="flex-shrink-0 h-10 w-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mr-3">
                        <BookOpen className="h-5 w-5" />
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">Official Documentation</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                      The official documentation provides comprehensive guides and references for {tech.name}.
                    </p>
                    <div className="flex items-center text-indigo-600 dark:text-indigo-400 mt-auto">
                      <span className="text-sm font-medium">Visit Documentation</span>
                      <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.a>
                  
                  <motion.a 
                    href={tech.courseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 rounded-xl p-5 transition-all shadow-sm hover:shadow-md flex flex-col h-full"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <span className="flex-shrink-0 h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mr-3">
                        <Video className="h-5 w-5" />
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">Recommended Course</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                      A step-by-step video course to master {tech.name} from fundamentals to advanced concepts.
                    </p>
                    <div className="flex items-center text-purple-600 dark:text-purple-400 mt-auto">
                      <span className="text-sm font-medium">Start Learning</span>
                      <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.a>
                  
                  <motion.a 
                    href="#github"
                    className="group bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 rounded-xl p-5 transition-all shadow-sm hover:shadow-md flex flex-col h-full"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <span className="flex-shrink-0 h-10 w-10 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mr-3">
                        <Code className="h-5 w-5" />
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">Sample Projects</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                      Explore practical examples and sample projects to reinforce your understanding of {tech.name}.
                    </p>
                    <div className="flex items-center text-green-600 dark:text-green-400 mt-auto">
                      <span className="text-sm font-medium">View Projects</span>
                      <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.a>
                  
                  <motion.a 
                    href="#books"
                    className="group bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 rounded-xl p-5 transition-all shadow-sm hover:shadow-md flex flex-col h-full"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <span className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-3">
                        <Download className="h-5 w-5" />
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">Cheat Sheet</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                      Download a comprehensive cheat sheet for quick reference to {tech.name} commands and syntax.
                    </p>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 mt-auto">
                      <span className="text-sm font-medium">Download PDF</span>
                      <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.a>
                </div>
                
                {/* Additional learning section */}
                <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
                  <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-3">
                    Community Recommended Resources
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        <a href="#resource1" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                          Interactive {tech.name} Playground
                        </a> - Practice with interactive examples
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        <a href="#resource2" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                          {tech.name} Weekly Newsletter
                        </a> - Stay updated with latest trends
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        <a href="#resource3" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                          Modern {tech.name} Techniques
                        </a> - Advanced patterns and best practices
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 'community' && (
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Community & Support</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-5 shadow-sm">
                    <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Discussion Forums</h4>
                    <ul className="space-y-3">
                      <li>
                        <a 
                          href="#stackoverflow" 
                          className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          <Globe className="h-5 w-5 mr-2" />
                          Stack Overflow {tech.name} Tag
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#reddit" 
                          className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          <Globe className="h-5 w-5 mr-2" />
                          Reddit r/{tech.name.toLowerCase()}
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#discord" 
                          className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          <Globe className="h-5 w-5 mr-2" />
                          Official {tech.name} Discord
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-5 shadow-sm">
                    <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Events & Meetups</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-1 rounded mr-3">
                          📅
                        </span>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{tech.name} Annual Conference</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Virtual - June 15-17, 2025</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-1 rounded mr-3">
                          🌐
                        </span>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Global {tech.name} Hackathon</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Online - September 10-12, 2025</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Featured community member */}
                <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-900/30">
                  <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Featured Community Expert</h4>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                      {/* Placeholder for profile image */}
                      <div className="h-full w-full bg-gradient-to-br from-indigo-400 to-purple-500"></div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Sarah Johnson</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{tech.name} Core Contributor</p>
                      <a 
                        href="#twitter" 
                        className="text-xs text-blue-600 dark:text-blue-400 hover:underline mt-1 inline-block"
                      >
                        @sarahjcodes
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: April 2025
            </div>
            <div className="flex space-x-2">
              <button
                onClick={onClose}
                className="px-5 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Close
              </button>
              <a
                href="#save"
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors flex items-center"
              >
                <Download className="h-4 w-4 mr-2" />
                Save Roadmap
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default RoadmapModal
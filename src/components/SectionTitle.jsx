/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'center', 
  theme = 'light',
  highlightWords = [],
  withAccent = true,
  animationVariant = 'fadeUp',
  className = '',
  id
}) => {
  const [observer, setObserver] = useState(null)
  const [visible, setVisible] = useState(false)
  
  // Animation variants
  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.6, 
          ease: "easeOut" 
        }
      }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          duration: 0.5, 
          ease: "easeInOut" 
        }
      }
    },
    slideIn: {
      hidden: { opacity: 0, x: -30 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration: 0.5, 
          ease: "easeOut" 
        }
      }
    },
    staggered: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          staggerChildren: 0.1
        }
      }
    }
  }
  
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }
  
  // Text alignment classes
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  }
  
  // Theme variants
  const themeStyles = {
    light: {
      title: 'text-gray-900',
      subtitle: 'text-gray-600',
      accent: 'bg-indigo-500'
    },
    dark: {
      title: 'text-white',
      subtitle: 'text-gray-300',
      accent: 'bg-indigo-400'
    },
    primary: {
      title: 'text-indigo-600',
      subtitle: 'text-indigo-400',
      accent: 'bg-indigo-600'
    },
    gradient: {
      title: 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600',
      subtitle: 'text-gray-600',
      accent: 'bg-gradient-to-r from-indigo-500 to-purple-600'
    }
  }
  
  // Split title to highlight specific words
  const renderTitle = () => {
    if (!highlightWords || highlightWords.length === 0) {
      return <span>{title}</span>
    }
    
    const words = title.split(' ')
    return words.map((word, index) => {
      const shouldHighlight = highlightWords.includes(word)
      
      return (
        <span key={index} className={shouldHighlight 
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-bold'
          : ''
        }>
          {word}{index < words.length - 1 ? ' ' : ''}
        </span>
      )
    })
  }
  
  // Intersection Observer setup
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    
    setObserver(obs)
    
    return () => {
      if (obs) {
        obs.disconnect()
      }
    }
  }, [])
  
  // Attach observer to the component
  useEffect(() => {
    if (observer && !visible) {
      const element = document.getElementById(id || `section-title-${title?.replace(/\s+/g, '-').toLowerCase() || 'unique'}`)
      if (element) {
        observer.observe(element)
      }
    }
    
    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [observer, visible, title, id])
  
  return (
    <motion.div 
      id={id || `section-title-${title?.replace(/\s+/g, '-').toLowerCase() || 'unique'}`}
      className={`mb-12 ${alignmentClasses[align]} ${className}`}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={animationVariant === 'staggered' ? variants.staggered : variants[animationVariant]}
    >
      <div className="relative inline-block">
        {withAccent && (
          <motion.div 
            className={`absolute -top-3 left-0 w-12 h-1 rounded ${themeStyles[theme].accent}`}
            initial={{ width: 0 }}
            animate={visible ? { width: 48 } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        )}
        
        {animationVariant === 'staggered' ? (
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold mb-3 ${themeStyles[theme].title}`}
            variants={childVariants}
          >
            {renderTitle()}
          </motion.h2>
        ) : (
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${themeStyles[theme].title}`}>
            {renderTitle()}
          </h2>
        )}
      </div>
      
      {subtitle && (
        animationVariant === 'staggered' ? (
          <motion.p 
            className={`text-lg ${themeStyles[theme].subtitle} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
            variants={childVariants}
          >
            {subtitle}
          </motion.p>
        ) : (
          <p className={`text-lg ${themeStyles[theme].subtitle} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        )
      )}
      
      {withAccent && align === 'center' && (
        <motion.div 
          className={`h-1 w-20 rounded-full mt-6 ${themeStyles[theme].accent} mx-auto`}
          initial={{ scale: 0, opacity: 0 }}
          animate={visible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        />
      )}
    </motion.div>
  )
}

export default SectionTitle
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Code, Globe, Smartphone, Cpu, BookOpen, Users, Rocket } from 'lucide-react'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import Testimonial from '../components/Testimonial'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Comprehensive Roadmaps",
      description: "Step-by-step guides for mastering any technology from beginner to advanced levels."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Everything from HTML/CSS basics to advanced JavaScript frameworks."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "iOS, Android, and cross-platform development with Flutter and React Native."
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Programming Languages",
      description: "Master Python, JavaScript, Java, C++, and more with our structured paths."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Data Structures & Algorithms",
      description: "Essential computer science concepts for coding interviews and problem solving."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Support",
      description: "Join our community of learners to get help and share knowledge."
    }
  ]

  const testimonials = [
    {
      quote: "These roadmaps helped me land my first developer job. The structured approach made learning so much easier!",
      author: "Sarah Johnson",
      role: "Frontend Developer",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      quote: "As a self-taught developer, I was overwhelmed by all the technologies. TechRoad gave me clarity and direction.",
      author: "Michael Chen",
      role: "Full Stack Developer",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      quote: "The best resource I've found for structured learning. The roadmaps are constantly updated with the latest tech.",
      author: "Emma Rodriguez",
      role: "Mobile Developer",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
    }
  ]
  const navigate = useNavigate();

  const handleExploreRoadmaps = () => {
    navigate('/Technologies'); // Navigate to the TechRoadmap route
  };

  return (
    <div className="w-full max-w-full ">
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-gray-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <SectionTitle 
            title="What We Offer" 
            subtitle="Comprehensive learning paths for all major technologies in software development" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-indigo-600 text-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-indigo-100">Technologies</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-indigo-100">Learners</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-indigo-100">Resources</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-indigo-100">Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <SectionTitle 
            title="How It Works" 
            subtitle="Follow these simple steps to start your learning journey" 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Path</h3>
              <p className="text-gray-600">
                Browse our technology categories and select the roadmap that matches your goals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Follow the Steps</h3>
              <p className="text-gray-600">
                Progress through beginner, intermediate, and advanced topics in logical order.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Build Projects</h3>
              <p className="text-gray-600">
                Apply what you learn with practical projects at each stage of your journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <SectionTitle 
            title="What Our Learners Say" 
            subtitle="Success stories from our community of developers" 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-none">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Testimonial {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-700 text-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-indigo-200 mb-8 w-full">
              Join thousands of developers who have accelerated their learning with our structured roadmaps.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleExploreRoadmaps}
              className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-bold text-lg"
            >
              Explore All Roadmaps
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Users, BookOpen, Globe, Code, Award, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { useNavigate } from 'react-router-dom';


const About = () => {
  const [visibleTeamMembers, setVisibleTeamMembers] = useState(4);
  
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Full stack developer with 10+ years of experience in tech education.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      socialLinks: [
        { platform: "LinkedIn", url: "#" },
        { platform: "Twitter", url: "#" }
      ]
    },
    {
      name: "Maria Garcia",
      role: "Lead Educator",
      bio: "Specializes in frontend technologies and curriculum development.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      socialLinks: [
        { platform: "LinkedIn", url: "#" },
        { platform: "GitHub", url: "#" }
      ]
    },
    {
      name: "James Wilson",
      role: "Mobile Expert",
      bio: "iOS and Android developer passionate about teaching mobile technologies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      socialLinks: [
        { platform: "LinkedIn", url: "#" },
        { platform: "GitHub", url: "#" }
      ]
    },
    {
      name: "Sarah Lee",
      role: "DSA Specialist",
      bio: "Competitive programmer who makes algorithms easy to understand.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
      socialLinks: [
        { platform: "LinkedIn", url: "#" },
        { platform: "GitHub", url: "#" }
      ]
    }
  ];

  const milestones = [
    { year: "2018", event: "Founded with a mission to simplify tech education", icon: <BookOpen className="h-6 w-6" /> },
    { year: "2019", event: "Launched first 10 roadmaps for web development", icon: <Code className="h-6 w-6" /> },
    { year: "2020", event: "Reached 10,000 active learners", icon: <Users className="h-6 w-6" /> },
    { year: "2021", event: "Expanded to mobile and data science roadmaps", icon: <Globe className="h-6 w-6" /> },
    { year: "2022", event: "Featured in top tech education publications", icon: <Award className="h-6 w-6" /> },
    { year: "2023", event: "Surpassed 100,000 learners worldwide", icon: <Users className="h-6 w-6" /> }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  const navigate = useNavigate();

  const handleExploreRoadmaps = () => {
    navigate('/Technologies'); // Navigate to the TechRoadmap route
  };


  return (
    <div className="bg-white">
      {/* Hero Section with Parallax Effect */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              About <span className="text-indigo-400">TechRoad</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We're on a mission to make technology education accessible, structured, and effective for everyone.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a href="#mission" className="inline-flex items-center text-lg font-medium text-white hover:text-indigo-300 transition-colors">
                Learn more
                <ChevronDown className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </motion.div>
        {/* Decorative diagonal divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50 transform -skew-y-2 translate-y-8"></div>
      </section>

      {/* Mission Section with better layout and rich content */}
      <section id="mission" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Mission" 
            subtitle="Why we do what we do" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Democratizing Technology Education</h3>
              <p className="text-gray-600 mb-6 text-lg">
                In today's fast-paced tech world, it's easy to feel overwhelmed by the sheer number of technologies and learning resources available. We saw a need for structured, comprehensive learning paths that guide aspiring developers from beginner to job-ready.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                TechRoad was born out of our own struggles learning to code. We've distilled years of experience into clear roadmaps that save you time and help you focus on what really matters.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center">
                  <div className="bg-indigo-100 rounded-full p-3 mr-4">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-bold">100,000+</div>
                    <div className="text-sm text-gray-500">Learners Worldwide</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center">
                  <div className="bg-indigo-100 rounded-full p-3 mr-4">
                    <BookOpen className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-bold">30+</div>
                    <div className="text-sm text-gray-500">Learning Roadmaps</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl">
                <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-80"></div>
              </div>
              {/* Floating card */}
              <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <h4 className="font-bold text-lg mb-2">Our Impact</h4>
                <p className="text-gray-600">
                  "TechRoad's roadmaps helped me switch careers to web development in just 8 months." - Michael T.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section with improved cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Values" 
            subtitle="What guides everything we do" 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-4 inline-flex mb-6">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Clarity</h3>
              <p className="text-gray-600 text-lg">
                We cut through the noise to provide clear, actionable learning paths that make sense.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-4 inline-flex mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Community</h3>
              <p className="text-gray-600 text-lg">
                We believe learning is better together and foster supportive communities around our content.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                  Join us <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-4 inline-flex mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Accessibility</h3>
              <p className="text-gray-600 text-lg">
                We make high-quality tech education available to everyone, everywhere, regardless of background.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                  Our approach <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section with improved cards and interaction */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Meet The Team" 
            subtitle="The people behind TechRoad" 
          />
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-2">
                    {member.socialLinks.map((link, linkIndex) => (
                      <a 
                        key={linkIndex}
                        href={link.url} 
                        className="text-gray-500 hover:text-indigo-600 transition-colors"
                        aria-label={`${member.name}'s ${link.platform}`}
                      >
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          {link.platform === "LinkedIn" ? "in" : link.platform === "Twitter" ? "𝕏" : "GH"}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section with improved layout and visual cues */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Journey" 
            subtitle="Key milestones along the way" 
          />
          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="absolute left-1/2 w-1 h-full bg-indigo-100 transform -translate-x-1/2 rounded-full"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`mb-16 flex items-center ${index % 2 === 0 ? 'justify-end md:justify-start' : 'justify-start md:justify-end'}`}
              >
                {/* Timeline point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-indigo-600 border-4 border-white flex items-center justify-center text-white shadow-md">
                    {milestone.icon}
                  </div>
                </div>
                
                {/* Content card */}
                <div className="w-full md:w-5/12">
                  <div className={`p-6 rounded-xl shadow-md border ${index % 2 === 0 ? 'border-indigo-100 bg-white' : 'border-indigo-600 bg-indigo-600 text-white'}`}>
                    <div className={`text-lg font-bold mb-3 flex items-center ${index % 2 === 0 ? 'text-indigo-600' : 'text-white'}`}>
                      {milestone.year}
                    </div>
                    <p className="text-lg">{milestone.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with improved design and focus */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-indigo-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-white"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                <Award className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Growing Community</h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
              Become part of a movement that's changing how people learn technology worldwide. Start your journey with TechRoad today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleExploreRoadmaps}
                className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-bold text-lg shadow-lg flex items-center justify-center"
              >
                Start Learning Today <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleExploreRoadmaps}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center"
              >
                Browse Roadmaps
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Code, BookOpen, Users, Monitor, Smartphone, Database, Cloud } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Structured Roadmaps",
      description: "Comprehensive learning paths for all major technologies, updated regularly.",
      features: [
        "Beginner to advanced progression",
        "Curated resource recommendations",
        "Project ideas for each level"
      ]
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Learning Resources",
      description: "High-quality tutorials, articles, and video recommendations.",
      features: [
        "Free and paid resource options",
        "Community-voted best resources",
        "Expert-reviewed content"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Support",
      description: "Connect with fellow learners and get help when you're stuck.",
      features: [
        "Discussion forums",
        "Live Q&A sessions",
        "Study groups"
      ]
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Web Development",
      description: "Specialized roadmaps for frontend, backend, and full-stack development.",
      features: [
        "HTML/CSS/JavaScript fundamentals",
        "Modern frameworks (React, Vue, Angular)",
        "Backend technologies (Node, Django, Spring)"
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile app development paths.",
      features: [
        "iOS (Swift) and Android (Kotlin)",
        "React Native and Flutter",
        "Mobile UI/UX best practices"
      ]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Science",
      description: "Roadmaps for data analysis, machine learning, and AI.",
      features: [
        "Python for data science",
        "Machine learning algorithms",
        "Data visualization"
      ]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "DevOps & Cloud",
      description: "Infrastructure, deployment, and cloud services learning paths.",
      features: [
        "Docker and Kubernetes",
        "AWS, Azure, GCP",
        "CI/CD pipelines"
      ]
    }
  ]
  const navigate = useNavigate();

  const handleExploreRoadmaps = () => {
    navigate('/Technologies'); // Navigate to the TechRoadmap route
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Everything you need to master technology and advance your career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="What We Provide" 
            subtitle="Comprehensive services to support your learning journey" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-indigo-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Simple Pricing" 
            subtitle="Choose the plan that works for you" 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Free</h3>
                <p className="text-gray-600 mb-6">Basic access to get started</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access to all roadmaps</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Community support</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Exclusive content</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg font-medium">
                  Current Plan
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-indigo-600 rounded-xl overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Pro</h3>
                <p className="text-gray-600 mb-6">For serious learners</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Exclusive content</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Downloadable resources</span>
                  </li>
                </ul>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                  Upgrade Now
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-6">For teams and organizations</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Team management</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Progress tracking</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom learning paths</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-800 text-white py-2 rounded-lg font-medium hover:bg-gray-900 transition-colors">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Everything you need to know about our services" 
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "How often are roadmaps updated?",
                  answer: "We update our roadmaps quarterly to ensure they reflect the latest technologies and best practices. Major changes in the tech landscape may trigger more frequent updates."
                },
                {
                  question: "Can I suggest a new technology roadmap?",
                  answer: "Absolutely! We welcome suggestions from our community. You can submit your request through our feedback form, and our team will evaluate it for inclusion."
                },
                {
                  question: "Is there a mobile app available?",
                  answer: "Not currently, but our website is fully responsive and works great on mobile devices. A native mobile app is in our development roadmap."
                },
                {
                  question: "How do I cancel my subscription?",
                  answer: "You can cancel anytime from your account settings. There are no cancellation fees, and you'll continue to have access until the end of your billing period."
                },
                {
                  question: "Do you offer team discounts?",
                  answer: "Yes, we offer significant discounts for teams of 5 or more. Contact our sales team for custom pricing based on your organization's size and needs."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Accelerate Your Learning?</h2>
            <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
              Join thousands of developers who are mastering new technologies faster with our structured approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleExploreRoadmaps}
                className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-bold text-lg"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleExploreRoadmaps}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg"
              >
                Learn 
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  )
}


export default Services
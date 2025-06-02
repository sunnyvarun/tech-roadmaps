/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MessageSquare, 
  ThumbsUp, 
  User, 
  CheckCircle, 
  Bug, 
  HelpCircle, 
  Star, 
  ChevronDown, 
  Send,
  Coffee
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 0,
    feedbackType: 'suggestion'
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // Form validation
  useEffect(() => {
    const validateForm = () => {
      const newErrors = {};
      
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      
      if (!formData.message.trim()) newErrors.message = 'Message is required';
      
      if (formData.feedbackType !== 'compliment' && formData.rating === 0) {
        newErrors.rating = 'Please select a rating';
      }
      
      setErrors(newErrors);
      setIsFormValid(Object.keys(newErrors).length === 0);
    };
    
    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRating = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isFormValid) {
      const firstErrorField = Object.keys(errors)[0];
      document.getElementById(firstErrorField)?.focus();
      return;
    }
    
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
  };

  const getFeedbackIcon = () => {
    switch(formData.feedbackType) {
      case 'bug': return <Bug className="h-5 w-5" />;
      case 'question': return <HelpCircle className="h-5 w-5" />;
      case 'compliment': return <Coffee className="h-5 w-5" />;
      default: return <MessageSquare className="h-5 w-5" />;
    }
  };

  const feedbackOptions = [
    { value: 'suggestion', label: 'Suggestion', description: 'Share your ideas for improvement' },
    { value: 'bug', label: 'Bug Report', description: 'Help us fix issues you encounter' },
    { value: 'question', label: 'Question', description: 'Ask us anything about our platform' },
    { value: 'compliment', label: 'Compliment', description: 'Let us know what you love' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-opacity-20 bg-gradient-to-br from-gray-900 to-indigo-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              We Value Your Feedback
            </motion.h1>
            <motion.p 
              className="text-xl text-indigo-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Help us improve by sharing your thoughts and experiences
            </motion.p>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Share Your Feedback" 
            subtitle="Your input helps us create a better experience for everyone" 
            className="text-center mb-12"
          />
          
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
            >
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Your feedback has been submitted successfully. We appreciate your time and input.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Submit Another Feedback
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">What type of feedback are you providing?</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {feedbackOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData({...formData, feedbackType: option.value})}
                        className={`p-4 border rounded-lg text-center transition-colors ${
                          formData.feedbackType === option.value 
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                            : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                        }`}
                      >
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                            formData.feedbackType === option.value 
                              ? 'bg-indigo-100 text-indigo-600' 
                              : 'bg-gray-100 text-gray-500'
                          }`}>
                            {option.value === 'suggestion' && <MessageSquare className="h-5 w-5" />}
                            {option.value === 'bug' && <Bug className="h-5 w-5" />}
                            {option.value === 'question' && <HelpCircle className="h-5 w-5" />}
                            {option.value === 'compliment' && <ThumbsUp className="h-5 w-5" />}
                          </div>
                          <span className="text-sm font-medium">{option.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <User className="h-5 w-5" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`block w-full pl-10 pr-3 py-2 border ${
                          errors.name ? 'border-indigo-300' : 'border-gray-300'
                        } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        placeholder="John Doe"
                      />
                    </div>
                    {/* {errors.name && (
                      <p className="mt-1 text-sm text-indigo-600">{errors.name}</p>
                    )} */}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <Mail className="h-5 w-5" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`block w-full pl-10 pr-3 py-2 border ${
                          errors.email ? 'border-indigo-300' : 'border-gray-300'
                        } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        placeholder="you@example.com"
                      />
                    </div>
                    {/* {errors.email && (
                      <p className="mt-1 text-sm text-indigo-600">{errors.email}</p>
                    )} */}
                  </div>

                  {formData.feedbackType !== 'compliment' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Rating
                      </label>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleRating(star)}
                            className="focus:outline-none"
                          >
                            <Star
                              className={`h-8 w-8 ${
                                star <= formData.rating 
                                  ? 'text-yellow-400 fill-yellow-400' 
                                  : 'text-gray-300'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                      {/* {errors.rating && (
                        <p className="mt-1 text-sm text-indigo-600">{errors.rating}</p>
                      )} */}
                    </div>
                  )}

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your {formData.feedbackType === 'question' ? 'Question' : 'Message'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`block w-full px-3 py-2 border ${
                        errors.message ? 'border-indigo-300' : 'border-gray-300'
                      } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                      placeholder={
                        formData.feedbackType === 'question' ? 'What would you like to ask?' :
                        formData.feedbackType === 'bug' ? 'Please describe the issue...' :
                        formData.feedbackType === 'compliment' ? 'Tell us what you love...' :
                        'What suggestions do you have?...'
                      }
                    />
                    {/* {errors.message && (
                      <p className="mt-1 text-sm text-indigo-600">{errors.message}</p>
                    )} */}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={!isFormValid}
                      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                        isFormValid ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-400 cursor-not-allowed'
                      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                    >
                      Submit Feedback
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="What Others Are Saying" 
            subtitle="Feedback from our community" 
            className="text-center mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "The roadmaps helped me structure my learning and land my first developer job. Incredibly valuable resource!",
                author: "Alex Johnson",
                role: "Frontend Developer",
                rating: 5
              },
              {
                quote: "As a self-taught developer, I was overwhelmed by all the technologies. TechRoad gave me clarity and direction when I needed it most.",
                author: "Maria Garcia",
                role: "Full Stack Developer",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
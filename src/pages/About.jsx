import { motion } from 'framer-motion';
import { FaQuran, FaGraduationCap, FaGlobe, FaAward, FaClock, FaChalkboardTeacher, FaBookReader, FaMosque } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaQuran className="w-6 h-6" />,
      title: "Expert Quran Teachers",
      description: "Learn from certified scholars with years of teaching experience"
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Flexible Timing",
      description: "Choose your convenient time for classes, available 24/7"
    },
    {
      icon: <FaAward className="w-6 h-6" />,
      title: "Certified Courses",
      description: "Receive recognized certificates upon course completion"
    }
  ];

  const highlights = [
    {
      icon: <FaBookReader className="w-8 h-8" />,
      title: "Personalized Learning",
      description: "One-on-one attention and customized curriculum for each student"
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Structured Programs",
      description: "Well-designed courses from basic to advanced levels"
    },
    {
      icon: <FaMosque className="w-8 h-8" />,
      title: "Islamic Environment",
      description: "Learn in a respectful and authentic Islamic atmosphere"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Clean Modern Header */}
      <div className="relative pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6 mt-6"
            >
              Discover Our Journey
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed"
            >
              Empowering Muslims worldwide with authentic Islamic education through modern technology and traditional wisdom
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section - Clean Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We strive to provide accessible, high-quality Islamic education to Muslims worldwide. 
                Our platform connects students with qualified teachers for personalized learning experiences.
              </p>
            </div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden md:block"
          >
            <img 
              src="https://images.pexels.com/photos/7108219/pexels-photo-7108219.jpeg"
              alt="Islamic Education"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-green-600/10 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Program Highlights - Modern Cards */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Program Highlights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience a comprehensive learning journey with our unique features
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section - Minimalist */}
      <div className="bg-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We are committed to providing authentic Islamic knowledge while maintaining the highest standards of education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Quality Education", description: "Comprehensive curriculum designed by experts" },
              { title: "Islamic Authenticity", description: "Knowledge based on Quran and Sunnah" },
              { title: "Global Community", description: "Connect with Muslims worldwide" }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-gray-800 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCookie, FaCogs, FaChartBar, FaUserShield, FaToggleOn, FaHistory, FaInfoCircle, FaCheck } from 'react-icons/fa';

const Cookies = () => {
  const [cookiePreference, setCookiePreference] = useState('all');
  const [showNotification, setShowNotification] = useState(false);

  // Check for existing cookie preference on component mount
  useEffect(() => {
    const preference = localStorage.getItem('cookiePreference');
    if (preference) {
      setCookiePreference(preference);
    }
  }, []);

  const handleCookiePreference = (preference) => {
    // Set cookie preference in localStorage
    localStorage.setItem('cookiePreference', preference);
    setCookiePreference(preference);
    setShowNotification(true);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const cookieTypes = [
    {
      icon: <FaCogs className="w-6 h-6" />,
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly and cannot be disabled."
    },
    {
      icon: <FaChartBar className="w-6 h-6" />,
      title: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website by collecting and reporting information anonymously."
    },
    {
      icon: <FaUserShield className="w-6 h-6" />,
      title: "Functional Cookies",
      description: "Enable enhanced functionality and personalization, such as remembering your preferences."
    },
    {
      icon: <FaToggleOn className="w-6 h-6" />,
      title: "Cookie Control",
      description: "You can control non-essential cookies by adjusting your browser settings at any time."
    },
    {
      icon: <FaHistory className="w-6 h-6" />,
      title: "Cookie Duration",
      description: "Cookies can be session-based (temporary) or persistent, lasting for a specified period."
    },
    {
      icon: <FaInfoCircle className="w-6 h-6" />,
      title: "Third-Party Cookies",
      description: "Some features may use third-party cookies to enhance your browsing experience."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50/30 pt-20">
      {/* Header Section */}
      <div className="relative bg-white py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-full bg-green-100">
                <FaCookie className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use cookies to enhance your browsing experience and provide you with personalized content and services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cookieTypes.map((cookie, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-green-50 text-green-600 mr-4">
                  {cookie.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {cookie.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {cookie.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cookie Settings Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl p-8 shadow-sm relative"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Managing Your Cookie Preferences
          </h2>
          <p className="text-gray-600 mb-6">
            You can manage your cookie preferences by selecting your preferred option below. Your choice will be saved for future visits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => handleCookiePreference('all')}
              className={`px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2
                ${cookiePreference === 'all' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-green-600 border-2 border-green-600 hover:bg-green-50'}`}
            >
              {cookiePreference === 'all' && <FaCheck className="w-4 h-4" />}
              Accept All Cookies
            </button>
            <button 
              onClick={() => handleCookiePreference('essential')}
              className={`px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2
                ${cookiePreference === 'essential' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-green-600 border-2 border-green-600 hover:bg-green-50'}`}
            >
              {cookiePreference === 'essential' && <FaCheck className="w-4 h-4" />}
              Essential Cookies Only
            </button>
          </div>

          {/* Success Notification */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: showNotification ? 1 : 0, y: showNotification ? 0 : 10 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-700 px-4 py-2 rounded-lg shadow-sm flex items-center gap-2"
          >
            <FaCheck className="w-4 h-4" />
            Cookie preferences saved successfully!
          </motion.div>
        </motion.div>

        {/* Current Settings Display */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 p-4 bg-gray-50 rounded-lg"
        >
          <p className="text-sm text-gray-600">
            Current Setting: {cookiePreference === 'all' ? 'All Cookies Accepted' : 'Essential Cookies Only'}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Last Updated Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            For more information about our cookie usage, please{' '}
            <a 
              href="/contact"
              onClick={() => window.location.reload()}
              className="text-green-600 hover:text-green-700 transition-colors duration-300"
            >
              contact us
            </a>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies; 
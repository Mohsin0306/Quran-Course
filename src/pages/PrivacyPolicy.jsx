import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserShield, FaLock, FaCookie, FaEnvelope, FaGlobe, FaDatabase, FaUserSecret } from 'react-icons/fa';

const PrivacyPolicy = () => {
  const policies = [
    {
      icon: <FaUserShield className="w-6 h-6" />,
      title: "Personal Information Collection",
      description: "We collect information that you provide directly to us, including name, email address, and contact details when you register or communicate with us."
    },
    {
      icon: <FaLock className="w-6 h-6" />,
      title: "Data Security",
      description: "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure."
    },
    {
      icon: <FaCookie className="w-6 h-6" />,
      title: "Cookies Usage",
      description: "We use cookies and similar tracking technologies to track activity on our website and improve user experience."
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Communications",
      description: "We may use your information to communicate with you about our services, updates, and promotional content."
    },
    {
      icon: <FaGlobe className="w-6 h-6" />,
      title: "Third-Party Services",
      description: "We may share your information with trusted third-party service providers who assist us in operating our website and services."
    },
    {
      icon: <FaDatabase className="w-6 h-6" />,
      title: "Data Retention",
      description: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy."
    },
    {
      icon: <FaUserSecret className="w-6 h-6" />,
      title: "Your Rights",
      description: "You have the right to access, correct, or delete your personal information at any time by contacting us."
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
                <FaShieldAlt className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
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
                  {policy.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {policy.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {policy.description}
              </p>
            </motion.div>
          ))}
        </div>

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
            If you have any questions about our Privacy Policy, please{' '}
            <a href="/contact" className="text-green-600 hover:text-green-700 transition-colors duration-300">
              contact us
            </a>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 
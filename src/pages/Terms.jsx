import { motion } from 'framer-motion';
import { FaGavel, FaUserCheck, FaFileContract, FaHandshake, FaExclamationTriangle, FaShieldAlt, FaBalanceScale, FaRegCopyright } from 'react-icons/fa';

const Terms = () => {
  const terms = [
    {
      icon: <FaUserCheck className="w-6 h-6" />,
      title: "User Agreement",
      description: "By accessing our website and services, you agree to be bound by these terms and conditions."
    },
    {
      icon: <FaFileContract className="w-6 h-6" />,
      title: "Service Terms",
      description: "We provide Islamic education services subject to your compliance with all terms and guidelines."
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: "User Conduct",
      description: "Users must maintain respectful behavior and adhere to Islamic principles during all interactions."
    },
    {
      icon: <FaExclamationTriangle className="w-6 h-6" />,
      title: "Limitations",
      description: "We reserve the right to modify or terminate services for any reason, with or without notice."
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Privacy Protection",
      description: "Your use of our services is also governed by our Privacy Policy, which protects your personal information."
    },
    {
      icon: <FaBalanceScale className="w-6 h-6" />,
      title: "Legal Compliance",
      description: "Users must comply with all applicable laws and regulations while using our services."
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
                <FaGavel className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Please read these terms carefully before using our services. By using our website, you agree to these terms.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {terms.map((term, index) => (
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
                  {term.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {term.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {term.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center mb-4">
            <FaRegCopyright className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Quran Academy. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            For any questions about our Terms, please{' '}
            <a href="/contact" className="text-green-600 hover:text-green-700 transition-colors duration-300">
              contact us
            </a>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms; 
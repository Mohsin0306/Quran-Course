import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, 
         FaFacebook, FaInstagram, FaYoutube, FaSkype } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="w-5 h-5" />,
      title: "Call Us",
      details: "+1 (234) 567-8900",
      subDetails: "Available 9 AM - 6 PM EST",
      color: "bg-blue-600"
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Email Us",
      details: "info@yourschool.com",
      subDetails: "We reply within 24 hours",
      color: "bg-green-600"
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: "Visit Us",
      details: "123 Islamic Center St",
      subDetails: "City, State 12345",
      color: "bg-indigo-600"
    }
  ];

  const socialLinks = [
    { 
      icon: <FaWhatsapp className="w-5 h-5" />, 
      link: "#", 
      color: "bg-green-600", 
      label: "WhatsApp",
      description: "Quick Chat Support"
    },
    { 
      icon: <FaSkype className="w-5 h-5" />, 
      link: "#", 
      color: "bg-blue-500", 
      label: "Skype",
      description: "Video Consultations"
    },
    { 
      icon: <FaFacebook className="w-5 h-5" />, 
      link: "#", 
      color: "bg-blue-600", 
      label: "Facebook",
      description: "Join Our Community"
    },
    { 
      icon: <FaInstagram className="w-5 h-5" />, 
      link: "#", 
      color: "bg-pink-600", 
      label: "Instagram",
      description: "Follow Our Journey"
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Admin', // Your name or admin name
    };

    try {
      const result = await emailjs.send(
        'service_v8vraxg',
        'template_c8f69dd',
        templateParams,
        'LodCcQL1JS8wd0HEv'
      );

      if (result.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      setStatus('error');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Professional Header - Mobile Optimized */}
      <div className="relative bg-gradient-to-br from-green-700 to-green-600 h-[250px] sm:h-[300px] md:h-[400px] flex items-center">
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative w-full pt-12 sm:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-6">
                Get in Touch
              </h1>
              <p className="text-base sm:text-lg text-green-50 px-4">
                Have questions about our Islamic education programs? We're here to help.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Cards - Mobile Optimized */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 md:-mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className={`${info.color} w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">{info.title}</h3>
                  <p className="text-sm sm:text-base text-gray-900 font-medium">{info.details}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{info.subDetails}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content Section - Mobile Optimized */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-lg p-5 sm:p-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-green-600 text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Social Links & Info - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Connect With Us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${social.color} p-3 sm:p-4 rounded-xl text-white hover:opacity-90 transition-all group`}
                  >
                    <div className="flex items-center space-x-3">
                      {social.icon}
                      <div>
                        <p className="text-sm sm:text-base font-semibold">{social.label}</p>
                        <p className="text-xs sm:text-sm text-white/80">{social.description}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Business Hours - Mobile Optimized */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-100">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm sm:text-base text-gray-600">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>

            {/* Quick Support - Mobile Optimized */}
            <div className="bg-green-50 rounded-xl p-4 sm:p-6 border border-green-100">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Quick Support</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Need immediate assistance? Reach out via WhatsApp or Skype for quick support during business hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 
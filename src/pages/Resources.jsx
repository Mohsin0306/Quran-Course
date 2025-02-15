import { motion } from 'framer-motion';
import { FaBook, FaVideo, FaFileDownload, FaPlayCircle, FaBookOpen, FaQuran, 
         FaPray, FaMosque, FaCalendarAlt, FaDownload, FaExternalLinkAlt, FaSun, FaMapMarkerAlt, FaExclamationTriangle, FaSearch, FaSync, FaGlobe, FaClock, FaChevronDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { PrayerTimes } from '../utils/prayerTimes';

const Resources = () => {
  const categories = [
    {
      title: "Quran Resources",
      icon: <FaQuran className="w-6 h-6" />,
      resources: [
        {
          title: "Quran Recitation Guide",
          type: "PDF",
          description: "Complete guide for proper Quran recitation with Tajweed rules",
          link: "https://dn720702.ca.archive.org/0/items/13-line-quran-with-beautiful-color-coded-tajwid-rules-pdf/13%20line%20quran%20with%20beautiful%20color%20coded%20tajweed%20rules%20pdf_text.pdf",
          size: "90.5 MB",
          external: true
        },
        {
          title: "Memorization Techniques",
          type: "Video",
          description: "Expert tips for effective Quran memorization",
          link: "https://youtu.be/5OddjGnWQJo?si=HmDzXMz_kImNHyGX",
          duration: "3 mins",
          external: true
        }
      ]
    },
    {
      title: "Prayer Guides",
      icon: <FaPray className="w-6 h-6" />,
      resources: [
        {
          title: "Salah Learning Guide",
          type: "PDF",
          description: "Step-by-step guide to perform prayers correctly",
          link: "https://alrashidmosque.ca/wp-content/uploads/2023/09/how-to-pray-book-salah_230913_092727-1-1.pdf",
          size: "1.8 MB",
          external: true
        },
        {
          title: "Prayer Times Calculator",
          type: "Tool",
          description: "Calculate accurate prayer times for your location",
          component: (
            <div className="w-full">
              <PrayerTimesCalculator />
            </div>
          ),
          isComponent: true
        }
      ]
    },
    {
      title: "Islamic Studies",
      icon: <FaBookOpen className="w-6 h-6" />,
      resources: [
        {
          title: "Fundamentals of Islam",
          type: "Course Material",
          description: "Basic principles and practices of Islam",
          link: "https://d1.islamhouse.com/data/en/ih_books/single/en_The_Fundamentals_of_islam.pdf",
          size: "3.2 MB",
          external: true
        }
      ]
    }
  ];

  const featuredResources = [
    {
      title: "Ramadan Planner",
      icon: <FaCalendarAlt className="w-8 h-8" />,
      description: "Complete guide for Ramadan preparation and daily activities",
      link: "/ramadan-planner",
      color: "bg-purple-500"
    },
    {
      title: "Duas Collection",
      icon: <FaMosque className="w-8 h-8" />,
      description: "Comprehensive collection of daily duas with translations",
      link: "/duas-collection",
      color: "bg-blue-500"
    },
    {
      title: "Kids Learning",
      icon: <FaBook className="w-8 h-8" />,
      description: "Interactive Islamic learning materials for children",
      link: "/kids-learning",
      color: "bg-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="relative pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Islamic Learning Resources
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Access our comprehensive collection of Islamic educational materials, guides, and tools
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {featuredResources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${resource.color} text-white p-3 rounded-xl inline-block mb-4`}>
                {resource.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                {resource.title}
              </h3>
              <p className="text-gray-600">
                {resource.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Resource Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 last:mb-0"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {category.resources.map((resource, resourceIndex) => (
                <motion.div
                  key={resourceIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {resource.isComponent ? (
                    resource.component
                  ) : (
                    <a 
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                            {resource.title}
                          </h3>
                          <p className="text-gray-600 mb-4">{resource.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              {resource.type === "PDF" ? <FaFileDownload className="mr-2" /> :
                               resource.type === "Video" ? <FaPlayCircle className="mr-2" /> :
                               <FaBook className="mr-2" />}
                              {resource.type}
                            </span>
                            {resource.size && (
                              <span className="flex items-center">
                                <FaDownload className="mr-2" />
                                {resource.size}
                              </span>
                            )}
                            {resource.duration && (
                              <span className="flex items-center">
                                <FaClock className="mr-2" />
                                {resource.duration}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-gray-400 group-hover:text-green-600 transition-colors">
                          {resource.external ? <FaExternalLinkAlt /> : <FaDownload />}
                        </div>
                      </div>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const PrayerTimesCalculator = () => {
  const [prayerTimes, setPrayerTimes] = useState({
    fajr: "4:30 AM",
    sunrise: "6:15 AM",
    dhuhr: "12:30 PM",
    asr: "3:45 PM",
    maghrib: "6:30 PM",
    isha: "8:00 PM"
  });
  const [date, setDate] = useState(new Date());

  const prayers = [
    { name: 'Fajr', icon: <FaMosque className="w-4 h-4" />, color: 'bg-blue-500' },
    { name: 'Sunrise', icon: <FaSun className="w-4 h-4" />, color: 'bg-orange-500' },
    { name: 'Dhuhr', icon: <FaMosque className="w-4 h-4" />, color: 'bg-yellow-500' },
    { name: 'Asr', icon: <FaMosque className="w-4 h-4" />, color: 'bg-green-500' },
    { name: 'Maghrib', icon: <FaMosque className="w-4 h-4" />, color: 'bg-purple-500' },
    { name: 'Isha', icon: <FaMosque className="w-4 h-4" />, color: 'bg-indigo-500' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md w-full max-w-md mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 p-4">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <h3 className="text-lg font-semibold">Prayer Times</h3>
            <p className="text-sm text-green-50 mt-0.5">Pakistan Standard Time</p>
          </div>
          <input
            type="date"
            value={date.toISOString().split('T')[0]}
            onChange={(e) => setDate(new Date(e.target.value))}
            className="px-2 py-1 text-sm rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-1 focus:ring-white/50"
          />
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {prayers.map((prayer) => (
            <motion.div
              key={prayer.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-1.5 rounded-md ${prayer.color} text-white`}>
                  {prayer.icon}
                </div>
                <span className="font-medium text-gray-700 text-sm sm:text-base">
                  {prayer.name}
                </span>
              </div>
              <span className="text-gray-600 font-semibold text-sm sm:text-base">
                {prayerTimes[prayer.name.toLowerCase()]}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 text-center text-xs text-gray-500">
          Prayer times for Pakistan
        </div>
      </div>
    </div>
  );
};

export default Resources; 
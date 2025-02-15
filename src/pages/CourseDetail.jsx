import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBookOpen, FaClock, FaUsers, FaCheckCircle, FaArrowLeft, FaStar, FaGraduationCap, FaChalkboardTeacher, FaLanguage, FaBook, FaVideo, FaCertificate, FaWhatsapp, FaSkype, FaInstagram, FaFacebook } from 'react-icons/fa';
import { courses } from '../data/courses';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === parseInt(courseId));

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Course not found</h1>
          <Link to="/courses" className="text-green-600 hover:text-green-700 mt-4 inline-block">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const courseHighlights = [
    { 
      icon: <FaGraduationCap className="w-5 h-5" />, 
      title: "Level", 
      value: course.category 
    },
    { 
      icon: <FaChalkboardTeacher className="w-5 h-5" />, 
      title: "Teachers", 
      value: "Expert Scholars" 
    },
    { 
      icon: <FaLanguage className="w-5 h-5" />, 
      title: "Language", 
      value: "English/Arabic" 
    },
    { 
      icon: <FaCertificate className="w-5 h-5" />, 
      title: "Certificate", 
      value: "Included" 
    }
  ];

  const curriculum = [
    {
      week: "Week 1-2",
      title: "Foundation",
      topics: ["Basic Concepts", "Introduction to Course", "Fundamental Principles"]
    },
    {
      week: "Week 3-4",
      title: "Core Learning",
      topics: ["Advanced Techniques", "Practical Applications", "Interactive Sessions"]
    },
    {
      week: "Week 5-6",
      title: "Advanced Topics",
      topics: ["Specialized Content", "Real-world Practice", "Assessment Methods"]
    }
  ];

  const contactOptions = [
    { 
      icon: <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />, 
      label: "WhatsApp",
      value: "+92 340 5052017",
      link: "https://wa.me/923405052017",
      color: "bg-green-500"
    },
    { 
      icon: <FaSkype className="w-4 h-4 sm:w-5 sm:h-5" />, 
      label: "Skype",
      value: "live:.cid.xxxxx",
      link: "skype:live:.cid.xxxxx?chat",
      color: "bg-blue-500"
    },
    { 
      icon: <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />, 
      label: "Instagram",
      value: "@quranteacher",
      link: "https://instagram.com/quranteacher",
      color: "bg-pink-500"
    },
    { 
      icon: <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5" />, 
      label: "Facebook",
      value: "Quran Teaching",
      link: "https://facebook.com/quranteaching",
      color: "bg-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pb-32">
          <Link 
            to="/courses"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft className="mr-2 w-4 h-4" /> Back to Courses
          </Link>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
                  {course.category}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500 text-white">
                  {course.price}
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {course.title}
              </h1>
              
              <p className="text-base sm:text-lg text-white/80">
                {course.description}
              </p>
              
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center">
                  <FaStar className="w-5 h-5 text-amber-400 mr-1" />
                  <span className="text-white font-bold">{course.rating}</span>
                  <span className="text-white/80 ml-1">/5.0</span>
                </div>
                <div className="text-white/80">
                  <FaUsers className="inline mr-2" />
                  {course.students} students
                </div>
              </div>
            </motion.div>

            <div className="hidden md:block">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={course.image}
                alt={course.title}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section with Negative Margin */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-24 relative z-10">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Course Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {courseHighlights.map((highlight, index) => (
                  <div key={index} className="text-center p-3">
                    <div className="w-10 h-10 mx-auto bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-2">
                      {highlight.icon}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-500">{highlight.title}</div>
                    <div className="text-sm sm:text-base font-semibold text-gray-900">{highlight.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Course Overview */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
              <div className="prose max-w-none text-gray-600">
                <p>{course.description}</p>
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">What You'll Learn</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Curriculum */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {curriculum.map((section, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                      <span className="text-sm text-gray-500">{section.week}</span>
                    </div>
                    <ul className="space-y-2">
                      {section.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <FaVideo className="w-4 h-4 text-green-500 mr-2" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 sticky top-24"
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{course.price}</div>
                  <div className="text-sm text-gray-600">per month</div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaClock className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3" />
                    Duration: {course.duration}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaBook className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3" />
                    Full course material
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaCertificate className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3" />
                    Certificate included
                  </div>
                </div>

                {/* Contact Options */}
                <div className="border-t pt-4 sm:pt-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 text-center">
                    Contact Us to Enroll
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    {contactOptions.map((option, index) => (
                      <a
                        key={index}
                        href={option.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 sm:p-3 rounded-lg border hover:border-gray-300 transition-colors duration-300 group"
                      >
                        <div className={`${option.color} text-white p-2 rounded-lg mr-2 sm:mr-3`}>
                          {option.icon}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-medium text-gray-900">
                            {option.label}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-500">
                            {option.value}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="text-center text-xs sm:text-sm text-gray-500">
                  Contact us for a free trial class
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail; 
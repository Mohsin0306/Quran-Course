import { motion } from 'framer-motion';
import { FaBookOpen, FaQuran, FaBrain, FaBook, FaMosque, FaLanguage, FaClock, FaUsers, FaArrowRight, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50/30 pt-14 md:pt-20">
      {/* Modern Header Section - More Compact for Mobile */}
      <div className="relative bg-white py-8 sm:py-12 md:py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 hidden lg:block"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Text Content - Optimized for Mobile */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center lg:text-left"
              >
                <div className="inline-flex items-center justify-center px-3 py-1 mb-3 md:mb-6 rounded-full bg-green-50 border border-green-100">
                  <span className="text-xs md:text-sm font-medium text-green-600">
                    Our Programs
                  </span>
                </div>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                  Discover Our Islamic Courses
                </h1>
                <p className="mt-2 md:mt-4 text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl">
                  Embark on your journey of Islamic learning with our comprehensive courses.
                </p>

                {/* Stats - More Compact for Mobile */}
                <div className="mt-4 md:mt-8 flex items-center justify-center lg:justify-start space-x-6 md:space-x-8">
                  <div>
                    <div className="text-xl md:text-3xl font-bold text-green-600">
                      {courses.length}+
                    </div>
                    <div className="text-xs md:text-sm text-gray-500">
                      Courses
                    </div>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="flex items-center text-xl md:text-3xl font-bold text-green-600">
                      4.9 <FaStar className="ml-1 w-4 h-4 md:w-5 md:h-5 text-amber-400" />
                    </div>
                    <div className="text-xs md:text-sm text-gray-500">
                      Rating
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Image - Hidden on Mobile */}
            <div className="hidden lg:block lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative h-full"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
                  src="https://www.tarteelequran.com/wp-content/uploads/2021/06/Learn-Islamic-Studies-Online-for-kids-and-Adults.png"
                  alt="Islamic Education"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-600/10 to-transparent rounded-2xl"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid - Updated for better mobile responsiveness */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <Link to={`/courses/${course.id}`} className="block">
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Course Image - Reduced height for mobile */}
                <div className="relative h-32 sm:h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="inline-block px-2 py-0.5 rounded-lg text-[10px] sm:text-xs font-medium bg-white/90 text-green-700">
                      {course.category}
                    </span>
                  </div>
                </div>

                {/* Course Content - Optimized for mobile */}
                <div className="p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                      {course.icon}
                    </div>
                    <div className="flex items-center text-amber-500">
                      <FaStar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="ml-1 text-xs sm:text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Features - Hidden on mobile, visible on larger screens */}
                  <ul className="hidden sm:block space-y-1 mb-3">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-xs text-gray-600">
                        <span className="w-1 h-1 rounded-full bg-green-500 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price and Duration - Compact on mobile */}
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <FaClock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-green-600" />
                      {course.duration}
                    </div>
                    <div className="font-semibold text-green-600">
                      {course.price}
                    </div>
                  </div>

                  {/* Action Button - Smaller on mobile */}
                  <Link 
                    to={`/courses/${course.id}`}
                    className="block w-full py-1.5 sm:py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-center rounded-lg text-xs sm:text-sm font-medium transition-colors duration-300"
                  >
                    Enroll Now
                  </Link>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
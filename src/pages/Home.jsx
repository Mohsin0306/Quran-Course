import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaQuran, FaBookOpen, FaLanguage, FaPray, FaUserGraduate, FaClock, FaGlobe, FaAward, FaArrowRight, FaBookReader, FaBrain, FaBook, FaMosque, FaPhoneAlt, FaStar, FaCheckCircle, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaChevronRight, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaTimes, FaSkype } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activePopup, setActivePopup] = useState(null);
  const navigate = useNavigate();

  const backgroundSlides = [
    {
      desktop: "https://e1.pxfuel.com/desktop-wallpaper/574/419/desktop-wallpaper-holy-quran-beautiful-holy-islamic-quran-islamic-tasbih.jpg",
      mobile: "https://images.pexels.com/photos/7249294/pexels-photo-7249294.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Learn Quran Online",
      subtitle: "Start your spiritual journey with expert guidance"
    },
    {
      desktop: "https://i.pinimg.com/originals/d9/de/06/d9de06c16c1f81ce3557d22519e0810e.jpg",
      mobile: "https://images.pexels.com/photos/8164567/pexels-photo-8164567.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Expert Islamic Teachers",
      subtitle: "Learn from qualified scholars worldwide"
    },
    {
      desktop: "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=2070&auto=format&fit=crop",
      mobile: "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=2070&auto=format&fit=crop&h=1200&w=800",
      title: "Flexible Learning",
      subtitle: "Study at your own pace, anywhere, anytime"
    }
  ];

  const handleSlideChange = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  useEffect(() => {
    const autoSlide = () => {
      if (!isTransitioning) {
        const nextIndex = (currentSlide + 1) % backgroundSlides.length;
        handleSlideChange(nextIndex);
      }
    };

    const timer = setInterval(autoSlide, 3000);

    return () => clearInterval(timer);
  }, [currentSlide, isTransitioning]);

  const features = [
    { icon: <FaUserGraduate />, title: "Expert Teachers", description: "Learn from qualified and experienced Islamic scholars" },
    { icon: <FaClock />, title: "Flexible Timing", description: "Choose your convenient time for classes" },
    { icon: <FaGlobe />, title: "Online Learning", description: "Study from anywhere in the world" },
    { icon: <FaAward />, title: "Certification", description: "Receive recognized certificates upon completion" }
  ];

  const whatsappOptions = [
    {
      text: "Technical Support",
      initialMessage: "Hi, I need technical support for my online classes.",
      number: "923313269415"
    },
    {
      text: "Course Information",
      initialMessage: "Hi, I would like to get information about your courses.",
      number: "923313269415"
    },
    {
      text: "Free Trial Class",
      initialMessage: "Hi, I'm interested in booking a free trial class.",
      number: "923313269415"
    }
  ];

  const socialOptions = [
    {
      id: 'whatsapp',
      icon: <FaWhatsapp className="w-5 h-5" />,
      color: 'bg-[#25D366] hover:bg-[#128C7E]',
      shadowColor: 'shadow-[#25D366]/20',
      textColor: 'text-[#25D366]',
      title: 'WhatsApp Chat',
      options: [
        {
          text: "Technical Support",
          initialMessage: "Hi, I need technical support for my online classes.",
          number: "923405052017"
        },
        {
          text: "Course Information",
          initialMessage: "Hi, I would like to get information about your courses.",
          number: "923405052017"
        },
        {
          text: "Free Trial Class",
          initialMessage: "Hi, I'm interested in booking a free trial class.",
          number: "923405052017"
        }
      ]
    },
    {
      id: 'skype',
      icon: <FaSkype className="w-5 h-5" />,
      color: 'bg-[#00AFF0] hover:bg-[#0078A0]',
      shadowColor: 'shadow-[#00AFF0]/20',
      textColor: 'text-[#00AFF0]',
      title: 'Skype Chat',
      link: 'skype:live:.cid.xxxxx?chat'
    },
    {
      id: 'facebook',
      icon: <FaFacebook className="w-5 h-5" />,
      color: 'bg-[#1877F2] hover:bg-[#0C4A9E]',
      shadowColor: 'shadow-[#1877F2]/20',
      textColor: 'text-[#1877F2]',
      title: 'Facebook',
      link: 'https://facebook.com/yourpage'
    },
    {
      id: 'instagram',
      icon: <FaInstagram className="w-5 h-5" />,
      color: 'bg-gradient-to-tr from-[#FF7A00] via-[#E31C79] to-[#C13584] hover:from-[#E56D00] hover:via-[#C1175F] hover:to-[#A02D6E]',
      shadowColor: 'shadow-[#E31C79]/20',
      textColor: 'text-[#E31C79]',
      title: 'Instagram',
      link: 'https://www.instagram.com/mohsin__ashraf_?igsh=MWxwM2x0Z3c1dGw0OQ=='
    }
  ];

  const handleViewAllCourses = () => {
    // Navigate to courses page and force a reload
    window.location.href = '/courses';
    // Alternative approach:
    // navigate('/courses');
    // window.location.reload();
  };

  const courseImages = {
    'Basic Quran Reading': [
      "https://images.pexels.com/photos/6204081/pexels-photo-6204081.jpeg?auto=compress&cs=tinysrgb&w=100",
      "https://images.pexels.com/photos/6204087/pexels-photo-6204087.jpeg?auto=compress&cs=tinysrgb&w=100",
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500?auto=compress&cs=tinysrgb&w=100"
    ],
    'Tajweed Course': [
      "https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=100",
      "https://images.pexels.com/photos/6204276/pexels-photo-6204276.jpeg?auto=compress&cs=tinysrgb&w=100",
      "https://images.pexels.com/photos/6204956/pexels-photo-6204956.jpeg?auto=compress&cs=tinysrgb&w=100"
    ],
    'Hifz Program': [
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
      "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=100",
      "https://images.pexels.com/photos/4064826/pexels-photo-4064826.jpeg?auto=compress&cs=tinysrgb&w=100"
    ],
    'Arabic Language': [
      "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=100",
      "https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=100",
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100"
    ],
    'Islamic Studies': [
      "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=100",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100",
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
    ],
    'Quran Translation': [
      "https://images.pexels.com/photos/6204947/pexels-photo-6204947.jpeg?auto=compress&cs=tinysrgb&w=100",
      "https://images.pexels.com/photos/6204948/pexels-photo-6204948.jpeg?auto=compress&cs=tinysrgb&w=100",
      "https://images.pexels.com/photos/6204949/pexels-photo-6204949.jpeg?auto=compress&cs=tinysrgb&w=100"
    ]
  };

  const getProfileImages = (courseTitle) => {
    return courseImages[courseTitle] || courseImages['Basic Quran Reading'];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-16">
        <div className="relative h-[calc(100vh-4rem)] min-h-[600px] max-h-[900px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transform"
                style={{
                  backgroundImage: `url(${
                    window.innerWidth <= 768 
                      ? backgroundSlides[currentSlide].mobile 
                      : backgroundSlides[currentSlide].desktop
                  })`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-full flex flex-col justify-center">
              <div className="w-full max-w-3xl mx-auto md:mx-0 space-y-6 md:space-y-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl sm:text-2xl md:text-3xl text-green-400 font-arabic text-center md:text-left"
                >
                  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
                </motion.div>

                <div className="space-y-3 md:space-y-4">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-base sm:text-lg md:text-xl text-green-400 font-medium tracking-wider uppercase text-center md:text-left"
                  >
                    Welcome to
                  </motion.h2>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight text-center md:text-left"
                  >
                    <span className="inline-block">Islamic</span>{' '}
                    <span className="inline-block relative">
                      Education
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-600"></span>
                    </span>
                  </motion.h1>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center justify-center md:justify-start space-x-4 text-white/80"
                  >
                    <span className="hidden md:block w-12 h-[2px] bg-green-400"></span>
                    <span className="text-lg sm:text-xl">Online Quran Academy</span>
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed text-center md:text-left mx-auto md:mx-0"
                >
                  Embark on a transformative journey of Islamic learning with expert guidance
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-row gap-3 justify-center md:justify-start pt-4"
                >
                  <Link
                    to="/courses"
                    className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:shadow-green-500/50 transition-all duration-300 text-sm sm:text-base flex-1 sm:flex-none"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Explore Courses
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform hidden sm:inline-block" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                  
                  <a
                    href="skype:live:.cid.xxxxx?chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base flex-1 sm:flex-none bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <FaSkype className="mr-2" />
                      Skype Chat
                    </span>
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 pt-6 sm:pt-8"
                >
                  {features.slice(0, 4).map((feature, index) => (
                    <div 
                      key={index} 
                      className="text-center px-2 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/5 backdrop-blur-sm"
                    >
                      <div className="text-green-400 text-xl sm:text-2xl mb-1 sm:mb-2">
                        {feature.icon}
                      </div>
                      <div className="text-white text-xs sm:text-sm font-medium">
                        {feature.title}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
              {backgroundSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ${
                    currentSlide === index 
                      ? 'bg-green-400 w-6 sm:w-8' 
                      : 'bg-white/50 w-3 sm:w-4 hover:bg-white/80'
                  }`}
                  disabled={isTransitioning}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="text-green-600 text-sm md:text-base font-medium uppercase tracking-wider">Our Features</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-3">
              Why Choose Our Academy?
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Experience the perfect blend of traditional Islamic education with modern teaching methods
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: <FaQuran />,
                title: "Expert Teachers",
                description: "Learn from certified scholars",
                features: [
                  "Qualified Islamic scholars",
                  "Native Arabic speakers",
                  "Years of teaching experience",
                  "Certified teaching methods"
                ]
              },
              {
                icon: <FaGlobe />,
                title: "Flexible Learning",
                description: "Study anytime, anywhere",
                features: [
                  "24/7 class scheduling",
                  "Learn from any device",
                  "Recorded sessions",
                  "Flexible pace learning"
                ]
              },
              {
                icon: <FaBookOpen />,
                title: "Personal Attention",
                description: "One-on-one sessions",
                features: [
                  "Individual attention",
                  "Personalized feedback",
                  "Progress tracking",
                  "Custom learning plans"
                ]
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 md:p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600 text-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {feature.features.map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <svg 
                        className="w-4 h-4 text-green-500 flex-shrink-0" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-green-600 text-sm font-medium hover:text-green-700 transition-colors duration-200 group flex items-center">
                    Learn more 
                    <svg 
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Your Learning Path
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mt-3 mb-4"></div>
          </motion.div>

          <div className="hidden md:block relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-green-400 to-emerald-600"></div>
            
            {[
              {
                step: "01",
                title: "Basic Qaida",
                desc: "Master the fundamentals of Arabic letters and pronunciation",
                icon: <FaBookOpen className="w-6 h-6" />,
                align: "right"
              },
              {
                step: "02",
                title: "Tajweed Rules",
                desc: "Learn the proper rules of Quranic recitation",
                icon: <FaQuran className="w-6 h-6" />,
                align: "left"
              },
              {
                step: "03",
                title: "Quran Reading",
                desc: "Practice reading Quran with implemented tajweed",
                icon: <FaBookReader className="w-6 h-6" />,
                align: "right"
              },
              {
                step: "04",
                title: "Hifz Program",
                desc: "Begin your journey of Quran memorization",
                icon: <FaAward className="w-6 h-6" />,
                align: "left"
              },
            ].map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: path.align === "left" ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative w-1/2 mb-16 ${
                  path.align === "left" ? "ml-0 mr-auto" : "ml-auto mr-0"
                } ${index === 3 ? "mb-0" : ""}`}
              >
                <div className={`flex items-center gap-4 ${
                  path.align === "left" ? "flex-row" : "flex-row-reverse"
                }`}>
                  <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white text-lg md:text-xl font-bold shadow-lg">
                    {path.step}
                  </div>

                  <div className="flex-1 bg-gray-50 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className={`flex items-start gap-3 ${
                      path.align === "left" ? "" : "flex-row-reverse text-right"
                    }`}>
                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{path.title}</h3>
                        <p className="text-xs md:text-sm text-gray-600">{path.desc}</p>
                      </div>
                      <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                        path.align === "left" ? "bg-green-50" : "bg-emerald-50"
                      } text-green-600`}>
                        {path.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {index < 3 && (
                  <div className={`absolute ${
                    path.align === "left" 
                      ? "-right-1/2 translate-x-1/2" 
                      : "-left-1/2 -translate-x-1/2"
                  } top-1/2 w-1/2 h-0.5 bg-gradient-to-r from-green-500 to-emerald-600`}></div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="md:hidden">
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Basic Qaida",
                  desc: "Master the fundamentals of Arabic letters and pronunciation",
                  icon: <FaBookOpen className="w-5 h-5" />,
                  color: "from-green-500 to-emerald-600"
                },
                {
                  step: "02",
                  title: "Tajweed Rules",
                  desc: "Learn the proper rules of Quranic recitation",
                  icon: <FaQuran className="w-5 h-5" />,
                  color: "from-emerald-500 to-green-600"
                },
                {
                  step: "03",
                  title: "Quran Reading",
                  desc: "Practice reading Quran with implemented tajweed",
                  icon: <FaBookReader className="w-5 h-5" />,
                  color: "from-green-600 to-emerald-500"
                },
                {
                  step: "04",
                  title: "Hifz Program",
                  desc: "Begin your journey of Quran memorization",
                  icon: <FaAward className="w-5 h-5" />,
                  color: "from-emerald-600 to-green-500"
                },
              ].map((path, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-stretch bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className={`w-2 bg-gradient-to-b ${path.color}`} />
                    <div className={`w-14 flex-shrink-0 bg-gradient-to-br ${path.color} flex flex-col items-center justify-center text-white py-3`}>
                      <span className="text-xs font-medium">STEP</span>
                      <span className="text-xl font-bold">{path.step}</span>
                    </div>

                    <div className="flex-1 p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-bold text-gray-900">{path.title}</h3>
                        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                          {path.icon}
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">{path.desc}</p>
                    </div>
                  </div>

                  {index < 3 && (
                    <div className="absolute -bottom-4 left-16 w-0.5 h-4 bg-gradient-to-b from-green-500 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-600 text-sm font-medium uppercase tracking-wider">Our Programs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Comprehensive Islamic Education
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of carefully designed courses to begin your spiritual journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 6).map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white">
                      {course.category}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500 text-white">
                      {course.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                      {course.icon}
                    </div>
                    <span className="text-sm text-gray-500">
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <Link 
                      to={`/courses/${course.id}`}
                      className="text-green-600 font-medium text-sm group-hover:text-green-700 transition-colors duration-300 flex items-center gap-2"
                    >
                      Learn More
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <div className="flex -space-x-2">
                      {getProfileImages(course.title).map((image, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110"
                        >
                          <img 
                            src={image} 
                            alt={`${course.title} Teacher ${i + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Courses Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button 
              onClick={handleViewAllCourses}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-colors duration-300"
            >
              View All Courses
              <FaArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Ultra Modern CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Modern Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute -top-48 left-1/2 -translate-x-1/2 transform">
            <div className="w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-green-600/5 to-emerald-600/5 blur-3xl"></div>
          </div>
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 transform">
            <div className="w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-green-600/5 to-emerald-600/5 blur-3xl"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Content Container */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                      Start Learning Today
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                      Begin Your Islamic 
                      <span className="block mt-1 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        Journey Today
                      </span>
                    </h2>
                    <p className="text-lg text-gray-600">
                      Take the first step towards deepening your Islamic knowledge with our free trial classes
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/courses"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-colors duration-300"
                    >
                      Explore Our Courses
                      <FaArrowRight className="ml-2" />
                    </Link>
                    <a
                      href="tel:+923405052017"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-green-600 font-medium border-2 border-green-600 hover:bg-green-50 transition-colors duration-300"
                    >
                      <FaPhone className="mr-2" />
                      Call Us Now
                    </a>
                  </div>

                  {/* Trust Indicators - Better Mobile Layout */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      {[
                        { 
                          number: "10+", 
                          label: "Students",
                          icon: <FaUserGraduate className="w-4 h-4 sm:w-5 sm:h-5" />
                        },
                        { 
                          number: "4.9/5", 
                          label: "Rating",
                          icon: <FaStar className="w-4 h-4 sm:w-5 sm:h-5" />
                        },
                        { 
                          number: "100%", 
                          label: "Satisfaction",
                          icon: <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        },
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white/50 backdrop-blur-sm border border-white/60 rounded-lg p-2 sm:p-4"
                        >
                          <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-green-50 text-green-600 mb-2">
                              {stat.icon}
                            </div>
                            <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
                              {stat.number}
                            </div>
                            <div className="text-[10px] sm:text-sm text-gray-600 mt-0.5">
                              {stat.label}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Content - Larger Icons */}
                <div className="relative hidden lg:block">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-emerald-100/20 rounded-2xl backdrop-blur-3xl"></div>
                  <div className="relative p-8">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { icon: <FaQuran className="w-12 h-12 text-green-600" />, label: "Quran" },
                        { icon: <FaBookOpen className="w-12 h-12 text-green-600" />, label: "Learning" },
                        { icon: <FaPray className="w-12 h-12 text-green-600" />, label: "Prayer" },
                        { icon: <FaMosque className="w-12 h-12 text-green-600" />, label: "Islamic" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="aspect-square rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 flex flex-col items-center justify-center border border-white/60 hover:shadow-lg transition-shadow duration-300"
                        >
                          {item.icon}
                          <span className="mt-3 text-sm font-medium text-gray-600">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Contact Menu */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Main Contact Button with Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsContactOpen(!isContactOpen);
              setActivePopup(null);
            }}
            className="bg-white text-gray-700 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isContactOpen ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isContactOpen ? (
                <FaTimes className="w-6 h-6 text-red-500" />
              ) : (
                <FaPhone className="w-6 h-6 text-green-500" />
              )}
            </motion.div>
          </motion.button>

          {/* Social Icons Circle Menu */}
          <AnimatePresence>
            {isContactOpen && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-20 right-0 flex flex-col-reverse gap-4"
              >
                {socialOptions.map((social, index) => (
                  <motion.button
                    key={social.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      if (social.id === 'whatsapp') {
                        setActivePopup('whatsapp');
                      } else if (social.link) {
                        window.open(social.link, '_blank');
                      }
                    }}
                    className={`${social.color} ${social.shadowColor} p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110`}
                  >
                    {social.icon}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Popup - Styling remains same but with updated colors */}
          <AnimatePresence>
            {activePopup === 'whatsapp' && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActivePopup(null)}
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="absolute bottom-24 right-0 w-[320px] bg-white rounded-2xl shadow-xl z-50"
                >
                  <div className="p-4 bg-[#25D366] text-white rounded-t-2xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FaWhatsapp className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">WhatsApp Chat</h3>
                        <p className="text-sm text-green-50">Usually replies instantly</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setActivePopup(null)}
                      className="p-1 hover:bg-white/20 rounded-full transition-colors"
                    >
                      <FaTimes className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-4">
                    <p className="text-gray-600 mb-4">
                      Hello! 👋 How can we help you today?
                    </p>

                    <div className="space-y-3">
                      {socialOptions[0].options.map((option, index) => (
                        <a
                          key={index}
                          href={`https://wa.me/${option.number}?text=${encodeURIComponent(option.initialMessage)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
                        >
                          <span className="text-gray-700 font-medium">{option.text}</span>
                          <FaArrowRight className="w-4 h-4 text-[#25D366] group-hover:translate-x-1 transition-transform" />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Modern Footer Section */}
      <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-gray-200 pt-20 pb-10">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 pb-12 border-b border-gray-800">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Quran Academy
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Empowering Muslims worldwide with authentic Islamic education through modern learning methods.
                </p>
                <div className="flex items-center space-x-3">
                  {[
                    { icon: <FaFacebook />, color: "hover:bg-blue-600" },
                    { icon: <FaTwitter />, color: "hover:bg-sky-500" },
                    { icon: <FaInstagram />, color: "hover:bg-pink-600" },
                    { icon: <FaYoutube />, color: "hover:bg-red-600" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-9 h-9 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center text-gray-400 ${social.color} hover:text-white transition-all duration-300 transform hover:scale-110`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {["About", "Courses", "Teachers", "Contact"].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link === "About" ? "/about" : link === "Courses" ? "/courses" : link === "Teachers" ? "/teachers" : "/contact"}
                      className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-green-400 mr-2 transition-colors duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Courses Section */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
                Our Courses
              </h4>
              <ul className="space-y-2">
                {[
                  "Norani Qaida",
                  "Quran Nazra",
                  "Quran Memorization",
                  "Tajweed Course",
                  "Arabic Language",
                  "Islamic Studies",
                  "Prayer & Worship",
                  "Advanced Quran Studies"
                ].map((course, index) => (
                  <li key={index}>
                    <Link
                      to={`/courses/${index + 1}`}
                      className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-green-400 mr-2 transition-colors duration-300"></span>
                      {course}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
                Get in Touch
              </h4>
              <ul className="space-y-3">
                {[
                  { icon: <FaPhone className="w-4 h-4" />, text: "+92 340 5052017" },
                  { icon: <FaEnvelope className="w-4 h-4" />, text: "info@quranacademy.com" },
                  { icon: <FaMapMarkerAlt className="w-4 h-4" />, text: "Lahore, Pakistan" },
                ].map((contact, index) => (
                  <li key={index}>
                    <a href="#" className="group flex items-center">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-800/50 backdrop-blur-sm flex items-center justify-center text-green-400 group-hover:bg-green-400 group-hover:text-white transition-all duration-300">
                        {contact.icon}
                      </span>
                      <span className="ml-3 text-sm text-gray-400 group-hover:text-green-400 transition-colors duration-300">
                        {contact.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-8">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Quran Academy. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="/privacy-policy"
                onClick={() => window.location.reload()}
                className="text-sm text-gray-500 hover:text-green-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                onClick={() => window.location.reload()}
                className="text-sm text-gray-500 hover:text-green-400 transition-colors duration-300"
              >
                Terms
              </a>
              <a
                href="/cookies"
                onClick={() => window.location.reload()}
                className="text-sm text-gray-500 hover:text-green-400 transition-colors duration-300"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home; 
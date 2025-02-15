import { motion } from 'framer-motion';
import { FaBook, FaQuran, FaMosque, FaKaaba, FaStar, 
         FaPray, FaHeart, FaHandHoldingHeart, FaChild } from 'react-icons/fa';

const KidsLearning = () => {
  const learningTopics = [
    {
      title: "Pillars of Islam",
      icon: <FaMosque className="w-6 h-6" />,
      color: "bg-blue-500",
      lessons: [
        {
          title: "Shahadah",
          description: "Learn about the declaration of faith and its meaning",
          keyPoints: [
            "Understanding what Shahadah means",
            "The importance of believing in One Allah",
            "Prophet Muhammad ﷺ as the final messenger"
          ],
          level: "Beginner"
        },
        {
          title: "Salah",
          description: "Learn about the five daily prayers",
          keyPoints: [
            "Prayer times and their importance",
            "How to perform wudu",
            "Basic prayer movements and duas"
          ],
          level: "Beginner"
        }
      ]
    },
    {
      title: "Islamic Character",
      icon: <FaHeart className="w-6 h-6" />,
      color: "bg-green-500",
      lessons: [
        {
          title: "Good Manners",
          description: "Learning about Islamic etiquettes and behavior",
          keyPoints: [
            "Saying Salam and its importance",
            "Respecting parents and elders",
            "Being kind to others"
          ],
          level: "All Ages"
        },
        {
          title: "Honesty",
          description: "Understanding the value of truthfulness",
          keyPoints: [
            "Why Allah loves honest people",
            "Stories of honest prophets",
            "Benefits of being truthful"
          ],
          level: "All Ages"
        }
      ]
    },
    {
      title: "Prophets' Stories",
      icon: <FaBook className="w-6 h-6" />,
      color: "bg-purple-500",
      lessons: [
        {
          title: "Prophet Adam (AS)",
          description: "The first human and prophet",
          keyPoints: [
            "Creation of Adam (AS)",
            "Life in Paradise",
            "Lessons from his story"
          ],
          level: "Beginner"
        },
        {
          title: "Prophet Nuh (AS)",
          description: "The story of the great flood",
          keyPoints: [
            "Building the ark",
            "Patience and perseverance",
            "Trust in Allah"
          ],
          level: "Intermediate"
        }
      ]
    },
    {
      title: "Daily Duas",
      icon: <FaPray className="w-6 h-6" />,
      color: "bg-yellow-500",
      lessons: [
        {
          title: "Morning & Evening Duas",
          description: "Essential daily supplications",
          keyPoints: [
            "Dua before sleeping",
            "Dua after waking up",
            "Dua before eating"
          ],
          level: "Beginner"
        },
        {
          title: "Protection Duas",
          description: "Duas for seeking Allah's protection",
          keyPoints: [
            "Importance of seeking protection",
            "Simple protection duas",
            "When to recite them"
          ],
          level: "Beginner"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="relative pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Learn Islam with Fun
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover the beautiful teachings of Islam through engaging lessons
            </p>
          </motion.div>
        </div>
      </div>

      {/* Learning Topics Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {learningTopics.map((topic, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 last:mb-0"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className={`w-12 h-12 ${topic.color} rounded-xl flex items-center justify-center text-white`}>
                {topic.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{topic.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {topic.lessons.map((lesson, lessonIndex) => (
                <motion.div
                  key={lessonIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {lesson.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{lesson.description}</p>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Key Learning Points:</span>
                        <ul className="mt-2 space-y-1 list-disc list-inside">
                          {lesson.keyPoints.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center pt-4 text-sm text-gray-500">
                        <FaChild className="mr-2" />
                        <span>Level: {lesson.level}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Parent's Guide Section */}
      <div className="bg-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Parent's Guide</h3>
            <p className="text-gray-600">
              These lessons are designed to be taught with parental guidance. 
              Take time to discuss each topic with your child and help them understand 
              the beautiful teachings of Islam through practical examples and daily practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsLearning; 
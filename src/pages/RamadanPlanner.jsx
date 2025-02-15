import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCalendarAlt, FaMoon, FaStar, FaBook, FaCheckCircle, FaClock, 
         FaUtensils, FaPray, FaQuran, FaHeart, FaHandHoldingHeart, FaUsers, 
         FaMosque, FaBookmark, FaListAlt, FaBell, FaRegCircle, FaBellSlash,
         FaTimes, FaMinus, FaPlus, FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';

const RamadanPlanner = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [completedTasks, setCompletedTasks] = useState({});
  const [activeTab, setActiveTab] = useState('daily');
  const [showReminder, setShowReminder] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [reminderTime, setReminderTime] = useState('');
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [showPermissionGuide, setShowPermissionGuide] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem('ramadanGoals');
    return savedGoals ? JSON.parse(savedGoals) : {
      quran: { target: 0, current: 0, unit: 'pages' },
      prayers: { target: 0, current: 0, unit: 'rakaat' },
      charity: { target: 0, current: 0, unit: 'amount' },
      dhikr: { target: 0, current: 0, unit: 'count' }
    };
  });

  const [editingGoal, setEditingGoal] = useState(null);

  useEffect(() => {
    // Load saved progress from localStorage
    const savedProgress = localStorage.getItem('ramadanProgress');
    if (savedProgress) {
      setCompletedTasks(JSON.parse(savedProgress));
    }

    // Load notification preferences from localStorage
    const savedNotifications = localStorage.getItem('ramadanNotifications');
    const savedReminderTime = localStorage.getItem('ramadanReminderTime');
    if (savedNotifications) {
      setNotifications(JSON.parse(savedNotifications));
    }
    if (savedReminderTime) {
      setReminderTime(savedReminderTime);
    }

    checkNotificationPermission();
  }, []);

  const checkNotificationPermission = async () => {
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications');
      return;
    }

    const permission = await Notification.permission;
    if (permission === 'denied') {
      setPermissionDenied(true);
    }
  };

  const saveProgress = (newProgress) => {
    setCompletedTasks(newProgress);
    localStorage.setItem('ramadanProgress', JSON.stringify(newProgress));
  };

  const toggleTask = (day, taskId) => {
    const newProgress = {
      ...completedTasks,
      [day]: {
        ...completedTasks[day],
        [taskId]: !completedTasks[day]?.[taskId]
      }
    };
    saveProgress(newProgress);
  };

  const toggleNotifications = async () => {
    if (!('Notification' in window)) {
      alert('Your browser does not support notifications');
      return;
    }

    if (Notification.permission === 'denied') {
      setShowPermissionGuide(true);
      return;
    }

    if (!notifications) {
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          setNotifications(true);
          setShowReminderModal(true);
          localStorage.setItem('ramadanNotifications', 'true');
        } else if (permission === 'denied') {
          setPermissionDenied(true);
          setShowPermissionGuide(true);
        }
      } catch (error) {
        console.error('Error requesting notification permission:', error);
      }
    } else {
      setNotifications(false);
      localStorage.setItem('ramadanNotifications', 'false');
      localStorage.removeItem('ramadanReminderTime');
      setReminderTime('');
    }
  };

  const handleReminderTimeSet = (time) => {
    setReminderTime(time);
    localStorage.setItem('ramadanReminderTime', time);
    setShowReminderModal(false);
    
    // Show confirmation notification
    if (Notification.permission === 'granted') {
      new Notification('Ramadan Planner Reminders Set', {
        body: `You will receive daily reminders at ${time}`,
        icon: '/path-to-your-icon.png' // Add your app icon path
      });
    }
  };

  // Reminder Modal Component
  const ReminderModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white rounded-xl p-6 max-w-md w-full mx-4"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Set Daily Reminder</h3>
          <button
            onClick={() => setShowReminderModal(false)}
            className="text-gray-400 hover:text-gray-500"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-gray-600 mb-4">
          Choose when you'd like to receive daily reminders for your Ramadan tasks.
        </p>

        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-2">Reminder Time</label>
            <input
              type="time"
              value={reminderTime}
              onChange={(e) => handleReminderTimeSet(e.target.value)}
              className="rounded-lg border-gray-300 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div className="bg-green-50 rounded-lg p-4 text-sm text-green-700">
            <FaCheckCircle className="inline-block mr-2" />
            Notifications will be sent daily at your selected time
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  // Permission Guide Modal
  const PermissionGuideModal = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="bg-white rounded-xl p-4 max-w-md w-full"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Enable Notifications</h3>
            <button
              onClick={() => setShowPermissionGuide(false)}
              className="text-gray-400 hover:text-gray-500"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {isMobile ? (
            <div className="space-y-3">
              <p className="text-gray-600 text-sm">To enable notifications:</p>
              <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
                <li>Open your browser settings (tap the three dots ⋮)</li>
                <li>Go to Settings → Site Settings</li>
                <li>Find and tap on Notifications</li>
                <li>Find this website and allow notifications</li>
                <li>Return to this page and try again</li>
              </ol>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-gray-600 text-sm">To enable notifications:</p>
              <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
                <li>Click the lock/info icon in your browser's address bar</li>
                <li>Find "Notifications" in the site settings</li>
                <li>Change the setting to "Allow"</li>
                <li>Refresh this page and try again</li>
              </ol>
            </div>
          )}

          <div className="mt-4 flex justify-end space-x-3">
            <button
              onClick={() => setShowPermissionGuide(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Close
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg"
            >
              Refresh Page
            </button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const dailyTasks = [
    { 
      id: 'quran',
      icon: <FaQuran />, 
      title: "Quran Reading", 
      description: "Daily recitation goal",
      target: "Minimum 1 page",
      color: "bg-blue-100 text-blue-600"
    },
    { 
      id: 'taraweeh',
      icon: <FaPray />, 
      title: "Taraweeh", 
      description: "Night prayers",
      target: "20 rakaat",
      color: "bg-purple-100 text-purple-600"
    },
    { 
      id: 'meals',
      icon: <FaUtensils />, 
      title: "Meal Planning", 
      description: "Suhoor & Iftar",
      target: "Healthy & balanced",
      color: "bg-green-100 text-green-600"
    },
    { 
      id: 'deeds',
      icon: <FaHeart />, 
      title: "Good Deeds", 
      description: "Daily acts of kindness",
      target: "At least one act",
      color: "bg-red-100 text-red-600"
    },
    { 
      id: 'study',
      icon: <FaBook />, 
      title: "Islamic Study", 
      description: "Learn something new",
      target: "15 minutes minimum",
      color: "bg-yellow-100 text-yellow-600"
    },
    { 
      id: 'charity',
      icon: <FaHandHoldingHeart />, 
      title: "Charity", 
      description: "Help others",
      target: "Any amount",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  const tabs = [
    { id: 'daily', label: 'Daily Tracker', icon: <FaListAlt /> },
    { id: 'preparation', label: 'Preparation', icon: <FaMoon /> },
    { id: 'goals', label: 'Goals', icon: <FaStar /> }
  ];

  const preparationGuide = [
    {
      title: "Spiritual Preparation",
      icon: <FaMosque className="w-6 h-6" />,
      color: "bg-purple-500",
      categories: [
        {
          title: "Quran Journey",
          description: "Strengthen your connection with the Quran",
          tasks: [
            { text: "Set a daily Quran reading goal (minimum 1 page)", isRequired: true },
            { text: "Practice Tajweed rules with online resources", isRequired: true },
            { text: "Join a Tafseer study circle", isRequired: false },
            { text: "Download Quran app with translations", isRequired: false },
            { text: "Create a Quran reading schedule", isRequired: true }
          ],
          resources: [
            { title: "Quran.com - For reading and listening", link: "#" },
            { title: "Tajweed Rules PDF Guide", link: "#" }
          ]
        },
        {
          title: "Prayer Enhancement",
          description: "Improve your prayer quality and consistency",
          tasks: [
            { text: "Learn the meanings of prayer recitations", isRequired: true },
            { text: "Practice voluntary prayers (Sunnah)", isRequired: false },
            { text: "Memorize new duas for Taraweeh", isRequired: true },
            { text: "Set up a dedicated prayer space", isRequired: true },
            { text: "Plan for I'tikaf in last 10 days", isRequired: false }
          ],
          resources: [
            { title: "Prayer Times App", link: "#" },
            { title: "Dua Collection PDF", link: "#" }
          ]
        },
        {
          title: "Personal Development",
          description: "Focus on self-improvement",
          tasks: [
            { text: "Start a daily dhikr routine", isRequired: true },
            { text: "Read Islamic books (30 mins daily)", isRequired: false },
            { text: "Practice patience exercises", isRequired: true },
            { text: "Control anger and negative emotions", isRequired: true },
            { text: "Maintain a gratitude journal", isRequired: false }
          ]
        }
      ]
    },
    {
      title: "Physical & Health Preparation",
      icon: <FaUtensils className="w-6 h-6" />,
      color: "bg-green-500",
      categories: [
        {
          title: "Nutrition Planning",
          description: "Prepare your body for fasting",
          tasks: [
            { text: "Create a balanced Suhoor meal plan", isRequired: true },
            { text: "Stock up on dates and fruits", isRequired: true },
            { text: "Prepare healthy Iftar options", isRequired: true },
            { text: "Plan hydration schedule", isRequired: true },
            { text: "Reduce caffeine intake gradually", isRequired: false }
          ],
          resources: [
            { title: "Healthy Ramadan Recipes", link: "#" },
            { title: "Nutrition Guide PDF", link: "#" }
          ]
        },
        {
          title: "Sleep Schedule",
          description: "Adjust your sleep routine",
          tasks: [
            { text: "Gradually adjust sleep schedule", isRequired: true },
            { text: "Plan power naps during the day", isRequired: false },
            { text: "Create a pre-Suhoor wake-up plan", isRequired: true },
            { text: "Set up multiple alarm systems", isRequired: true },
            { text: "Prepare comfortable sleeping area", isRequired: false }
          ]
        },
        {
          title: "Physical Wellness",
          description: "Maintain health during Ramadan",
          tasks: [
            { text: "Schedule light exercise routines", isRequired: false },
            { text: "Plan daily walking sessions", isRequired: true },
            { text: "Prepare first-aid supplies", isRequired: true },
            { text: "Schedule health check-up", isRequired: false },
            { text: "Monitor energy levels daily", isRequired: true }
          ]
        }
      ]
    },
    {
      title: "Social & Community",
      icon: <FaUsers className="w-6 h-6" />,
      color: "bg-blue-500",
      categories: [
        {
          title: "Family Bonding",
          description: "Strengthen family relationships",
          tasks: [
            { text: "Plan family Iftar gatherings", isRequired: true },
            { text: "Organize family Quran sessions", isRequired: false },
            { text: "Create family prayer schedule", isRequired: true },
            { text: "Plan educational activities", isRequired: false },
            { text: "Set up family charity goals", isRequired: true }
          ]
        },
        {
          title: "Community Engagement",
          description: "Contribute to your community",
          tasks: [
            { text: "Sign up for mosque activities", isRequired: false },
            { text: "Volunteer for Iftar distribution", isRequired: false },
            { text: "Join Islamic study circles", isRequired: false },
            { text: "Help organize community events", isRequired: false },
            { text: "Support local charity initiatives", isRequired: true }
          ],
          resources: [
            { title: "Local Mosque Programs", link: "#" },
            { title: "Volunteer Opportunities", link: "#" }
          ]
        },
        {
          title: "Charity Planning",
          description: "Organize your charitable acts",
          tasks: [
            { text: "Calculate Zakat", isRequired: true },
            { text: "Set daily Sadaqah goals", isRequired: true },
            { text: "Identify families in need", isRequired: false },
            { text: "Plan Eid charity distribution", isRequired: true },
            { text: "Research charitable organizations", isRequired: false }
          ],
          resources: [
            { title: "Zakat Calculator", link: "#" },
            { title: "Charity Organizations List", link: "#" }
          ]
        }
      ]
    }
  ];

  const goalCategories = [
    {
      id: 'quran',
      title: "Daily Quran Reading",
      icon: <FaQuran className="w-6 h-6" />,
      color: "bg-blue-500",
      description: "Set your daily Quran reading target",
      unit: "pages",
      increment: 1,
      examples: "Example: 5 pages per day",
      suggestions: [1, 3, 5, 10]
    },
    {
      id: 'prayers',
      title: "Taraweeh Prayer",
      icon: <FaPray className="w-6 h-6" />,
      color: "bg-purple-500",
      description: "Track your nightly Taraweeh prayers",
      unit: "rakaat",
      increment: 2,
      examples: "Example: 8 or 20 rakaat",
      suggestions: [8, 12, 16, 20]
    },
    {
      id: 'charity',
      title: "Daily Charity",
      icon: <FaHandHoldingHeart className="w-6 h-6" />,
      color: "bg-green-500",
      description: "Set your daily charity goal",
      unit: "amount",
      increment: 10,
      examples: "Example: 100 or 500 per day",
      suggestions: [100, 500, 1000, 5000]
    },
    {
      id: 'dhikr',
      title: "Daily Dhikr",
      icon: <FaHeart className="w-6 h-6" />,
      color: "bg-red-500",
      description: "Track your daily remembrance of Allah",
      unit: "times",
      increment: 10,
      examples: "Example: 100 times Astaghfirullah",
      suggestions: [33, 100, 500, 1000]
    }
  ];

  const updateGoal = (categoryId, field, value) => {
    const newGoals = {
      ...goals,
      [categoryId]: {
        ...goals[categoryId],
        [field]: Number(value)
      }
    };
    setGoals(newGoals);
    localStorage.setItem('ramadanGoals', JSON.stringify(newGoals));
  };

  const incrementProgress = (categoryId) => {
    const category = goalCategories.find(c => c.id === categoryId);
    updateGoal(categoryId, 'current', goals[categoryId].current + category.increment);
  };

  const decrementProgress = (categoryId) => {
    const category = goalCategories.find(c => c.id === categoryId);
    const newValue = Math.max(0, goals[categoryId].current - category.increment);
    updateGoal(categoryId, 'current', newValue);
  };

  const calculateProgress = (categoryId) => {
    const goal = goals[categoryId];
    if (!goal.target || goal.target === 0) return 0;
    return Math.min(100, Math.round((goal.current / goal.target) * 100));
  };

  // Quick Start Guide Component
  const QuickStartGuide = () => (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 mb-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <FaInfoCircle className="text-blue-500 w-5 h-5" />
          <h3 className="text-lg font-semibold">How to Use Ramadan Goals</h3>
        </div>
        <button 
          onClick={() => setShowGuide(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          Close Guide
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">1. Set Your Target</h4>
          <p>Click on the number under "Daily Target" to set your goal, or use the quick suggestion buttons.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">2. Track Progress</h4>
          <p>Use + and - buttons to update your daily progress. Your progress saves automatically.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">3. Monitor Achievement</h4>
          <p>Watch your progress bar grow as you complete your daily goals.</p>
        </div>
      </div>
    </motion.div>
  );

  // Render preparation section
  const renderPreparationSection = () => (
    <div className="space-y-8">
      {preparationGuide.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className={`${section.color} p-4 text-white`}>
            <div className="flex items-center space-x-3">
              {section.icon}
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {section.categories.map((category, catIndex) => (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index * 0.1) + (catIndex * 0.1) }}
                  className="bg-gray-50 rounded-lg p-4"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {category.description}
                  </p>
                  
                  <ul className="space-y-3 mb-4">
                    {category.tasks.map((task, taskIndex) => (
                      <li 
                        key={taskIndex}
                        className="flex items-start space-x-2 text-sm"
                      >
                        <FaCheckCircle className={`w-4 h-4 mt-1 flex-shrink-0 ${
                          task.isRequired ? 'text-red-500' : 'text-green-500'
                        }`} />
                        <span className={`${
                          task.isRequired ? 'font-medium' : ''
                        }`}>
                          {task.text}
                          {task.isRequired && 
                            <span className="text-xs text-red-500 ml-1">(Required)</span>
                          }
                        </span>
                      </li>
                    ))}
                  </ul>

                  {category.resources && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Helpful Resources:
                      </h4>
                      <ul className="space-y-2">
                        {category.resources.map((resource, resIndex) => (
                          <li key={resIndex}>
                            <a
                              href={resource.link}
                              className="text-sm text-green-600 hover:text-green-700 flex items-center space-x-1"
                            >
                              <FaBookmark className="w-3 h-3" />
                              <span>{resource.title}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}

      <div className="bg-green-50 rounded-lg p-4 mt-6">
        <p className="text-sm text-green-800 text-center">
          Start implementing these preparations at least 2-3 weeks before Ramadan for the best results.
          Required tasks are marked in red.
        </p>
      </div>
    </div>
  );

  // Render goals section
  const renderGoalsSection = () => (
    <div className="space-y-6 max-w-4xl mx-auto">
      {showGuide && <QuickStartGuide />}

      {goalCategories.map((category) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className={`${category.color} p-4 text-white`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {category.icon}
                <div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                  <p className="text-sm text-white/80">{category.description}</p>
                </div>
              </div>
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                {calculateProgress(category.id)}% Complete
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              {/* Target Setting Section */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Daily Target ({category.unit})
                  </label>
                  <div className="flex items-center space-x-4">
                    {editingGoal === category.id ? (
                      <input
                        type="number"
                        min="0"
                        value={goals[category.id].target}
                        onChange={(e) => updateGoal(category.id, 'target', e.target.value)}
                        onBlur={() => setEditingGoal(null)}
                        className="w-24 rounded-lg border-gray-300 focus:ring-green-500 focus:border-green-500"
                        autoFocus
                      />
                    ) : (
                      <button
                        onClick={() => setEditingGoal(category.id)}
                        className="text-lg font-semibold text-gray-900 hover:text-green-600 bg-gray-50 px-4 py-2 rounded-lg"
                      >
                        {goals[category.id].target}
                      </button>
                    )}
                    <span className="text-sm text-gray-500">{category.examples}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Quick Set:</span>
                  {category.suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => updateGoal(category.id, 'target', suggestion)}
                      className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress Tracking Section */}
              <div className="flex flex-col items-center space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Today's Progress
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => decrementProgress(category.id)}
                    className="p-2 text-gray-500 hover:text-red-600 transition-colors bg-gray-100 rounded-lg"
                  >
                    <FaMinus className="w-4 h-4" />
                  </button>
                  
                  <span className="text-xl font-semibold text-gray-900 min-w-[3rem] text-center">
                    {goals[category.id].current}
                  </span>
                  
                  <button
                    onClick={() => incrementProgress(category.id)}
                    className="p-2 text-gray-500 hover:text-green-600 transition-colors bg-gray-100 rounded-lg"
                  >
                    <FaPlus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${calculateProgress(category.id)}%` }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${category.color}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="bg-blue-50 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <FaQuestionCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-blue-800 mb-1">Need Help?</h4>
            <p className="text-sm text-blue-800">
              • Click on any target number to edit your goal<br />
              • Use the quick set buttons for suggested targets<br />
              • Track your daily progress with + and - buttons<br />
              • All changes save automatically
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Banner - Adjusted for fixed navbar */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-6 sm:py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">
              Ramadan Planner
            </h1>
            <p className="text-sm sm:text-xl text-green-100 max-w-2xl mx-auto">
              Organize your spiritual journey
            </p>
          </div>
        </motion.div>
      </div>

      {/* Main Content - Adjusted spacing */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Navigation Tabs - Made more compact for mobile */}
        <div className="flex justify-center mb-4 sm:mb-8 overflow-x-auto">
          <div className="bg-white rounded-lg shadow-sm p-1 inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors text-sm sm:text-base ${
                  activeTab === tab.id 
                    ? 'bg-green-500 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Daily Tasks Grid - Improved mobile layout */}
        {activeTab === 'daily' && (
          <div className="bg-white rounded-xl shadow-lg p-3 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center">
                <FaCalendarAlt className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-green-600" />
                Daily Progress
              </h2>
              <div className="flex items-center space-x-4">
                <select 
                  value={currentDay}
                  onChange={(e) => setCurrentDay(Number(e.target.value))}
                  className="rounded-lg border-gray-300 text-gray-700 focus:ring-green-500 focus:border-green-500"
                >
                  {[...Array(30)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>Day {i + 1}</option>
                  ))}
                </select>
                <div className="relative">
                  <button
                    onClick={toggleNotifications}
                    className={`p-2 rounded-lg transition-colors ${
                      notifications 
                        ? 'text-green-600 hover:text-green-700' 
                        : 'text-gray-500 hover:text-gray-600'
                    }`}
                    title={notifications ? 'Notifications enabled' : 'Enable notifications'}
                  >
                    {notifications ? <FaBell className="w-5 h-5" /> : <FaBellSlash className="w-5 h-5" />}
                  </button>
                  {notifications && reminderTime && (
                    <div className="absolute -bottom-8 right-0 text-xs text-gray-500 whitespace-nowrap">
                      Reminder: {reminderTime}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {dailyTasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`rounded-lg p-3 ${task.color}`}>
                      {task.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{task.title}</h3>
                      <p className="text-sm text-gray-600">{task.description}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs text-gray-500">Target: {task.target}</span>
                        <button
                          onClick={() => toggleTask(currentDay, task.id)}
                          className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                            completedTasks[currentDay]?.[task.id]
                              ? 'bg-green-500 text-white'
                              : 'border-2 border-gray-300 text-gray-300 hover:border-green-500 hover:text-green-500'
                          }`}
                        >
                          {completedTasks[currentDay]?.[task.id] ? <FaCheckCircle /> : <FaRegCircle />}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Additional sections for other tabs */}
        {activeTab === 'preparation' && renderPreparationSection()}

        {activeTab === 'goals' && renderGoalsSection()}
      </div>

      {/* Add the modals */}
      <AnimatePresence>
        {showReminderModal && <ReminderModal />}
        {showPermissionGuide && <PermissionGuideModal />}
      </AnimatePresence>
    </div>
  );
};

export default RamadanPlanner; 
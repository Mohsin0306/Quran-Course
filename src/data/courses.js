import { FaQuran, FaBookOpen, FaBrain, FaBook, FaMosque, FaLanguage, FaPray, FaUserGraduate } from 'react-icons/fa';

export const courses = [
  {
    id: 1,
    title: "Norani Qaida",
    description: "Perfect for beginners starting their Quranic journey. Learn the basics of Quran reading with expert guidance.",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&auto=format&fit=crop&q=60",
    category: "Beginner",
    duration: "3 months",
    price: "$50/month",
    rating: 4.9,
    icon: <FaBookOpen className="w-6 h-6" />,
    features: ["Live Classes", "Expert Teachers", "Practice Sessions"],
    students: 1200
  },
  {
    id: 2,
    title: "Quran Nazra",
    description: "Master Quran recitation with proper tajweed rules under the guidance of certified teachers.",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=800&auto=format&fit=crop&q=60",
    category: "Intermediate",
    duration: "6 months",
    price: "$75/month",
    rating: 4.8,
    icon: <FaQuran className="w-6 h-6" />,
    features: ["Tajweed Rules", "One-on-One Sessions", "Progress Tracking"],
    students: 850
  },
  {
    id: 3,
    title: "Quran Memorization",
    description: "Memorize the Holy Quran with expert guidance and systematic approach.",
    image: "https://images.pexels.com/photos/16150271/pexels-photo-16150271/free-photo-of-making-the-most-of-ramadan-with-quran-reading.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Advanced",
    duration: "Flexible",
    price: "$100/month",
    rating: 4.9,
    icon: <FaBrain className="w-6 h-6" />,
    features: ["Personalized Plan", "Memorization Techniques", "Regular Assessment"],
    students: 600
  },
  {
    id: 4,
    title: "Tajweed Course",
    description: "Learn the rules of Quranic pronunciation and recitation with proper Tajweed principles.",
    image: "https://images.pexels.com/photos/9127603/pexels-photo-9127603.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Intermediate",
    duration: "4 months",
    price: "$60/month",
    rating: 4.7,
    icon: <FaBook className="w-6 h-6" />,
    features: ["Tajweed Rules", "Pronunciation Practice", "Live Sessions"],
    students: 750
  },
  {
    id: 5,
    title: "Arabic Language",
    description: "Master the Arabic language to better understand the Quran and Islamic texts.",
    image: "https://cdn-jdnjn.nitrocdn.com/oNDOAVXcOvDcQZWDXmVLiHOMKUUVuHIH/assets/images/optimized/rev-9b865fa/www.whyislam.org/wp-content/uploads/2019/09/Closeup-of-a-page-in-the-Holy-Quran.jpg",
    category: "All Levels",
    duration: "6 months",
    price: "$80/month",
    rating: 4.8,
    icon: <FaLanguage className="w-6 h-6" />,
    features: ["Grammar", "Vocabulary", "Conversation Practice"],
    students: 500
  },
  {
    id: 6,
    title: "Islamic Studies",
    description: "Comprehensive course covering Islamic principles, history, and practices.",
    image: "https://islamic-college.net/storage/media/85/conversions/5e4528ea39b70408459147-large.jpg",
    category: "All Levels",
    duration: "8 months",
    price: "$70/month",
    rating: 4.9,
    icon: <FaMosque className="w-6 h-6" />,
    features: ["Islamic History", "Fiqh", "Hadith Studies"],
    students: 900
  },
  {
    id: 7,
    title: "Prayer & Worship",
    description: "Learn the proper methods of Islamic prayers and worship with detailed guidance.",
    image: "https://media.istockphoto.com/id/1011940756/photo/muslim-men-praying-during-ramadan.jpg?s=612x612&w=0&k=20&c=x65o1NcQ2DlsITPFt--_jeCU44GlGzv0zI5HwHYjWiw=",
    category: "Beginner",
    duration: "2 months",
    price: "$45/month",
    rating: 4.8,
    icon: <FaPray className="w-6 h-6" />,
    features: ["Prayer Basics", "Practical Sessions", "Daily Worship"],
    students: 1500
  },
  {
    id: 8,
    title: "Advanced Quran Studies",
    description: "Deep dive into Quranic interpretation, context, and scholarly discussions.",
    image: "https://cdn.pixabay.com/photo/2023/01/24/19/41/al-quran-7741928_960_720.jpg",
    category: "Advanced",
    duration: "12 months",
    price: "$120/month",
    rating: 4.9,
    icon: <FaUserGraduate className="w-6 h-6" />,
    features: ["Tafsir", "Advanced Arabic", "Research Methods"],
    students: 300
  }
]; 
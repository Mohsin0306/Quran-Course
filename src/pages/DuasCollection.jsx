import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaHeart, FaBookmark, FaCopy, FaShare, FaSearch, 
         FaFilter, FaLanguage, FaStar, FaSun, FaMoon, FaPray, FaShieldAlt, 
         FaHome, FaCarSide, FaBookOpen, FaHeartbeat, FaTimes, FaArrowLeft } from 'react-icons/fa';

// Enhanced search bar component
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const clearSearch = () => setSearchQuery('');
  
  return (
    <div className="relative max-w-2xl mx-auto mb-4 md:mb-6">
      <div className="relative">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 transition-colors duration-200" />
        <input
          type="text"
          placeholder="Search duas, benefits, or references..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-10 py-3 rounded-xl bg-white shadow-sm focus:shadow-md transition-all duration-200 outline-none border border-transparent focus:border-green-200"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

// Create a new Favorites page component
const FavoritesPage = ({ duas, favorites, toggleFavorite, onBack }) => {
  const favoriteDuas = duas.filter(dua => favorites.includes(dua.id));

  return (
    <div className="min-h-screen bg-gray-50 pt-16 md:pt-20">
      {/* Header with Back Button */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 md:py-8">
        <div className="max-w-7xl mx-auto px-3 md:px-6 text-center relative">
          <button
            onClick={onBack}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-green-100 transition-colors duration-200 flex items-center"
          >
            <FaArrowLeft className="w-5 h-5" />
            <span className="ml-2 hidden md:inline">Back</span>
          </button>
          <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Favorite Duas</h1>
          <p className="text-xs md:text-sm text-green-100">Your saved duas collection</p>
        </div>
      </div>

      {/* Favorites Content */}
      <div className="max-w-7xl mx-auto px-3 md:px-6 py-4 md:py-6">
        {favoriteDuas.length === 0 ? (
          <div className="text-center py-12">
            <FaHeart className="w-12 h-12 mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">No Favorites Yet</h3>
            <p className="text-gray-400">Add duas to your favorites to see them here</p>
          </div>
        ) : (
          <div className="space-y-3 md:space-y-6">
            {favoriteDuas.map((dua) => (
              <motion.div
                key={dua.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-3 md:p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm md:text-base font-medium text-gray-900">{dua.title}</h3>
                    <button
                      onClick={() => toggleFavorite(dua.id)}
                      className="p-1 md:p-2 text-red-500"
                    >
                      <FaHeart className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <div className="text-right">
                      <p className="text-base md:text-lg font-arabic text-gray-800">{dua.arabic}</p>
                    </div>
                    
                    <div className="text-xs md:text-sm text-gray-600">
                      <p className="italic">{dua.transliteration}</p>
                    </div>

                    <div className="bg-gray-50 p-2 md:p-3 rounded-lg">
                      <p className="text-xs md:text-sm text-gray-700">{dua.translation}</p>
                    </div>

                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {dua.benefits.map((benefit, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                      <span className="text-xs text-gray-500">Source: {dua.reference}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const DuasCollection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favoriteDuas');
    return saved ? JSON.parse(saved) : [];
  });
  const [showFavorites, setShowFavorites] = useState(false);

  const categories = [
    {
      id: 'morning',
      title: 'Morning & Evening',
      icon: <FaSun className="w-6 h-6" />,
      color: 'bg-yellow-500',
      description: 'Start and end your day with these blessed supplications',
      count: 12
    },
    {
      id: 'salah',
      title: 'Prayer Related',
      icon: <FaPray className="w-6 h-6" />,
      color: 'bg-blue-500',
      description: 'Duas for before, during, and after prayers',
      count: 15
    },
    {
      id: 'protection',
      title: 'Protection & Healing',
      icon: <FaShieldAlt className="w-6 h-6" />,
      color: 'bg-purple-500',
      description: 'Seek Allah\'s protection and healing',
      count: 18
    },
    {
      id: 'home',
      title: 'Home & Family',
      icon: <FaHome className="w-6 h-6" />,
      color: 'bg-green-500',
      description: 'Blessings for your home and loved ones',
      count: 10
    },
    {
      id: 'travel',
      title: 'Travel',
      icon: <FaCarSide className="w-6 h-6" />,
      color: 'bg-orange-500',
      description: 'Protection and ease during journeys',
      count: 8
    },
    {
      id: 'quran',
      title: 'Quranic Duas',
      icon: <FaBookOpen className="w-6 h-6" />,
      color: 'bg-teal-500',
      description: 'Beautiful supplications from the Quran',
      count: 20
    },
    {
      id: 'stress',
      title: 'Anxiety & Stress',
      icon: <FaHeartbeat className="w-6 h-6" />,
      color: 'bg-pink-500',
      description: 'Find peace and tranquility in these duas',
      count: 12
    }
  ];

  const duas = [
    {
      id: 1,
      category: 'morning',
      title: 'Morning Supplication',
      arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ',
      transliteration: "Asbahna wa asbahal mulku lillah, walhamdu lillah, la ilaha illallah wahdahu la sharika lah",
      translation: "We have reached the morning and at this very time all sovereignty belongs to Allah. All praise is for Allah. None has the right to be worshipped except Allah, alone, without any partner",
      reference: "Muslim",
      benefits: ['Protection throughout the day', 'Gratitude to Allah', 'Recognition of Allah\'s sovereignty']
    },
    {
      id: 2,
      category: 'morning',
      title: 'Evening Supplication',
      arabic: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ',
      transliteration: "Amsayna wa amsal mulku lillah, walhamdu lillah, la ilaha illallah wahdahu la sharika lah",
      translation: "We have reached the evening and at this very time all sovereignty belongs to Allah. All praise is for Allah. None has the right to be worshipped except Allah, alone, without any partner",
      reference: "Muslim",
      benefits: ['Protection throughout the night', 'Gratitude to Allah', 'Recognition of Allah\'s sovereignty']
    },
    {
      id: 3,
      category: 'protection',
      title: 'Protection from Evil Eye',
      arabic: 'أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ',
      transliteration: "A'udhu bikalimatillahit-tammaati min kulli shaytanin wa hammah, wa min kulli 'aynin lammah",
      translation: "I seek refuge in Allah's perfect words from every devil and from poisonous pests and from every evil, harmful, envious eye",
      reference: "Bukhari",
      benefits: ['Protection from evil eye', 'Protection from harm', 'Divine shield']
    },
    {
      id: 4,
      category: 'salah',
      title: 'Before Wudu',
      arabic: 'بِسْمِ اللَّهِ',
      transliteration: "Bismillah",
      translation: "In the name of Allah",
      reference: "Abu Dawud",
      benefits: ['Blessing in ablution', 'Proper start of worship', 'Divine recognition']
    },
    {
      id: 5,
      category: 'salah',
      title: 'After Wudu',
      arabic: 'أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
      transliteration: "Ash-hadu an la ilaha illallah wahdahu la sharika lahu wa ash-hadu anna Muhammadan 'abduhu wa rasuluhu",
      translation: "I bear witness that none has the right to be worshipped but Allah alone, Who has no partner; and I bear witness that Muhammad is His slave and His Messenger",
      reference: "Muslim",
      benefits: ['Completion of purification', 'Testimony of faith', 'Spiritual cleansing']
    },
    {
      id: 6,
      category: 'daily',
      title: 'Before Eating',
      arabic: 'بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ',
      transliteration: "Bismillahi wa 'ala barakatillah",
      translation: "In the name of Allah and with the blessings of Allah",
      reference: "Abu Dawud",
      benefits: ['Blessing in food', 'Protection from harm', 'Gratitude for sustenance']
    },
    {
      id: 7,
      category: 'daily',
      title: 'After Eating',
      arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
      transliteration: "Alhamdu lillahil-ladhi at'amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah",
      translation: "All praise is for Allah who fed me this and provided it for me without any might or power on my part",
      reference: "Abu Dawud, Tirmidhi",
      benefits: ['Gratitude for food', 'Recognition of Allah\'s provision', 'Blessing in sustenance']
    },
    {
      id: 8,
      category: 'daily',
      title: 'Before Sleeping',
      arabic: 'اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا',
      transliteration: "Allahumma bismika amutu wa ahya",
      translation: "O Allah, in Your name I die and live",
      reference: "Bukhari",
      benefits: ['Peaceful sleep', 'Protection at night', 'Blessed awakening']
    },
    {
      id: 9,
      category: 'travel',
      title: 'Starting a Journey',
      arabic: 'اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى',
      transliteration: "Allahumma inna nas'aluka fi safarina hadha al-birra wat-taqwa, wa minal-'amali ma tarda",
      translation: "O Allah, we ask You on this journey of ours for righteousness and piety, and for deeds that are pleasing to You",
      reference: "Muslim",
      benefits: ['Safe journey', 'Blessed travel', 'Divine pleasure']
    },
    {
      id: 10,
      category: 'travel',
      title: 'Returning from Journey',
      arabic: 'آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ',
      transliteration: "Ayibuna, ta'ibuna, 'abiduna, lirabbina hamidun",
      translation: "We return, repent, worship and praise our Lord",
      reference: "Muslim",
      benefits: ['Gratitude for safe return', 'Spiritual renewal', 'Recognition of Allah\'s protection']
    },
    {
      id: 11,
      category: 'quran',
      title: 'For Knowledge',
      arabic: 'رَبِّ زِدْنِي عِلْمًا',
      transliteration: "Rabbi zidni 'ilma",
      translation: "My Lord, increase me in knowledge",
      reference: "Quran 20:114",
      benefits: ['Increase in knowledge', 'Divine wisdom', 'Understanding']
    },
    {
      id: 12,
      category: 'quran',
      title: 'For Parents',
      arabic: 'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
      transliteration: "Rabbir hamhuma kama rabbayani saghira",
      translation: "My Lord, have mercy upon them as they brought me up when I was small",
      reference: "Quran 17:24",
      benefits: ['Blessing for parents', 'Filial piety', 'Divine mercy']
    },
    {
      id: 13,
      category: 'stress',
      title: 'Removing Worry',
      arabic: 'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',
      transliteration: "La ilaha illa anta subhanaka inni kuntu minaz-zalimin",
      translation: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers",
      reference: "Quran 21:87",
      benefits: ['Relief from distress', 'Removal of anxiety', 'Divine help']
    },
    {
      id: 14,
      category: 'stress',
      title: 'For Ease',
      arabic: 'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',
      transliteration: "Hasbiyallahu la ilaha illa huwa 'alayhi tawakkaltu wa huwa rabbul 'arshil 'azim",
      translation: "Sufficient for me is Allah; there is no deity except Him. On Him I have relied, and He is the Lord of the Great Throne",
      reference: "Quran 9:129",
      benefits: ['Trust in Allah', 'Peace of mind', 'Divine sufficiency']
    },
    {
      id: 15,
      category: 'home',
      title: 'Entering Home',
      arabic: 'بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا',
      transliteration: "Bismillahi walajna, wa bismillahi kharajna, wa 'ala rabbina tawakkalna",
      translation: "In the name of Allah we enter, in the name of Allah we leave, and upon our Lord we place our trust",
      reference: "Abu Dawud",
      benefits: ['Home protection', 'Family blessing', 'Divine trust']
    },
    {
      id: 16,
      category: 'home',
      title: 'For Spouse',
      arabic: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
      transliteration: "Rabbana hab lana min azwajina wa dhurriyyatina qurrata a'yunin waj'alna lil muttaqina imama",
      translation: "Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous",
      reference: "Quran 25:74",
      benefits: ['Family harmony', 'Righteous offspring', 'Marital blessing']
    },
    {
      id: 17,
      category: 'forgiveness',
      title: 'Seeking Forgiveness',
      arabic: 'رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ',
      transliteration: "Rabbi-ghfir li wa tub 'alayya innaka antat-tawwabur-rahim",
      translation: "My Lord, forgive me and accept my repentance. Indeed, You are the Accepting of repentance, the Merciful",
      reference: "Bukhari",
      benefits: ['Forgiveness of sins', 'Divine mercy', 'Acceptance of repentance']
    },
    {
      id: 18,
      category: 'forgiveness',
      title: 'Master of Forgiveness',
      arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
      transliteration: "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni",
      translation: "O Allah, You are Pardoning and love pardon, so pardon me",
      reference: "Tirmidhi",
      benefits: ['Divine pardon', 'Removal of sins', 'Spiritual cleansing']
    },
    {
      id: 19,
      category: 'protection',
      title: 'Morning & Evening Protection',
      arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
      transliteration: "Bismillahil-ladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama'i wa huwas-sami'ul-'alim",
      translation: "In the name of Allah with Whose name nothing can harm on earth or in heaven, and He is the All-Hearing, All-Knowing",
      reference: "Abu Dawud",
      benefits: ['Complete protection', 'Safety from harm', 'Divine guardianship']
    },
    {
      id: 20,
      category: 'protection',
      title: 'Protection from Shaitan',
      arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
      transliteration: "A'udhu bikalimatil-lahit-tammati min sharri ma khalaq",
      translation: "I seek refuge in the perfect words of Allah from the evil of what He has created",
      reference: "Muslim",
      benefits: ['Protection from evil', 'Safety from harm', 'Divine shelter']
    },
    {
      id: 21,
      category: 'salah',
      title: 'Entering Mosque',
      arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
      transliteration: "Allahumma-ftah li abwaba rahmatik",
      translation: "O Allah, open for me the gates of Your mercy",
      reference: "Muslim",
      benefits: ['Divine mercy', 'Spiritual openings', 'Blessed worship']
    },
    {
      id: 22,
      category: 'salah',
      title: 'Leaving Mosque',
      arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
      transliteration: "Allahumma inni as'aluka min fadlik",
      translation: "O Allah, I ask You of Your bounty",
      reference: "Muslim",
      benefits: ['Divine bounty', 'Continued blessings', 'Worldly provision']
    },
    {
      id: 23,
      category: 'morning',
      title: 'Protection in Morning',
      arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ',
      transliteration: "Asbahna wa asbahal mulku lillah walhamdu lillah la ilaha illallah wahdahu la sharika lah",
      translation: "We have reached the morning and at this very time unto Allah belongs all sovereignty, and all praise is for Allah. None has the right to be worshipped except Allah, alone, without partner",
      reference: "Muslim",
      benefits: ['Morning protection', 'Divine recognition', 'Gratitude']
    },
    {
      id: 24,
      category: 'stress',
      title: 'Relief from Hardship',
      arabic: 'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',
      transliteration: "Hasbiyallahu la ilaha illa huwa 'alayhi tawakkaltu wa huwa rabbul 'arshil 'azim",
      translation: "Allah is sufficient for me. There is no deity except Him. I have placed my trust in Him, and He is the Lord of the Great Throne",
      reference: "At-Tirmidhi",
      benefits: ['Stress relief', 'Trust in Allah', 'Divine sufficiency']
    },
    {
      id: 25,
      category: 'protection',
      title: 'Protection from Evil',
      arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
      transliteration: "A'udhu bikalimatil-lahit-tammati min sharri ma khalaq",
      translation: "I seek refuge in the perfect words of Allah from the evil of what He has created",
      reference: "Muslim",
      benefits: ['Protection from harm', 'Divine shelter', 'Safety from evil']
    },
    {
      id: 26,
      category: 'salah',
      title: 'After Prayer',
      arabic: 'اللَّهُمَّ أَنْتَ السَّلاَمُ، وَمِنْكَ السَّلاَمُ، تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ',
      transliteration: "Allahumma antas-salam wa minkas-salam tabarakta ya dhal-jalali wal-ikram",
      translation: "O Allah, You are Peace and from You comes peace. Blessed are You, O Owner of majesty and honor",
      reference: "Muslim",
      benefits: ['Peace of mind', 'Divine blessings', 'Spiritual tranquility']
    },
    {
      id: 27,
      category: 'quran',
      title: 'Seeking Guidance',
      arabic: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً',
      transliteration: "Rabbana la tuzigh qulubana ba'da idh hadaytana wa hab lana min ladunka rahmah",
      translation: "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy",
      reference: "Quran 3:8",
      benefits: ['Divine guidance', 'Steadfastness', 'Mercy']
    },
    {
      id: 28,
      category: 'home',
      title: 'Blessing for Home',
      arabic: 'اللَّهُمَّ بَارِكْ لَنَا فِي بَيْتِنَا',
      transliteration: "Allahumma barik lana fi baytina",
      translation: "O Allah, bless our home",
      reference: "Ibn Majah",
      benefits: ['Home blessing', 'Family peace', 'Divine protection']
    },
    {
      id: 29,
      category: 'travel',
      title: 'Safe Return',
      arabic: 'اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى',
      transliteration: "Allahumma inna nas'aluka fi safarina hadha al-birra wat-taqwa",
      translation: "O Allah, we ask You for righteousness and piety in this journey of ours",
      reference: "Muslim",
      benefits: ['Safe journey', 'Divine protection', 'Blessed travel']
    },
    {
      id: 30,
      category: 'forgiveness',
      title: 'Seeking Pardon',
      arabic: 'رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ',
      transliteration: "Rabbigh-fir warham wa anta khairur-rahimin",
      translation: "My Lord, forgive and have mercy, and You are the Best of those who show mercy",
      reference: "Quran 23:118",
      benefits: ['Divine forgiveness', 'Mercy', 'Spiritual cleansing']
    },
    {
      id: 31,
      category: 'stress',
      title: 'Anxiety Relief',
      arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ',
      transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan",
      translation: "O Allah, I seek refuge in You from anxiety and sorrow",
      reference: "Bukhari",
      benefits: ['Relief from anxiety', 'Mental peace', 'Emotional healing']
    },
    {
      id: 32,
      category: 'protection',
      title: 'Morning Shield',
      arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ',
      transliteration: "Bismillahil-ladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama",
      translation: "In the name of Allah with Whose name nothing can harm on earth or in heaven",
      reference: "Abu Dawud",
      benefits: ['Complete protection', 'Divine shield', 'Safety from harm']
    },
    {
      id: 33,
      category: 'morning',
      title: 'Morning Success',
      arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ',
      transliteration: "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namutu, wa ilaikan-nushur",
      translation: "O Allah, by You we enter the morning, by You we enter the evening, by You we live, by You we die, and to You is the resurrection",
      reference: "Tirmidhi",
      benefits: ['Morning blessing', 'Divine protection', 'Life purpose']
    },
    {
      id: 34,
      category: 'quran',
      title: 'Strength in Faith',
      arabic: 'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',
      transliteration: "Rabbana afrigh 'alayna sabran wa thabbit aqdamana wansurna 'alal-qawmil-kafirin",
      translation: "Our Lord, pour upon us patience and plant firmly our feet and give us victory over the disbelieving people",
      reference: "Quran 2:250",
      benefits: ['Patience', 'Steadfastness', 'Victory']
    },
    {
      id: 35,
      category: 'protection',
      title: 'Complete Protection',
      arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
      transliteration: "Bismillahil-ladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama'i wa huwas-sami'ul-'alim",
      translation: "In the name of Allah, with Whose name nothing can cause harm on earth or in heaven, and He is the All-Hearing, All-Knowing",
      reference: "Abu Dawud",
      benefits: ['Complete protection', 'Safety from harm', 'Divine guardianship']
    },
    {
      id: 36,
      category: 'home',
      title: 'Family Unity',
      arabic: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
      transliteration: "Rabbana hab lana min azwajina wa dhurriyyatina qurrata a'yunin waj'alna lil-muttaqina imama",
      translation: "Our Lord, grant us from among our wives and offspring comfort to our eyes and make us a leader for the righteous",
      reference: "Quran 25:74",
      benefits: ['Family harmony', 'Righteous offspring', 'Leadership']
    },
    {
      id: 37,
      category: 'stress',
      title: 'Peace of Heart',
      arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ، وَمِنْ قَلْبٍ لَا يَخْشَعُ، وَمِنْ نَفْسٍ لَا تَشْبَعُ، وَمِنْ دَعْوَةٍ لَا يُسْتَجَابُ لَهَا',
      transliteration: "Allahumma inni a'udhu bika min 'ilmin la yanfa', wa min qalbin la yakhsha', wa min nafsin la tashba', wa min da'watin la yustajabu laha",
      translation: "O Allah, I seek refuge in You from knowledge that does not benefit, from a heart that does not fear (You), from a soul that is not satisfied, and from a supplication that is not answered",
      reference: "Muslim",
      benefits: ['Beneficial knowledge', 'Heart softening', 'Soul satisfaction']
    },
    {
      id: 38,
      category: 'salah',
      title: 'Before Prayer',
      arabic: 'اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ',
      transliteration: "Allahumma ba'id bayni wa bayna khatayaya kama ba'adta baynal-mashriqi wal-maghrib",
      translation: "O Allah, distance me from my sins just as You have distanced the East from the West",
      reference: "Bukhari",
      benefits: ['Purification', 'Sin removal', 'Divine cleansing']
    },
    {
      id: 39,
      category: 'forgiveness',
      title: 'Complete Forgiveness',
      arabic: 'رَبِّ اغْفِرْ لِي خَطِيئَتِي وَجَهْلِي، وَإِسْرَافِي فِي أَمْرِي كُلِّهِ، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي',
      transliteration: "Rabbigh-fir li khati'ati wa jahli, wa israfi fi amri kullihi, wa ma anta a'lamu bihi minni",
      translation: "My Lord, forgive me for my sins and my ignorance, and my excesses in my affairs, and what You know better than I",
      reference: "Bukhari",
      benefits: ['Complete forgiveness', 'Removal of ignorance', 'Divine mercy']
    },
    {
      id: 40,
      category: 'travel',
      title: 'Journey Protection',
      arabic: 'اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى',
      transliteration: "Allahumma inna nas'aluka fi safarina hadha al-birra wat-taqwa, wa minal-'amali ma tarda",
      translation: "O Allah, we ask You for righteousness and piety in this journey of ours, and deeds which please You",
      reference: "Muslim",
      benefits: ['Safe journey', 'Righteous deeds', 'Divine pleasure']
    },
    {
      id: 41,
      category: 'morning',
      title: 'Daily Protection',
      arabic: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي',
      transliteration: "Allahumma 'afini fi badani, Allahumma 'afini fi sam'i, Allahumma 'afini fi basari",
      translation: "O Allah, grant me health in my body, O Allah, grant me health in my hearing, O Allah, grant me health in my sight",
      reference: "Abu Dawud",
      benefits: ['Physical health', 'Sensory protection', 'Overall wellbeing']
    },
    {
      id: 42,
      category: 'quran',
      title: 'Divine Success',
      arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',
      transliteration: "Rabbish-rah li sadri wa yassir li amri",
      translation: "My Lord, expand for me my breast and ease for me my task",
      reference: "Quran 20:25-26",
      benefits: ['Mental clarity', 'Task facilitation', 'Divine assistance']
    },
    {
      id: 43,
      category: 'protection',
      title: 'Night Protection',
      arabic: 'بِسْمِ اللَّهِ وَضَعْتُ جَنْبِي، اللَّهُمَّ اغْفِرْ لِي ذَنْبِي، وَأَخْسِئْ شَيْطَانِي، وَفُكَّ رِهَانِي، وَاجْعَلْنِي فِي النَّدِيِّ الْأَعْلَى',
      transliteration: "Bismillahi wada'tu janbi, Allahummaghfir li dhanbi, wa akhsi' shaytani, wa fukka rihani, waj'alni fin-nadiyyil a'la",
      translation: "In the name of Allah I lie down on my side. O Allah, forgive my sin, drive away my devil, free me from my pledge, and place me in the highest assembly",
      reference: "Abu Dawud",
      benefits: ['Night protection', 'Forgiveness', 'Protection from evil']
    },
    {
      id: 44,
      category: 'morning',
      title: 'New Day Beginning',
      arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ',
      transliteration: "Allahumma inni as'aluka khaira hadhal yawm, fathahu wa nasrahu wa nurahu wa barakatahu wa hudah",
      translation: "O Allah, I ask You for the goodness of this day, its victory, its light, its blessings and its guidance",
      reference: "Abu Dawud",
      benefits: ['Daily blessings', 'Divine guidance', 'Success']
    },
    {
      id: 45,
      category: 'stress',
      title: 'Removal of Worry',
      arabic: 'اللَّهُمَّ إِنِّي عَبْدُكَ، ابْنُ عَبْدِكَ، ابْنُ أَمَتِكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ',
      transliteration: "Allahumma inni 'abduka, ibnu 'abdika, ibnu amatika, nasiyati biyadika, madin fiyya hukmuka, 'adlun fiyya qada'uka",
      translation: "O Allah, I am Your servant, son of Your servant, son of Your maidservant, my forelock is in Your hand, Your command over me is forever executed and Your decree over me is just",
      reference: "Ahmad",
      benefits: ['Stress relief', 'Acceptance of destiny', 'Peace of mind']
    },
    {
      id: 46,
      category: 'quran',
      title: 'Knowledge Increase',
      arabic: 'رَّبِّ زِدْنِي عِلْمًا',
      transliteration: "Rabbi zidni 'ilma",
      translation: "My Lord, increase me in knowledge",
      reference: "Quran 20:114",
      benefits: ['Knowledge increase', 'Wisdom', 'Understanding']
    },
    {
      id: 47,
      category: 'home',
      title: 'Household Blessing',
      arabic: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ',
      transliteration: "Allahumma barik lana fima razaqtana waqina 'adhaban-nar",
      translation: "O Allah, bless us in what You have provided us and protect us from the punishment of the Fire",
      reference: "Muslim",
      benefits: ['Home blessing', 'Protection', 'Gratitude']
    },
    {
      id: 48,
      category: 'forgiveness',
      title: 'Daily Repentance',
      arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ',
      transliteration: "Subhanallahi wa bihamdihi, astaghfirullaha wa atubu ilayh",
      translation: "Glory and praise be to Allah, I seek Allah's forgiveness and turn to Him in repentance",
      reference: "Bukhari",
      benefits: ['Daily purification', 'Spiritual cleansing', 'Divine forgiveness']
    },
    {
      id: 49,
      category: 'salah',
      title: 'Between Prostrations',
      arabic: 'رَبِّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَاجْبُرْنِي، وَعَافِنِي، وَارْزُقْنِي، وَارْفَعْنِي',
      transliteration: "Rabbighfir li, warhamni, wahdini, wajburni, wa 'afini, warzuqni, warfa'ni",
      translation: "My Lord, forgive me, have mercy on me, guide me, support me, protect me, provide for me and elevate me",
      reference: "Abu Dawud",
      benefits: ['Complete supplication', 'Divine mercy', 'Guidance']
    },
    {
      id: 50,
      category: 'travel',
      title: 'Return from Journey',
      arabic: 'آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ',
      transliteration: "Ayibuna, ta'ibuna, 'abiduna, lirabbina hamidun",
      translation: "We return, repent, worship and praise our Lord",
      reference: "Muslim",
      benefits: ['Safe return', 'Gratitude', 'Worship']
    },
    {
      id: 51,
      category: 'protection',
      title: 'Strong Protection',
      arabic: 'اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي',
      transliteration: "Allahumma-hfadhni min bayni yadayya, wa min khalfi, wa 'an yamini, wa 'an shimali, wa min fawqi, wa 'audhu bi'adhamatika an ughtala min tahti",
      translation: "O Allah, protect me from my front, from my back, from my right, from my left, and from above me, and I seek refuge in Your Magnificence from being taken unaware from beneath me",
      reference: "Abu Dawud",
      benefits: ['Complete protection', 'Divine guard', 'Safety']
    },
    {
      id: 52,
      category: 'morning',
      title: 'Morning Light',
      arabic: 'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي لِسَانِي نُورًا، وَاجْعَلْ فِي سَمْعِي نُورًا، وَاجْعَلْ فِي بَصَرِي نُورًا',
      transliteration: "Allahumma-j'al fi qalbi nuran, wa fi lisani nuran, waj'al fi sam'i nuran, waj'al fi basari nuran",
      translation: "O Allah, place light in my heart, light in my tongue, light in my hearing, and light in my sight",
      reference: "Muslim",
      benefits: ['Spiritual illumination', 'Guidance', 'Inner light']
    },
    {
      id: 53,
      category: 'morning',
      title: 'Morning Gratitude',
      arabic: 'اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ',
      transliteration: "Allahumma ma asbaha bi min ni'matin aw bi'ahadin min khalqika faminka wahdaka la sharika lak, falakal-hamdu wa lakash-shukr",
      translation: "O Allah, whatever blessing has been received by me or anyone of Your creation is from You alone, You have no partner. For You is all praise and all thanks",
      reference: "Abu Dawud",
      benefits: ['Gratitude', 'Recognition of blessings', 'Divine appreciation']
    },
    {
      id: 54,
      category: 'protection',
      title: 'Fortress of Protection',
      arabic: 'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',
      transliteration: "Hasbiyallahu la ilaha illa huwa 'alayhi tawakkaltu wa huwa rabbul-'arshil-'adhim",
      translation: "Allah is sufficient for me. There is no deity except Him. I have relied upon Him, and He is the Lord of the Great Throne",
      reference: "Quran 9:129",
      benefits: ['Divine sufficiency', 'Complete trust', 'Protection']
    },
    {
      id: 55,
      category: 'salah',
      title: 'Before Recitation',
      arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
      transliteration: "Allahumma-ftah li abwaba rahmatik",
      translation: "O Allah, open for me the gates of Your mercy",
      reference: "Muslim",
      benefits: ['Divine mercy', 'Spiritual openings', 'Blessed recitation']
    },
    {
      id: 56,
      category: 'stress',
      title: 'Anxiety Removal',
      arabic: 'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',
      transliteration: "La ilaha illa anta subhanaka inni kuntu minaz-zalimin",
      translation: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers",
      reference: "Quran 21:87",
      benefits: ['Stress relief', 'Divine help', 'Problem solving']
    },
    {
      id: 57,
      category: 'home',
      title: 'Home Entry',
      arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ، بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا',
      transliteration: "Allahumma inni as'aluka khayral-mawliji wa khayral-makhraji bismillahi walajna wa bismillahi kharajna wa 'alallahi rabbina tawakkalna",
      translation: "O Allah, I ask You for the best entry and the best exit. In Allah's name we enter and in Allah's name we leave, and upon our Lord we rely",
      reference: "Abu Dawud",
      benefits: ['Home protection', 'Blessed entry/exit', 'Divine trust']
    },
    {
      id: 58,
      category: 'forgiveness',
      title: 'Seeking Pardon',
      arabic: 'رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ',
      transliteration: "Rabbigh-fir li wa tub 'alayya innaka antat-tawwabur-rahim",
      translation: "My Lord, forgive me and accept my repentance. Indeed, You are the Accepting of repentance, the Merciful",
      reference: "Bukhari",
      benefits: ['Forgiveness', 'Acceptance of repentance', 'Divine mercy']
    },
    {
      id: 59,
      category: 'travel',
      title: 'Travel Safety',
      arabic: 'اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ',
      transliteration: "Allahumma hawwin 'alayna safarana hadha watwi 'anna bu'dah",
      translation: "O Allah, make this journey easy for us and fold up its length",
      reference: "Muslim",
      benefits: ['Easy journey', 'Travel protection', 'Safe arrival']
    },
    {
      id: 60,
      category: 'quran',
      title: 'Seeking Wisdom',
      arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي',
      transliteration: "Rabbish-rah li sadri wa yassir li amri wahlul 'uqdatan min lisani yafqahu qawli",
      translation: "My Lord, expand for me my breast and ease for me my task and remove the impediment from my speech so they may understand my speech",
      reference: "Quran 20:25-28",
      benefits: ['Wisdom', 'Clear speech', 'Understanding']
    },
    {
      id: 61,
      category: 'morning',
      title: 'Morning Shield',
      arabic: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي',
      transliteration: "Allahumma 'afini fi badani, Allahumma 'afini fi sam'i, Allahumma 'afini fi basari",
      translation: "O Allah, grant me health in my body, O Allah, grant me health in my hearing, O Allah, grant me health in my sight",
      reference: "Abu Dawud",
      benefits: ['Physical health', 'Sensory protection', 'Overall wellbeing']
    },
    {
      id: 62,
      category: 'protection',
      title: 'Daily Shield',
      arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
      transliteration: "Bismillahil-ladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama'i wa huwas-sami'ul-'alim",
      translation: "In the name of Allah, with Whose name nothing can cause harm on earth or in heaven, and He is the All-Hearing, All-Knowing",
      reference: "Abu Dawud",
      benefits: ['Complete protection', 'Divine safety', 'Harm prevention']
    },
    {
      id: 63,
      category: 'stress',
      title: 'Distress Relief',
      arabic: 'لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ',
      transliteration: "La ilaha illallahul-'Adhimul-Halim, la ilaha illallahu Rabbul-'Arshil-'Adhim, la ilaha illallahu Rabbus-samawati wa Rabbul-ardi wa Rabbul-'Arshil-Karim",
      translation: "There is none worthy of worship except Allah, the Mighty, the Forbearing. There is none worthy of worship except Allah, Lord of the Magnificent Throne. There is none worthy of worship except Allah, Lord of the heavens and Lord of the earth, and Lord of the Noble Throne",
      reference: "Bukhari and Muslim",
      benefits: ['Relief from anxiety', 'Peace of mind', 'Divine comfort']
    },
    {
      id: 64,
      category: 'salah',
      title: 'After Prayer',
      arabic: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
      transliteration: "Allahumma a'inni 'ala dhikrika wa shukrika wa husni 'ibadatik",
      translation: "O Allah, help me to remember You, to thank You, and to worship You in the best manner",
      reference: "Abu Dawud",
      benefits: ['Divine assistance', 'Better worship', 'Gratitude']
    },
    {
      id: 65,
      category: 'home',
      title: 'Family Protection',
      arabic: 'اللَّهُمَّ اجْعَلْ بَيْتِي عَامِرًا، وَارْزُقْنِي جَارًا صَالِحًا',
      transliteration: "Allahumma-j'al bayti 'amiran, warzuqni jaran salihan",
      translation: "O Allah, make my house prosperous and grant me a righteous neighbor",
      reference: "Ibn Hibban",
      benefits: ['Home prosperity', 'Good neighbors', 'Family peace']
    },
    {
      id: 66,
      category: 'quran',
      title: 'Understanding',
      arabic: 'رَبِّ زِدْنِي فَهْمًا وَعِلْمًا',
      transliteration: "Rabbi zidni fahman wa 'ilma",
      translation: "My Lord, increase me in understanding and knowledge",
      reference: "Quran",
      benefits: ['Knowledge increase', 'Better understanding', 'Wisdom']
    },
    {
      id: 67,
      category: 'protection',
      title: 'Evil Protection',
      arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
      transliteration: "A'udhu bikalimatil-lahit-tammati min sharri ma khalaq",
      translation: "I seek refuge in the perfect words of Allah from the evil of what He has created",
      reference: "Muslim",
      benefits: ['Protection from evil', 'Divine shelter', 'Safety']
    },
    {
      id: 68,
      category: 'morning',
      title: 'Morning Blessing',
      arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ',
      transliteration: "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namutu, wa ilaikan-nushur",
      translation: "O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the resurrection",
      reference: "Tirmidhi",
      benefits: ['Daily protection', 'Life blessing', 'Divine recognition']
    },
    {
      id: 69,
      category: 'forgiveness',
      title: 'Complete Pardon',
      arabic: 'رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ',
      transliteration: "Rabbigh-fir warham wa anta khairur-rahimin",
      translation: "My Lord, forgive and have mercy, and You are the best of those who show mercy",
      reference: "Quran 23:118",
      benefits: ['Divine forgiveness', 'Mercy', 'Spiritual cleansing']
    },
    {
      id: 70,
      category: 'travel',
      title: 'Journey Dua',
      arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ',
      transliteration: "Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin wa inna ila rabbina lamunqalibun",
      translation: "Glory to Him Who has subjected this to us, and we could never have it by our efforts and truly to our Lord we are returning",
      reference: "Quran 43:13-14",
      benefits: ['Safe journey', 'Gratitude', 'Divine protection']
    }
  ];

  const toggleFavorite = (duaId) => {
    const newFavorites = favorites.includes(duaId)
      ? favorites.filter(id => id !== duaId)
      : [...favorites, duaId];
    setFavorites(newFavorites);
    localStorage.setItem('favoriteDuas', JSON.stringify(newFavorites));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const searchDuas = (dua, query) => {
    const searchTerm = query.toLowerCase();
    return (
      dua.title.toLowerCase().includes(searchTerm) ||
      dua.translation.toLowerCase().includes(searchTerm) ||
      dua.transliteration.toLowerCase().includes(searchTerm) ||
      dua.benefits.some(benefit => benefit.toLowerCase().includes(searchTerm)) ||
      dua.reference.toLowerCase().includes(searchTerm)
    );
  };

  const filteredDuas = duas.filter(dua => {
    const matchesCategory = selectedCategory === 'all' || dua.category === selectedCategory;
    const matchesSearch = searchQuery ? searchDuas(dua, searchQuery) : true;
    return matchesCategory && matchesSearch;
  });

  // Render Category Headers with mobile optimization
  const renderCategoryHeaders = () => (
    <div className="relative w-full mb-4 md:mb-8 category-scroll-container">
      <div className="flex overflow-x-auto category-scroll snap-x snap-mandatory">
        <div className="flex space-x-2 md:space-x-4 px-2 md:px-4 pb-4">
          <motion.button
            key="all"
            onClick={() => setSelectedCategory('all')}
            className={`flex-shrink-0 px-3 md:px-4 py-1.5 md:py-2 rounded-full transition-all text-sm md:text-base ${
              selectedCategory === 'all' 
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white hover:shadow-md'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="whitespace-nowrap">All</span>
          </motion.button>

          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex-shrink-0 px-3 md:px-4 py-1.5 md:py-2 rounded-full transition-all flex items-center space-x-3 md:space-x-2 text-sm md:text-base ${
                selectedCategory === category.id 
                  ? `${category.color} text-white shadow-lg`
                  : 'bg-white hover:shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`w-4 h-4 md:w-5 md:h-5 ${
                selectedCategory === category.id ? 'text-white' : category.color.replace('bg-', 'text-')
              }`}>
                {category.icon}
              </div>
              <span className="whitespace-nowrap">{category.title}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );

  // Add custom CSS for scrollbar behavior
  const customStyles = `
    <style>
      /* Mobile devices - hide scrollbar */
      @media (max-width: 768px) {
        .category-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .category-scroll::-webkit-scrollbar {
          display: none;
        }
      }

      /* Desktop - show stylish scrollbar on hover */
      @media (min-width: 769px) {
        .category-scroll-container {
          position: relative;
          padding-bottom: 4px;
        }

        .category-scroll {
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
          transition: scrollbar-color 0.3s ease;
        }

        .category-scroll::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        .category-scroll::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 10px;
        }

        .category-scroll::-webkit-scrollbar-thumb {
          background-color: transparent;
          border-radius: 10px;
          transition: background-color 0.3s ease;
        }

        .category-scroll-container:hover .category-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(34, 197, 94, 0.5); /* green-500 with opacity */
        }

        .category-scroll-container:hover .category-scroll {
          scrollbar-color: rgba(34, 197, 94, 0.5) transparent;
        }

        .category-scroll::-webkit-scrollbar-thumb:hover {
          background-color: rgba(34, 197, 94, 0.8) !important;
        }
      }
    </style>
  `;

  return (
    <>
      {showFavorites ? (
        <FavoritesPage 
          duas={duas} 
          favorites={favorites} 
          toggleFavorite={toggleFavorite}
          onBack={() => setShowFavorites(false)}
        />
      ) : (
        <div className="min-h-screen bg-gray-50 pt-16 md:pt-20">
          {/* Inject custom styles */}
          <div dangerouslySetInnerHTML={{ __html: customStyles }} />

          {/* Header Section - Compact for mobile */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 md:py-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-7xl mx-auto px-3 md:px-6 text-center relative"
            >
              <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Daily Duas</h1>
              <p className="text-xs md:text-sm text-green-100">Authentic duas from Quran and Sunnah</p>
              <button
                onClick={() => setShowFavorites(true)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-green-100 transition-colors duration-200"
              >
                <FaHeart className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-3 md:px-6 py-4 md:py-6">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {/* Category Headers */}
            {renderCategoryHeaders()}

            {/* Duas List - Compact for mobile */}
            <div className="space-y-3 md:space-y-6">
              {filteredDuas.map((dua) => (
                <motion.div
                  key={dua.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="p-3 md:p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm md:text-base font-medium text-gray-900">{dua.title}</h3>
                      <button
                        onClick={() => toggleFavorite(dua.id)}
                        className={`p-1 md:p-2 ${
                          favorites.includes(dua.id) ? 'text-red-500' : 'text-gray-400'
                        }`}
                      >
                        <FaHeart className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-2">
                      <div className="text-right">
                        <p className="text-base md:text-lg font-arabic text-gray-800">{dua.arabic}</p>
                      </div>
                      
                      <div className="text-xs md:text-sm text-gray-600">
                        <p className="italic">{dua.transliteration}</p>
                      </div>

                      <div className="bg-gray-50 p-2 md:p-3 rounded-lg">
                        <p className="text-xs md:text-sm text-gray-700">{dua.translation}</p>
                      </div>

                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {dua.benefits.map((benefit, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                        <span className="text-xs text-gray-500">Source: {dua.reference}</span>
                        <button
                          onClick={() => copyToClipboard(`${dua.arabic}\n${dua.transliteration}\n${dua.translation}`)}
                          className="p-1 md:p-2 text-gray-400 hover:text-green-500"
                          title="Copy dua"
                        >
                          <FaCopy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DuasCollection; 
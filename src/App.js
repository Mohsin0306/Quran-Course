import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import RamadanPlanner from './pages/RamadanPlanner';
import DuasCollection from './pages/DuasCollection';
import KidsLearning from './pages/KidsLearning';

function App() {
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/ramadan-planner" element={<RamadanPlanner />} />
        <Route path="/duas-collection" element={<DuasCollection />} />
        <Route path="/kids-learning" element={<KidsLearning />} />
      </Routes>
    </Router>
  );
}

export default App;
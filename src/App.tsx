import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Announcements from './pages/Announcements';
import Resources from './pages/Resources';
import PastTeams from './pages/PastTeams';
import Gallery from './pages/Gallery';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Router>
              <div className="min-h-screen bg-white text-black overflow-x-hidden">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<><Projects /><Footer /></>} />
                  <Route path="/team" element={<><Team /><Footer /></>} />
                  <Route path="/announcements" element={<><Announcements /><Footer /></>} />
                  <Route path="/resources" element={<><Resources /><Footer /></>} />
                  <Route path="/past-teams" element={<><PastTeams /><Footer /></>} />
                  <Route path="/gallery" element={<><Gallery /><Footer /></>} />
                </Routes>
              </div>
            </Router>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
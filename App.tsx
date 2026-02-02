
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Technology from './components/Technology';
import Impact from './components/Impact';
import Privacy from './components/Privacy';
import Credits from './components/Credits';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/credits" element={<Credits />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;

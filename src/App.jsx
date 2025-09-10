import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

import Home from './pages/Home';
import SocialPage from './pages/SocialPage';
import CatalogPage from './pages/CatalogPage';
import EventPage from './pages/EventPage';
import Navbar from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/social' element={<SocialPage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/event' element={<EventPage />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
}

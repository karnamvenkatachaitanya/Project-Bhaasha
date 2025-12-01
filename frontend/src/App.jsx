import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import LearnerDashboard from './pages/LearnerDashboard';
import TrainerDashboard from './pages/dashboards/TrainerDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import SuperAdminDashboard from './pages/dashboards/SuperAdminDashboard';
import Login from './pages/Login';
import './components/component-styles.css';

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.includes('dashboard');

  return (
    <div className="min-h-screen bg-background font-sans text-primary flex flex-col">
      {!isDashboard && <Navbar />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<LearnerDashboard />} />
          <Route path="/trainer" element={<TrainerDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/super-admin" element={<SuperAdminDashboard />} />
        </Routes>
      </div>
      {!isDashboard && <Footer />}
    </div>
  );
}

export default App;

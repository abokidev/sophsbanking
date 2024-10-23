import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CreditCard, Shield, Smartphone, Globe, PiggyBank } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Security from './components/Security';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Onboarding from './components/auth/Onboarding';
import Dashboard from './components/dashboard/Dashboard';
import Transfers from './components/dashboard/Transfers';
import Settings from './components/dashboard/Settings';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
  const features = [
    {
      icon: <CreditCard className="w-6 h-6 text-indigo-500" />,
      title: "Smart Spending",
      description: "Track your expenses in real-time with instant notifications and detailed analytics"
    },
    {
      icon: <PiggyBank className="w-6 h-6 text-indigo-500" />,
      title: "Savings Goals",
      description: "Create personalized savings pots and watch your money grow with competitive interest rates"
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-500" />,
      title: "Global Transfers",
      description: "Send money worldwide with zero hidden fees and real exchange rates"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-indigo-500" />,
      title: "Mobile First",
      description: "Complete banking control from your smartphone, anywhere, anytime"
    }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features features={features} />
              <Security />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/onboarding" element={
            <PrivateRoute>
              <Onboarding />
            </PrivateRoute>
          } />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/transfers" element={
            <PrivateRoute>
              <Transfers />
            </PrivateRoute>
          } />
          <Route path="/settings" element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
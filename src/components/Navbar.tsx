import React, { useState } from 'react';
import { Menu, X, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <Wallet className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">Sophs</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#security" className="text-gray-600 hover:text-indigo-600 transition-colors">Security</a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/register"
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
              >
                Open Account
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#security" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Security</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">About</a>
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="w-full mt-2 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 text-center block"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/register"
                className="w-full mt-2 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 text-center block"
              >
                Open Account
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
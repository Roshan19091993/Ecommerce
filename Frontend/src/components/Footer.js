import React from 'react';
import { FaYoutube, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="text-3xl font-bold" title="youtube channel"></p>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://www.youtube.com" title="YouTube Channel" className="hover:text-red-600">
              <FaYoutube size="30" />
            </a>
            <a href="https://twitter.com" title="Twitter Profile" className="hover:text-blue-500">
              <FaTwitter size="30" />
            </a>
            <a href="https://github.com" title="GitHub Profile" className="hover:text-black">
              <FaGithub size="30" />
            </a>
            <a href="https://linkedin.com" title="LinkedIn Profile" className="hover:text-blue-700">
              <FaLinkedin size="30" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-400 pt-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <nav className="space-x-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/about" className="hover:underline">About</Link>
              <Link to="/services" className="hover:underline">Services</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </nav>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

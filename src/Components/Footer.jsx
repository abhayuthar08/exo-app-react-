import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">ExoApp</h3>
          <p className="text-sm text-zinc-400">
            Empowering your digital journey with smart and seamless experiences.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/help" className="hover:text-white transition">Help Center</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-700 mt-10 pt-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} ExoApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

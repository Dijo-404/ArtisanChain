import React from 'react';
import { Palette, Facebook, Twitter, Instagram, Linkedin as LinkedIn } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Palette className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">ArtisanChain</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering local artisans with AI and blockchain technology to create, 
              authenticate, and sell unique handcrafted products globally.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <LinkedIn className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/support" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>hello@artisanchain.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ArtisanChain. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
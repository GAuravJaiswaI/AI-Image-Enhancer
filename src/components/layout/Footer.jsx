import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">AI</span>
            </div>
            <span className="font-bold text-gray-900">Enhancer</span>
          </div>

          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} AI Enhancer. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

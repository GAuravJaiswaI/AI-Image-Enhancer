import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">AI</span>
            </div>
            <span className="text-sm sm:text-base font-bold text-gray-900">Enhancer</span>
          </div>

          <div className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} AI Enhancer. All rights reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a 
              href="https://x.com/@GauravJ85182753" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 transition-colors"
            >
              Twitter
            </a>
            <a 
              href="https://github.com/GAuravJaiswaI" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://discord.gg/gaurav31" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 transition-colors"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

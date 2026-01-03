import React from 'react';
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">AI</span>
          </div>
          <span className="text-xl font-bold text-gray-900">Enhancer</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Features</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Pricing</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Blog</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

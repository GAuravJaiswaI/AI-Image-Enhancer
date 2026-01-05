import React, { useState } from 'react';
import { Button } from "../ui/button";
import { Menu, X } from 'lucide-react';

const Header = ({ onGetStarted }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleScrollTo = (sectionId, e) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64; // Height of sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleGetStarted = (e) => {
    e.preventDefault();
    // Reset any existing image state first
    if (onGetStarted) {
      onGetStarted();
    }
    // Then scroll to upload section with more offset to keep it lower
    setTimeout(() => {
      const element = document.getElementById('upload');
      if (element) {
        const headerOffset = 64; // Height of sticky header
        const extraOffset = 80; // Extra space to keep section lower
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset - extraOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleMobileNavClick = (sectionId, e) => {
    handleScrollTo(sectionId, e);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">AI</span>
          </div>
          <span className="text-base sm:text-xl font-bold text-gray-900">Image Enhancer</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#features" 
            onClick={(e) => handleScrollTo('features', e)}
            className="text-sm font-semibold text-gray-600 hover:text-black transition-all duration-300 relative group py-2"
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => handleScrollTo('pricing', e)}
            className="text-sm font-semibold text-gray-600 hover:text-black transition-all duration-300 relative group py-2"
          >
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#blog" 
            onClick={(e) => handleScrollTo('blog', e)}
            className="text-sm font-semibold text-gray-600 hover:text-black transition-all duration-300 relative group py-2"
          >
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button 
            size="sm"
            onClick={handleGetStarted}
            className="hidden sm:inline-flex"
          >
            Get Started
          </Button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#features" 
              onClick={(e) => handleMobileNavClick('features', e)}
              className="text-sm font-semibold text-gray-600 hover:text-black transition-colors py-2"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleMobileNavClick('pricing', e)}
              className="text-sm font-semibold text-gray-600 hover:text-black transition-colors py-2"
            >
              Pricing
            </a>
            <a 
              href="#blog" 
              onClick={(e) => handleMobileNavClick('blog', e)}
              className="text-sm font-semibold text-gray-600 hover:text-black transition-colors py-2"
            >
              Blog
            </a>
            <Button 
              size="sm"
              onClick={(e) => {
                handleGetStarted(e);
                setMobileMenuOpen(false);
              }}
              className="w-full mt-2"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

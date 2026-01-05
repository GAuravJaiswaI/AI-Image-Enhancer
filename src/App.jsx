import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import UploadSection from './components/sections/UploadSection';
import Features from './components/sections/Features';
import Pricing from './components/sections/Pricing';
import Blog from './components/sections/Blog';
import ResultSection from './components/sections/ResultSection';
import { enhanceImageAPI } from './lib/enhanceImageAPI';

const App = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (file) => {
    // Create local preview URL
    const objectUrl = URL.createObjectURL(file);
    setOriginalImage(objectUrl);
    setEnhancedImage(null);
    setLoading(true);

    try {
      // Call API
      const result = await enhanceImageAPI(file);
      // The API returns { image: "url" }
      setEnhancedImage(result?.image);
    } catch (error) {
      console.error("Enhancement failed:", error);
      alert("Failed to enhance image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setOriginalImage(null);
    setEnhancedImage(null);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      <Header onGetStarted={handleReset} />

      <main className="grow">
        <Hero />

        {/* Show upload section or result section based on image state */}
        {originalImage ? (
          <ResultSection
            originalImage={originalImage}
            enhancedImage={enhancedImage}
            loading={loading}
            onReset={handleReset}
          />
        ) : (
          <UploadSection onImageUpload={handleImageUpload} />
        )}

        {/* Always show these sections below */}
        <Features />
        <Pricing />
        <Blog />
      </main>

      <Footer />
    </div>
  );
};

export default App;

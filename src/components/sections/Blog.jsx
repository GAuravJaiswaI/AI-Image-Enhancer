import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, MessageCircle } from 'lucide-react';

// Social Media Icons as SVG Components
const DiscordIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Blog = () => {
  return (
    <section id="blog" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-block py-1 px-2 sm:px-3 rounded-full bg-gray-100 text-xs font-semibold tracking-wide uppercase text-gray-500 mb-3 sm:mb-4">
            Blog
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-3 sm:mb-4 px-2">
            Inspirations
            <span className="font-serif italic font-normal"> Devouring Details</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 px-4">
            The platform's design is deeply inspired by modern minimalism.
            We focus on speed, precision, and privacy to deliver the best results.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>5 min read</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              The Future of Image Enhancement: AI-Powered Precision
            </h3>

            <div className="prose prose-sm sm:prose-lg max-w-none text-gray-700 space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg leading-relaxed">
                In an era where visual content dominates our digital landscape, the demand for high-quality, 
                professionally enhanced images has never been greater. Traditional image editing tools require 
                extensive knowledge, time, and often expensive software. Enter AI Image Enhancer—a revolutionary 
                platform that transforms the way we approach image enhancement.
              </p>

              <p className="text-lg leading-relaxed">
                Our platform leverages cutting-edge artificial intelligence to deliver results that were once 
                only achievable through hours of manual editing. Whether you're a photographer looking to restore 
                old memories, a designer needing crisp visuals, or a content creator seeking that perfect shot, 
                AI Image Enhancer brings professional-grade enhancement to your fingertips.
              </p>

              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
                Speed Meets Quality
              </h4>

              <p className="text-base sm:text-lg leading-relaxed">
                One of the most remarkable aspects of our AI-powered solution is its incredible speed. What 
                traditionally took hours can now be accomplished in milliseconds. Our optimized AI engine 
                processes images with unprecedented efficiency, ensuring you get instant results without 
                compromising on quality.
              </p>

              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
                Precision That Surprises
              </h4>

              <p className="text-base sm:text-lg leading-relaxed">
                The AI doesn't just enhance what you see—it discovers and amplifies details you didn't even 
                know existed. Our advanced algorithms analyze every pixel, understanding context, lighting, 
                and composition to bring out the best in every image. The result? Stunning visuals that 
                maintain authenticity while achieving professional polish.
              </p>

              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
                Privacy First
              </h4>

              <p className="text-base sm:text-lg leading-relaxed">
                In a world increasingly concerned about data privacy, we've built our platform with security 
                at its core. Your images are processed with the utmost care—either locally on your device or 
                through secure, encrypted channels. Once processing is complete, images are deleted instantly, 
                ensuring your content remains yours alone.
              </p>

              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
                Modern Minimalism in Design
              </h4>

              <p className="text-base sm:text-lg leading-relaxed">
                The platform's design philosophy is deeply rooted in modern minimalism. We believe that 
                powerful tools shouldn't be complicated. Our clean, intuitive interface puts the focus where 
                it belongs—on your images and the incredible transformations they undergo. Every element is 
                thoughtfully designed to enhance your workflow, not hinder it.
              </p>

              <p className="text-base sm:text-lg leading-relaxed mt-6 sm:mt-8">
                As we continue to push the boundaries of what's possible with AI-driven image enhancement, 
                we remain committed to delivering tools that are fast, precise, and respectful of your privacy. 
                The future of image editing is here, and it's more accessible than ever.
              </p>
            </div>

            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  <p className="text-xs sm:text-sm text-gray-600">
                    Written by <span className="font-semibold text-gray-900">Gaurav Jaiswal</span>
                  </p>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="text-xs sm:text-sm text-gray-500 mr-1 sm:mr-2">Connect:</span>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <a
                      href="https://discord.gg/gaurav31"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#7289DA] text-white flex items-center justify-center hover:bg-[#5b6eae] transition-colors duration-200"
                      aria-label="Discord"
                    >
                      <DiscordIcon />
                    </a>
                    <a
                      href="https://m.facebook.com/profile.php?id=100024295104204"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-[#1464d1] transition-colors duration-200"
                      aria-label="Facebook"
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      href="https://instagram.com/gaurav_shivin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white flex items-center justify-center hover:opacity-90 transition-opacity duration-200"
                      aria-label="Instagram"
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href="https://linkedin.com/in/gaurav005"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#0077B5] text-white flex items-center justify-center hover:bg-[#006399] transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon />
                    </a>
                    <a
                      href="https://x.com/@GauravJ85182753"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                      aria-label="X (Twitter)"
                    >
                      <XIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Blog;


import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

const UploadSection = ({ onImageUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState(null);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const validateFile = (file) => {
    if (!file.type.startsWith('image/')) {
      return 'Please upload an image file (JPEG, PNG, WEBP).';
    }
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      return 'File size must be less than 5MB.';
    }
    return null;
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    setError(null);

    const file = e.dataTransfer.files[0];
    if (file) {
      const validationError = validateFile(file);
      if (validationError) {
        setError(validationError);
      } else {
        onImageUpload(file);
      }
    }
  }, [onImageUpload]);

  const handleFileInput = (e) => {
    setError(null);
    const file = e.target.files[0];
    if (file) {
      const validationError = validateFile(file);
      if (validationError) {
        setError(validationError);
      } else {
        onImageUpload(file);
      }
    }
  };

  return (
    <section className="container mx-auto px-4 -mt-20 relative z-20 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl border-0">
          <CardContent className="p-0">
            <div
              className={cn(
                "relative border-2 border-dashed rounded-xl p-12 transition-all duration-200 flex flex-col items-center justify-center min-h-[400px] bg-white",
                isDragging ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300",
                error ? "border-red-500 bg-red-50" : ""
              )}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="image-upload"
                className="hidden"
                accept="image/*"
                onChange={handleFileInput}
              />

              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                {error ? (
                  <AlertCircle className="w-10 h-10 text-red-500" />
                ) : (
                  <Upload className="w-10 h-10 text-gray-400" />
                )}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {error ? "Upload Failed" : "Upload your image"}
              </h3>

              <p className="text-gray-500 text-center max-w-sm mb-8">
                {error ? (
                  <span className="text-red-500">{error}</span>
                ) : (
                  "Drag and drop your image here, or click to browse. Supports JPG, PNG, and WebP up to 5MB."
                )}
              </p>

              <label htmlFor="image-upload">
                <Button size="lg" className="cursor-pointer" asChild>
                  <span>
                    {error ? "Try Again" : "Select Image"}
                  </span>
                </Button>
              </label>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default UploadSection;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, RefreshCw, Loader2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const ResultSection = ({ originalImage, enhancedImage, loading, onReset }) => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleDownload = () => {
    if (enhancedImage) {
      const link = document.createElement('a');
      link.href = enhancedImage;
      link.download = 'enhanced-image.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!originalImage) return null;

  return (
    <section className="container mx-auto px-4 -mt-20 relative z-20 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-6xl mx-auto overflow-hidden shadow-2xl border-0 bg-white">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[600px]">

              {/* Image Viewer Area */}
              <div className="lg:col-span-2 relative bg-gray-100 overflow-hidden flex items-center justify-center p-4">
                <div className="relative w-full h-full max-h-[600px] aspect-video rounded-lg overflow-hidden shadow-inner bg-[url('https://transparenttextures.com/patterns/checkerboard.png')]">

                  {loading ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-50">
                      <Loader2 className="w-12 h-12 animate-spin text-black mb-4" />
                      <p className="text-lg font-medium text-gray-900">Enhancing your image...</p>
                      <p className="text-sm text-gray-500">This usually takes a few seconds.</p>
                    </div>
                  ) : null}

                  {/* Image Container */}
                  <div className="relative w-full h-full">
                   {enhancedImage && !loading ? (
                    <>
                         <div
                            className="absolute inset-0 pointer-events-none select-none"
                        >
                             {/* Original Image */}
                             <img
                                src={originalImage}
                                className="absolute inset-0 w-full h-full object-contain"
                                alt="Original"
                             />

                             {/* Enhanced Image Clipped */}
                             <div
                                className="absolute inset-0 w-full h-full overflow-hidden"
                                style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                             >
                                <img
                                    src={enhancedImage}
                                    className="absolute inset-0 w-full h-full object-contain"
                                    alt="Enhanced"
                                />
                             </div>

                             {/* Slider Line */}
                             <div
                                className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-auto cursor-ew-resize hover:bg-blue-400 transition-colors"
                                style={{ left: `${sliderValue}%` }}
                             >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <div className="flex gap-1">
                                        <div className="w-0.5 h-3 bg-gray-400"></div>
                                        <div className="w-0.5 h-3 bg-gray-400"></div>
                                    </div>
                                </div>
                             </div>
                        </div>

                         {/* Invisible Range Input for Interaction */}
                         <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderValue}
                            onChange={(e) => setSliderValue(Number(e.target.value))}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
                        />
                    </>
                   ) : (
                     <img
                      src={originalImage}
                      alt="Original"
                      className="absolute top-0 left-0 w-full h-full object-contain"
                    />
                   )}

                  </div>

                </div>
              </div>

              {/* Sidebar / Controls */}
              <div className="p-8 flex flex-col justify-between border-l border-gray-100 bg-white">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Result</h2>
                    <Badge variant={enhancedImage ? "default" : "secondary"}>
                      {loading ? "Processing" : enhancedImage ? "Enhanced" : "Original"}
                    </Badge>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-3">Comparison View</h3>
                      <p className="text-xs text-gray-400 mb-4">
                        Drag the slider on the image to compare the original and enhanced versions.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <span className="block text-xs font-bold text-gray-400 uppercase">Original</span>
                            <span className="text-sm font-medium text-gray-900">Before</span>
                        </div>
                         <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <span className="block text-xs font-bold text-blue-500 uppercase">Enhanced</span>
                            <span className="text-sm font-medium text-gray-900">After</span>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mt-8">
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={handleDownload}
                    disabled={!enhancedImage || loading}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Enhanced Image
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full"
                    size="lg"
                    onClick={onReset}
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Upload New Image
                  </Button>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default ResultSection;

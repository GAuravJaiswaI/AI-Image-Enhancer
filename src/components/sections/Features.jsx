import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const FeatureCard = ({ title, description, color, icon: Icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative overflow-hidden rounded-3xl p-8 flex flex-col justify-between min-h-[320px] group transition-all duration-300 hover:shadow-xl",
        color === 'yellow' && "bg-[#F3F46E] text-black",
        color === 'blue' && "bg-[#3B82F6] text-white",
        color === 'white' && "bg-white border border-gray-200 text-black"
      )}
    >
      <div className="z-10">
        <div className="mb-6">
          {/* Typography 'Aa' simulation or Icon */}
          <Icon className={cn("w-12 h-12", color === 'yellow' ? "text-black" : (color === 'blue' ? "text-white" : "text-black"))} strokeWidth={1.5} />
        </div>
        <h3 className={cn("text-4xl font-serif leading-tight mb-4", color === 'blue' ? "font-sans font-bold" : "font-serif italic")}>
          {title}
        </h3>
        <p className={cn("text-lg opacity-80", color === 'blue' ? "text-blue-100" : "text-gray-700")}>
          {description}
        </p>
      </div>

      <div className="z-10 mt-8">
        <a href="#" className="inline-flex items-center text-sm font-medium hover:underline gap-1">
          Coming soon <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {color === 'yellow' && (
           <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full border-[20px] border-black/10" />
        )}
        {color === 'blue' && (
           <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        )}
         {color === 'white' && (
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rotate-12 border border-gray-100" />
        )}
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-xs font-semibold tracking-wide uppercase text-gray-500 mb-4">
            Inspirations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
             Devouring <span className="font-serif italic font-normal">Details</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            The platform's design is deeply inspired by modern minimalism.
            We focus on speed, precision, and privacy to deliver the best results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Instant Speed"
            description="Process images in milliseconds with our optimized AI engine."
            color="yellow"
            icon={Zap}
            delay={0.1}
          />
          <FeatureCard
            title="AI Precision"
            description="Enhance details you didn't even know existed."
            color="blue"
            icon={Sparkles}
            delay={0.2}
          />
          <FeatureCard
            title="Secure & Safe"
            description="Your images are processed locally or securely and deleted instantly."
            color="white"
            icon={ShieldCheck}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

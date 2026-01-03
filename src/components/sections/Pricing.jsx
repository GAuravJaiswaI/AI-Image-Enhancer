import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

const PricingCard = ({ title, price, description, features, popular, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "flex flex-col p-8 rounded-3xl border transition-all duration-300 relative",
        popular
          ? "border-black shadow-xl bg-white scale-105 z-10"
          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg"
      )}
    >
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold tracking-tight text-gray-900">${price}</span>
          <span className="text-sm text-gray-500">/mo</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      </div>

      <ul className="space-y-4 flex-1 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
            <Check className="w-5 h-5 text-green-500 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={cn(
          "w-full py-6 text-base font-semibold",
          popular ? "bg-black text-white hover:bg-gray-800" : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        )}
      >
        {price === 0 ? "Get Started" : "Subscribe"}
      </Button>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Simple Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <PricingCard
            title="Starter"
            price={0}
            description="Perfect for trying out our features."
            features={[
              "5 images per month",
              "Standard resolution",
              "Basic support",
              "Personal use"
            ]}
            delay={0.1}
          />
          <PricingCard
            title="Pro"
            price={19}
            description="For professionals who need the best."
            popular={true}
            features={[
              "Unlimited images",
              "4K Ultra HD export",
              "Priority processing",
              "Commercial license",
              "24/7 Support"
            ]}
            delay={0.2}
          />
          <PricingCard
            title="Enterprise"
            price={49}
            description="For teams and high-volume needs."
            features={[
              "Everything in Pro",
              "API Access",
              "Custom integration",
              "Dedicated account manager",
              "SSO & Advanced Security"
            ]}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;

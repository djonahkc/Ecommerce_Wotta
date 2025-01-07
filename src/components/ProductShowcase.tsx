import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Droplets, Zap, ThermometerSun } from 'lucide-react';
import { useMouseGlow } from './MicroInteractions';
import Section from './Section';

const ProductShowcase = () => {
  const { mouseX, mouseY, handleMouseMove } = useMouseGlow();
  const [activeColor, setActiveColor] = useState<'cyan' | 'purple' | 'gold'>('cyan');

  const colors = {
    cyan: 'from-cyan-500 to-blue-600',
    purple: 'from-purple-500 to-pink-600',
    gold: 'from-yellow-400 to-orange-500'
  };

  const features = [
    { icon: <ThermometerSun className="w-5 h-5" />, text: "Temperature Control" },
    { icon: <Droplets className="w-5 h-5" />, text: "Hydration Tracking" },
    { icon: <Zap className="w-5 h-5" />, text: "Quick Charge" },
  ];

  const colorDetails = {
    cyan: {
      name: 'Arctic Blue',
      tagline: 'Cool Precision',
      description: 'Inspired by glacial waters, perfect for those who seek clarity and focus.',
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80',
      specs: {
        capacity: '750ml',
        battery: '30 days',
        charging: '2 hours'
      }
    },
    purple: {
      name: 'Royal Purple',
      tagline: 'Bold Innovation',
      description: 'A statement of luxury and advancement in hydration technology.',
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80&sat=-100&hue=290',
      specs: {
        capacity: '750ml',
        battery: '30 days',
        charging: '2 hours'
      }
    },
    gold: {
      name: 'Sunset Gold',
      tagline: 'Timeless Elegance',
      description: 'Radiant finish that brings warmth and sophistication to your daily routine.',
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80&sat=-100&hue=50',
      specs: {
        capacity: '750ml',
        battery: '30 days',
        charging: '2 hours'
      }
    }
  };

  return (
    <Section>
      <div 
        className="relative"
        onMouseMove={handleMouseMove}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Choose Your Style
                </h2>
                <p className="text-xl text-gray-400">
                  Experience precision engineering with our signature finishes.
                </p>
              </motion.div>
              
              <div className="space-y-10">
                <motion.div 
                  className="flex gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {Object.entries(colors).map(([color, gradient]) => (
                    <motion.button
                      key={color}
                      aria-label={`Select ${color} color`}
                      onClick={() => setActiveColor(color as 'cyan' | 'purple' | 'gold')}
                      className={`relative w-20 h-20 rounded-xl bg-gradient-to-br ${gradient} 
                        ${activeColor === color ? 'ring-2 ring-white ring-offset-4 ring-offset-black' : 'opacity-75'}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      {activeColor === color && (
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <Check className="w-8 h-8 text-white" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeColor}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white">
                        {colorDetails[activeColor].name}
                      </h3>
                      <p className="text-lg text-cyan-400 font-medium">
                        {colorDetails[activeColor].tagline}
                      </p>
                      <p className="text-gray-400 leading-relaxed">
                        {colorDetails[activeColor].description}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="relative p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 cursor-pointer group"
                          whileHover={{ y: -5 }}
                        >
                          <div className="flex flex-col items-center text-center gap-2">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${colors[activeColor]}`}>
                              {feature.icon}
                            </div>
                            <span className="text-sm text-gray-300">{feature.text}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="text-center">
                        <p className="text-gray-400 text-sm">Capacity</p>
                        <p className="text-white font-bold">{colorDetails[activeColor].specs.capacity}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-400 text-sm">Battery Life</p>
                        <p className="text-white font-bold">{colorDetails[activeColor].specs.battery}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-400 text-sm">Charging Time</p>
                        <p className="text-white font-bold">{colorDetails[activeColor].specs.charging}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <motion.div 
              className="flex-1 max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeColor}
                    className="relative rounded-2xl overflow-hidden shadow-2xl group"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    <img
                      src={colorDetails[activeColor].image}
                      alt={`HYDRO-X Bottle in ${colorDetails[activeColor].name}`}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors[activeColor]} mix-blend-overlay opacity-40 
                      group-hover:opacity-30 transition-opacity duration-300`} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(54,195,255,0.15), transparent 80%)`,
          }}
        />
      </div>
    </Section>
  );
};

export default ProductShowcase;
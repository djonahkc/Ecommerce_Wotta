import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated water background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-black to-black" />
        
        {/* Ripple effects */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`ripple-${i}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-cyan-500/20 rounded-full"
            animate={{
              width: ['0vh', '150vh'],
              height: ['0vh', '150vh'],
              opacity: [0.4, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Floating bubbles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full bg-cyan-400/30 blur-sm"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: '100%'
            }}
            animate={{
              y: [0, `-${100 + Math.random() * 50}vh`],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left stagger-children">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text animate-glitch">
                Wotta
              </span>
              <br />
              <span className="animate-matrix-rain text-4xl sm:text-5xl lg:text-6xl">
                The Future of Hydration
              </span>
            </h1>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <motion.button
                className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 
                  px-8 py-5 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 
                  hover:scale-105 animate-energy-pulse shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-white text-xl">Pre-order Now</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="px-8 py-5 rounded-full text-lg font-semibold border-2 border-white/20 
                  hover:bg-white/10 transition-all duration-300 hover:scale-105 relative overflow-hidden 
                  animate-quantum text-white hover:border-white/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 text-xl">Learn More</span>
                <div className="absolute inset-0 animate-cyber-scan"></div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
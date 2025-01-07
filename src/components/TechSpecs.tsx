import React from 'react';
import { motion } from 'framer-motion';
import { 
  Thermometer, 
  Battery, 
  Smartphone, 
  Wifi, 
  Droplets, 
  Timer,
  Scale,
  Zap
} from 'lucide-react';
import { useMouseGlow } from './MicroInteractions';
import Section from './Section';

const TechSpecs = () => {
  const { mouseX, mouseY, handleMouseMove } = useMouseGlow();

  const specifications = [
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Temperature Range",
      value: "2°C - 60°C",
      detail: "Precision temperature control with ±0.5°C accuracy",
      gradient: "from-red-400 to-amber-500"
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Battery Life",
      value: "30 Days",
      detail: "Extended life with wireless Qi charging capability",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Capacity",
      value: "750ml",
      detail: "Perfect size for daily hydration needs",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Charging Time",
      value: "2 Hours",
      detail: "Quick charge technology for minimal downtime",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Connectivity",
      value: "Bluetooth 5.0",
      detail: "Seamless connection up to 30 meters range",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <Timer className="w-6 h-6" />,
      title: "Temperature Retention",
      value: "24 Hours",
      detail: "Advanced vacuum insulation technology",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Water Resistance",
      value: "IPX7",
      detail: "Protected against water immersion",
      gradient: "from-teal-400 to-cyan-500"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "App Compatibility",
      value: "iOS & Android",
      detail: "Real-time tracking and insights",
      gradient: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <Section className="bg-black">
      <div 
        className="relative pt-24 md:pt-32"
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-black to-black" />
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full bg-cyan-400/30 blur-sm"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%'
              }}
              animate={{
                y: [0, -30],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced technology meets precision engineering in every detail.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-colors duration-300">
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Icon with gradient background */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${spec.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {spec.icon}
                  </div>

                  <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                    {spec.title}
                  </h3>
                  
                  <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-2">
                    {spec.value}
                  </p>
                  
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {spec.detail}
                  </p>

                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mouse follow effect */}
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

export default TechSpecs;
import { motion } from 'framer-motion';
import { Droplets, Battery, Thermometer, Smartphone } from 'lucide-react';
import Section from './Section';

const features = [
  {
    icon: Droplets,
    title: "Smart Hydration",
    description: "AI-powered hydration tracking that learns your habits and provides personalized recommendations.",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    icon: Battery,
    title: "Long Battery Life",
    description: "6-month battery life with wireless charging capability for uninterrupted tracking.",
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    icon: Thermometer,
    title: "Temperature Control",
    description: "Advanced temperature maintenance keeps your drink at the perfect temperature for hours.",
    gradient: "from-teal-500 to-emerald-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Integration",
    description: "Seamless connection with our mobile app for real-time hydration insights and reminders.",
    gradient: "from-emerald-500 to-blue-500"
  }
];

const Features = () => {
  return (
    <Section>
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" 
            style={{ animationDelay: '1s' }}
          />
          
          {/* Subtle Grid */}
          <div 
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(54, 195, 255) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-6">
              Intelligent Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the next generation of hydration technology with our smart features designed for modern life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <motion.div 
                  className="relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm p-8 lg:p-10 hover:bg-gray-900/70 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  
                  <div className="relative">
                    {/* Icon with gradient background */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-full h-full text-white" />
                    </div>

                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                      {feature.description}
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features;
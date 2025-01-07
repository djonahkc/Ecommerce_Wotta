import { motion } from 'framer-motion';
import { useMouseGlow } from './MicroInteractions';
import Section from './Section';

const Testimonials = () => {
  const { mouseX, mouseY, handleMouseMove } = useMouseGlow();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Professional Athlete",
      quote: "Wotta has revolutionized my training routine. The smart features and temperature control are game-changing.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      name: "David Chen",
      role: "Tech Executive",
      quote: "The integration with my daily routine is seamless. It's not just a water bottle, it's a smart hydration companion.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      name: "Emma Williams",
      role: "Fitness Instructor",
      quote: "My clients love the design and smart tracking features. It's helped them stay consistent with their hydration goals.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      gradient: "from-blue-400 to-purple-500"
    }
  ];

  return (
    <Section className="bg-black">
      <div 
        className="relative pt-24 md:pt-32"
        onMouseMove={handleMouseMove}
      >
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-black to-black" />
          
          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
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
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of satisfied users who've transformed their hydration habits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition-colors duration-300">
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`relative rounded-full p-0.5 bg-gradient-to-r ${testimonial.gradient}`}>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-black"
                        />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.quote}"</p>

                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mouse follow effect */}
        <div 
          className="absolute inset-0 pointer-events-none mouse-glow"
          data-mouse-x={`${mouseX}px`}
          data-mouse-y={`${mouseY}px`}
        />
      </div>
    </Section>
  );
};

export default Testimonials;
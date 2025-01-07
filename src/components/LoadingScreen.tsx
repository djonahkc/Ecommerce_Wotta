import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div 
          className="h-24 w-24 rounded-full border-t-2 border-r-2 border-cyan-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute inset-0 h-24 w-24 rounded-full border-b-2 border-l-2 border-purple-500"
          animate={{ rotate: -180 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
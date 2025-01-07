import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import TechSpecs from './components/TechSpecs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Navbar />
            <CustomCursor />
            <main className="relative">
              <Hero />
              <Features />
              <ProductShowcase />
              <TechSpecs />
              <Testimonials />
              <Footer />
            </main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
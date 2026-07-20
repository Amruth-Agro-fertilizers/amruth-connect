import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';

import heroImage from '../assets/images/regenerated_image_1781068345753.avif';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      onComplete();
    }, 2800); 

    return () => clearTimeout(timer);
  }, [onComplete]);

  const particles = Array.from({ length: 24 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 8 + 12,
    delay: -Math.random() * 15,
  }));

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center justify-between min-h-screen w-full bg-[#0A3821] overflow-hidden font-sans fixed inset-0 z-50 selection:bg-none"
    >
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-overlay"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: 'blur(8px)',
          transform: 'scale(1.15)',
        }}
      />

      {/* Primary Brand Gradient Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0A3821]/80 via-[#18593A]/50 to-[#0A3821]/90" />

      {/* Diagonal Layers for Web UI consistency */}
      <div className="absolute -top-[50%] -right-[10%] w-[120%] h-[150%] z-0 bg-[#18593A] rotate-12 transform origin-center shadow-2xl opacity-80 backdrop-blur-3xl" style={{ borderRadius: '100px' }} />
      <div className="absolute top-[20%] -left-[20%] w-[80%] h-[120%] z-0 bg-[#D97706]/10 -rotate-6 transform origin-center blur-[100px] rounded-full" />

      {/* Floating Particles/Leaves */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {mounted && particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-[2px] bg-white/20 backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.1)]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.initialX}%`,
              top: `${p.initialY}%`,
              borderRadius: p.size % 2 === 0 ? '50%' : '100% 0 100% 0', // mix of circles and leaf-like shapes
            }}
            animate={{
              y: [0, -100, -200],
              x: [0, Math.random() * 40 - 20, Math.random() * 80 - 40],
              opacity: [0, Math.random() * 0.4 + 0.1, 0],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="w-full flex-grow flex flex-col items-center justify-center relative z-20 px-8">
        {/* Logo Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative flex items-center justify-center mb-8"
        >
          {/* Logo Glow Behind */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-white/30 rounded-full blur-[40px] w-32 h-32" 
          />
          
          <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-white shadow-[0_8px_40px_rgba(0,0,0,0.2)] overflow-hidden border border-white/20">
             <motion.div 
               initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
               animate={{ rotate: 0, scale: 1, opacity: 1 }}
               transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
               className="relative z-10"
             >
                <Leaf fill="currentColor" strokeWidth={1} className="w-12 h-12 text-[#18593A]" />
             </motion.div>
          </div>
        </motion.div>

        {/* Text Elements */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center"
        >
          <motion.div className="overflow-hidden inline-flex mb-3">
            <motion.span 
              initial={{ y: "100%", opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 }}
              className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
            >
              AMRUTH Connect
            </motion.span>
          </motion.div>
          
          <div className="h-px w-0 bg-gradient-to-r from-transparent via-[#D97706]/50 to-transparent mx-auto overflow-hidden">
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
              className="w-full h-full bg-[#D97706]"
            />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-sm md:text-base text-gray-200 mt-4 font-medium tracking-wide max-w-[250px] mx-auto leading-relaxed"
          >
            Know your soil.<br/>Choose the right fertilizer.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Amber Accent Line */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="w-full h-1.5 bg-gradient-to-r from-[#D97706] to-[#F59E0B] relative z-20 origin-left"
      />
    </motion.div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Spline 
        scene="/welcome.spline" 
        style={{ 
          width: '100%', 
          height: '100%'
        }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
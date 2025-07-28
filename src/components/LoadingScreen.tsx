import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const loadingSteps = [
    "[ Initializing Robotics Core v2.0... ]",
    "[ Activating Motion Modules... ]",
    "[ Loading Neural Networks... ]",
    "[ Calibrating Sensors... ]",
    "[ Boot Complete. Entering Interface. ]"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 3;
      });
    }, 40);

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 700);

    return () => {
      clearInterval(interval);

      clearInterval(stepInterval);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Mechanical Eye */}
      <motion.div
        className="mechanical-eye mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
      />

      {/* Loading Text */}
      <div className="text-center mb-8">
        <motion.h1
          className="text-4xl font-bold mb-4 glitch floating"
          data-text="ROBOTICS CLUB"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ROBOTICS CLUB
        </motion.h1>
        
        <motion.div
          className="text-lg font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {loadingSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`typing pulse ${index === currentStep ? 'opacity-100' : index < currentStep ? 'opacity-50' : 'opacity-0'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index <= currentStep ? (index === currentStep ? 1 : 0.5) : 0 }}
              transition={{ duration: 0.3 }}
            >
              {index === currentStep && step}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      
      <div className="text-sm font-mono mt-2">
        {progress}% COMPLETE
      </div>

      {/* Circuit Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="circuit" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 0,5 L 10,5 M 5,0 L 5,10" stroke="currentColor" strokeWidth="0.5" fill="none"/>
              <circle cx="5" cy="5" r="1" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
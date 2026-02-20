import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Code, Zap, BookOpen } from 'lucide-react';
import Footer from '../components/Footer';

const Wokwi: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'arduino' | 'esp32' | 'pi'>('arduino');

  const circuits = {
    arduino: [
      {
        title: 'LED Blink',
        description: 'Basic LED blinking circuit with Arduino Uno',
        projectUrl: 'https://wokwi.com/projects/375659283936335873',
        tags: ['Beginner', 'Basic'],
      },
      {
        title: 'Blink Without Delay',
        description: 'LED blinking using non-blocking delay technique',
        projectUrl: 'https://wokwi.com/projects/385792162179269633',
        tags: ['Intermediate', 'Timing'],
      },
      {
        title: 'Push Button',
        description: 'Read digital input from a push button',
        projectUrl: 'https://wokwi.com/projects/357415153424082945',
        tags: ['Input', 'Beginner'],
      }
    ],
    esp32: [
      {
        title: 'WiFi Scanner',
        description: 'Scan and display available WiFi networks',
        projectUrl: 'https://wokwi.com/projects/305569599398609473',
        tags: ['WiFi', 'Networking'],
      },
      {
        title: 'Bluetooth Serial',
        description: 'Bluetooth serial communication example',
        projectUrl: 'https://wokwi.com/projects/323449337975280129',
        tags: ['Bluetooth', 'Communication'],
      }
    ],
    pi: [
      {
        title: 'Pico LED Blink',
        description: 'Basic LED blinking with Raspberry Pi Pico',
        projectUrl: 'https://wokwi.com/projects/321412687444081665',
        tags: ['GPIO', 'Basic'],
      },
      {
        title: 'Pico Read ADC',
        description: 'Read analog values from ADC pin',
        projectUrl: 'https://wokwi.com/projects/323317458477371393',
        tags: ['ADC', 'Sensors'],
      }
    ]
  };

  const features = [
    {
      icon: Play,
      title: 'Live Simulation',
      description: 'Run and test your circuits in real-time without any hardware'
    },
    {
      icon: Code,
      title: 'Code Editor',
      description: 'Built-in code editor with syntax highlighting and auto-completion'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get immediate feedback on your circuit designs and code'
    },
    {
      icon: BookOpen,
      title: 'Learn & Experiment',
      description: 'Perfect for learning electronics and prototyping ideas'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Wokwi Simulator
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Design, simulate, and test electronic circuits directly in your browser. 
              No hardware required!
            </motion.p>
            <motion.a
              href="https://wokwi.com"
              target="_self"
              className="inline-block px-8 py-4 bg-black text-white hover:bg-gray-800 transition-all duration-300 font-semibold group"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Wokwi
            </motion.a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                >
                  <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Interactive Circuit Examples */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Interactive Circuit Examples</h2>
            <p className="text-xl text-gray-600">
              Try these pre-built circuit simulations to get started
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(circuits).map((platform) => (
              <button
                key={platform}
                onClick={() => setActiveTab(platform as any)}
                className={`px-6 py-3 border-2 font-semibold transition-all duration-300 ${
                  activeTab === platform
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-gray-300 hover:border-black'
                }`}
              >
                {platform.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Circuit Examples Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {circuits[activeTab].map((circuit, index) => (
              <motion.div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-black transition-all duration-300"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="aspect-video bg-gray-100 relative flex items-center justify-center">
                  <div className="text-center p-8">
                    <Code className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600 mb-4">{circuit.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{circuit.title}</h3>
                  <p className="text-gray-600 mb-4">{circuit.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {circuit.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={circuit.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-2 bg-black text-white hover:bg-gray-800 transition-all duration-300 font-semibold text-center"
                  >
                    Open in Wokwi
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Get Started Section */}
      <motion.section
        className="py-20 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Start Building Today</h2>
          <p className="text-xl mb-8">
            Join thousands of students and hobbyists using Wokwi to learn electronics and programming
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wokwi.com"
              className="inline-block px-8 py-4 bg-white text-black hover:bg-gray-100 transition-all duration-300 font-semibold text-center"
            >
              Start Simulation
            </a>
            <a
              href="https://docs.wokwi.com"
              className="inline-block px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold text-center"
            >
              View Documentation
            </a>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Wokwi;
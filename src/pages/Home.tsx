import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Zap, Users, Trophy, Wrench, Calendar, Award, Cpu, Target, BookOpen, Lightbulb } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

const stats = [
  { icon: Users, value: '200+', label: 'Students' },
  { icon: Trophy, value: '5', label: 'Specialized Labs' },
  { icon: Wrench, value: '20+', label: 'Projects Developed' },
  { icon: Zap, value: '10', label: 'Workshops Conducted' },
];

const features = [
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'Designing high-accuracy robotic systems for industrial, medical, and research applications.'
  },
  {
    icon: Cpu,
    title: 'AI Integration',
    description: 'Building intelligent systems using machine learning, computer vision, and autonomous control.'
  },
  {
    icon: Lightbulb,
    title: 'Advanced Innovation Lab',
    description: 'Equipped with robotics kits, 3D printers, IoT devices, and real-time testing environments.'
  },
  {
    icon: BookOpen,
    title: 'Research & Mentorship',
    description: 'Workshops, hackathons, and faculty-guided projects to enhance technical expertise.'
  }
];


  const achievements = [
    {
      year: '2024',
      title: 'IARC',
      description: 'Participated In Line Following Competition help by Techkriti IIT Kanpur',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg'
    }
    
  ];


  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <Spline 
            scene="/home.spline" 
            style={{ 
              width: '100%', 
              height: '100vh'
            }}
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 pointer-events-auto"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Impact
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exploring the frontiers of robotics through hands-on projects, advanced research, and collaborative innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group smooth-hover"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-black group-hover:shadow-lg transition-all duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">About Our Club</h2>
            <p className="text-xl leading-relaxed mb-8">
               The Department of Artificial Intelligence and Robotics is committed to excellence in teaching, research, and innovation in emerging technologies. The department focuses on developing intelligent systems and advanced robotic solutions to address real-world industrial and societal challenges.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
                With experienced faculty, well-equipped laboratories, and a strong emphasis on practical learning, the department prepares students for careers in AI, automation, robotics engineering, research, and higher studies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Recent Achievements</h2>
            <p className="text-xl text-gray-600">
              Celebrating our latest victories and milestones
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white border-2 border-gray-200 hover:border-black transition-all duration-300 overflow-hidden group smooth-hover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-48 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm font-bold">
                    {achievement.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gray-600 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      

      <Footer />
    </div>
  );
};

export default Home;
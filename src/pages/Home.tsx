import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Zap, Users, Trophy, Wrench, Calendar, Award, Cpu, Target, BookOpen, Lightbulb } from 'lucide-react';
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
    { icon: Users, value: '50+', label: 'Active Members' },
    { icon: Trophy, value: '15+', label: 'Competitions Won' },
    { icon: Wrench, value: '100+', label: 'Projects Built' },
    { icon: Zap, value: '5+', label: 'Years Active' },
  ];

  const features = [
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Developing robots with millimeter accuracy for industrial and research applications.'
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Implementing machine learning algorithms for autonomous decision-making systems.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Lab',
      description: 'State-of-the-art facilities with 3D printers, CNC machines, and testing environments.'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Sharing',
      description: 'Regular workshops, seminars, and mentorship programs for skill development.'
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

  const upcomingEvents = [
    {
      date: 'Mar 15',
      title: 'Autoo-Cad Training',
      description: 'Beginner-friendly introduction to microcontroller programming'
    },
    {
      date: 'Mar 22',
      title: 'Electronics Training',
      description: 'Industry expert on autonomous vehicle technology'
    },
    {
      date: 'Apr 5',
      title: 'Data Analytics',
      description: 'Final preparations for the National Robotics Championship'
    }
  ];

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ y, opacity }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="text-center z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 scanner">
              ROBOTICS
            </h1>
            <h2 className="text-4xl md:text-6xl font-light">CLUB</h2>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Innovating the Future – One Bot at a Time
          </motion.p>

          <motion.button
            className="px-8 py-4 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-300 font-semibold group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            JOIN US TODAY
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
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
              Exploring the frontiers of robotics through hands-on projects, 
              cutting-edge research, and collaborative innovation.
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
              We are a passionate community of engineers, programmers, and innovators 
              dedicated to pushing the boundaries of robotics and automation. From 
              autonomous vehicles to humanoid robots, we explore every facet of 
              robotics technology.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Join us in competitions, workshops, and collaborative projects that 
              prepare you for the future of technology. Whether you're a beginner 
              or an expert, there's a place for you in our mechanical family.
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

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">
              Join us for workshops, competitions, and learning opportunities
            </p>
          </motion.div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                className="flex items-center p-6 bg-white border-2 border-gray-200 hover:border-black transition-all duration-300 group smooth-hover"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="bg-black text-white w-16 h-16 rounded-lg flex flex-col items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <Calendar className="w-6 h-6 mb-1" />
                    <span className="text-xs font-bold">{event.date}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gray-600 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <button className="px-6 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-semibold">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
              <p className="text-xl mb-8 leading-relaxed">
                Whether you're a complete beginner or an experienced engineer, 
                our club welcomes all skill levels. Learn, build, compete, and 
                shape the future of robotics with us.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Award className="w-6 h-6 mr-4 text-gray-300" />
                  <span>Access to cutting-edge equipment and facilities</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 mr-4 text-gray-300" />
                  <span>Mentorship from experienced members and faculty</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-6 h-6 mr-4 text-gray-300" />
                  <span>Opportunities to compete in national competitions</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-black hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 font-semibold">
                  Join Now
                </button>
                <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/1181367/pexels-photo-1181367.jpeg"
                alt="Students working on robotics project"
                className="w-full h-96 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-all duration-500"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Build the Future?
          </motion.h2>
          <motion.p
            className="text-xl mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Connect with like-minded innovators and bring your robotic dreams to life.
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-white text-black hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 font-semibold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GET INVOLVED
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
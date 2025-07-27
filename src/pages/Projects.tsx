import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  year: string;
  category: string;
  image: string;
  github?: string;
  demo?: string;
}

const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Autonomous Rover',
      description: 'A self-navigating rover capable of obstacle detection and path planning using computer vision.',
      year: '2024',
      category: 'Autonomous Systems',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Robotic Arm Controller',
      description: 'Precision robotic arm with 6 degrees of freedom for industrial automation tasks.',
      year: '2024',
      category: 'Manipulation',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      github: '#'
    },
    {
      id: 3,
      title: 'Drone Swarm System',
      description: 'Coordinated multi-drone system for search and rescue operations with real-time communication.',
      year: '2023',
      category: 'Aerial Robotics',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg',
      demo: '#'
    },
    {
      id: 4,
      title: 'Humanoid Assistant',
      description: 'Bipedal humanoid robot designed for human-robot interaction and service tasks.',
      year: '2023',
      category: 'Humanoid',
      image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg',
      github: '#'
    },
    {
      id: 5,
      title: 'Smart Prosthetic Hand',
      description: 'AI-powered prosthetic hand with neural control interface and haptic feedback.',
      year: '2023',
      category: 'Medical Robotics',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg',
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Warehouse Automation Bot',
      description: 'Automated sorting and packaging robot for warehouse logistics optimization.',
      year: '2022',
      category: 'Industrial',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      github: '#'
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const years = ['All', ...Array.from(new Set(projects.map(p => p.year))).sort().reverse()];

  useEffect(() => {
    if (selectedFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === selectedFilter || p.year === selectedFilter));
    }
  }, [selectedFilter]);

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4 scanner">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our innovative robotics projects that push the boundaries of technology
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5" />
            <span className="font-semibold">Filter by:</span>
          </div>
          {[...categories, ...years.slice(1)].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 hover:border-black'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white border-2 border-gray-200 hover:border-black transition-all duration-300 group overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                layout
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.github && (
                        <a
                          href={project.github}
                          className="p-2 bg-white text-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="p-2 bg-white text-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="text-sm font-semibold text-black">
                    {project.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-600">No projects found for the selected filter.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
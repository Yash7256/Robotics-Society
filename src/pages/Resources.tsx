import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText, Video, Book, Code } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  category: 'Tutorial' | 'PDF' | 'Reference' | 'Video' | 'Code';
  type: 'download' | 'external';
  url: string;
  size?: string;
  date: string;
}

const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const resources: Resource[] = [
    {
      id: 1,
      title: 'Arduino Programming Guide',
      description: 'Comprehensive guide to Arduino programming for robotics applications',
      category: 'Tutorial',
      type: 'download',
      url: '#',
      size: '2.5 MB',
      date: '2024-02-10'
    },
    {
      id: 2,
      title: 'ROS (Robot Operating System) Documentation',
      description: 'Complete reference documentation for ROS development',
      category: 'Reference',
      type: 'external',
      url: '#',
      date: '2024-02-08'
    },
    {
      id: 3,
      title: 'Computer Vision for Robotics',
      description: 'Advanced techniques for implementing computer vision in robotic systems',
      category: 'PDF',
      type: 'download',
      url: '#',
      size: '5.2 MB',
      date: '2024-02-05'
    },
    {
      id: 4,
      title: 'Kinematics and Dynamics Tutorial',
      description: 'Video series covering robot kinematics and dynamics fundamentals',
      category: 'Video',
      type: 'external',
      url: '#',
      date: '2024-02-01'
    },
    {
      id: 5,
      title: 'Python for Robotics',
      description: 'Code examples and libraries for Python-based robotics development',
      category: 'Code',
      type: 'external',
      url: '#',
      date: '2024-01-28'
    },
    {
      id: 6,
      title: 'Sensor Integration Manual',
      description: 'Step-by-step guide for integrating various sensors in robotic systems',
      category: 'PDF',
      type: 'download',
      url: '#',
      size: '3.8 MB',
      date: '2024-01-25'
    },
    {
      id: 7,
      title: 'Machine Learning in Robotics',
      description: 'Introduction to applying ML algorithms in robotics applications',
      category: 'Tutorial',
      type: 'download',
      url: '#',
      size: '4.1 MB',
      date: '2024-01-20'
    },
    {
      id: 8,
      title: 'PCB Design for Robotics',
      description: 'Best practices for designing custom PCBs for robotic applications',
      category: 'Reference',
      type: 'external',
      url: '#',
      date: '2024-01-15'
    },
    {
      id: 9,
      title: 'SLAM Algorithm Implementation',
      description: 'Code repository with SLAM algorithm implementations and examples',
      category: 'Code',
      type: 'external',
      url: '#',
      date: '2024-01-10'
    },
    {
      id: 10,
      title: 'Robotics Competition Handbook',
      description: 'Official handbook for robotics competitions with rules and guidelines',
      category: 'PDF',
      type: 'download',
      url: '#',
      size: '1.9 MB',
      date: '2024-01-05'
    }
  ];

  const categories = ['All', 'Tutorial', 'PDF', 'Reference', 'Video', 'Code'];

  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const getIcon = (category: string) => {
    switch (category) {
      case 'Tutorial': return Book;
      case 'PDF': return FileText;
      case 'Reference': return Book;
      case 'Video': return Video;
      case 'Code': return Code;
      default: return FileText;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Tutorial': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'PDF': return 'bg-red-100 text-red-800 border-red-200';
      case 'Reference': return 'bg-green-100 text-green-800 border-green-200';
      case 'Video': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Code': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4 scanner">Resources</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access our collection of tutorials, documentation, and learning materials
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-semibold ${
                selectedCategory === category
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 hover:border-black'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredResources.map((resource, index) => {
            const Icon = getIcon(resource.category);
            return (
              <motion.div
                key={resource.id}
                className="bg-white border-2 border-gray-200 hover:border-black transition-all duration-300 p-6 group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                layout
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-3 bg-gray-100 group-hover:bg-black group-hover:text-white transition-all duration-300 rounded-lg mr-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(resource.category)}`}>
                        {resource.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    {formatDate(resource.date)}
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-3 group-hover:text-gray-600 transition-colors duration-300">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    {resource.size && (
                      <span className="bg-gray-100 px-2 py-1 rounded">
                        {resource.size}
                      </span>
                    )}
                  </div>
                  
                  <a
                    href={resource.url}
                    target={resource.type === 'external' ? '_blank' : '_self'}
                    rel={resource.type === 'external' ? 'noopener noreferrer' : ''}
                    className="flex items-center px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors duration-300 rounded font-semibold text-sm"
                  >
                    {resource.type === 'download' ? (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </>
                    )}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {filteredResources.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-600">No resources found for the selected category.</p>
          </motion.div>
        )}

        {/* Contribution Section */}
        <motion.div
          className="mt-20 bg-black text-white p-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Contribute Resources</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Have valuable resources to share with the community? Help us build our knowledge base 
            by contributing tutorials, documentation, or code examples.
          </p>
          <button className="px-8 py-4 bg-white text-black hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 font-semibold rounded">
            Submit Resource
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;
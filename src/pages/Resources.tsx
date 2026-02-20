import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText, Book } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  category: 'Scheme' | 'Syllabus' | 'Documentation';
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
      category: 'Documentation',
      type: 'external',
      url: 'https://docs.arduino.cc/programming/',
      size: '2.5 MB',
      date: '2024-02-10'
    },
    {
      id: 2,
      title: 'ROS (Robot Operating System) Documentation',
      description: 'Complete reference documentation for ROS development',
      category: 'Documentation',
      type: 'external',
      url: 'https://docs.ros.org/',
      date: '2024-02-08'
    },
    {
      id: 3,
      title: '1st Year Scheme',
      description: 'Academic scheme for 1st semester students',
      category: 'Scheme',
      type: 'download',
      url: '/resources/schemes/1st semester scheme.pdf',
      size: '150 KB',
      date: '2024-01-15'
    },
    {
      id: 4,
      title: '3rd Semester Scheme',
      description: 'Academic scheme for 3rd semester students',
      category: 'Scheme',
      type: 'download',
      url: '/resources/schemes/scheme 3rd sem.pdf',
      size: '150 KB',
      date: '2024-01-15'
    },
    {
      id: 5,
      title: '4th Semester Scheme',
      description: 'Academic scheme for 4th semester students',
      category: 'Scheme',
      type: 'download',
      url: '/resources/schemes/scheme 4th sem.pdf',
      size: '150 KB',
      date: '2024-01-15'
    },
    {
      id: 6,
      title: '5th Semester Scheme',
      description: 'Academic scheme for 5th semester students',
      category: 'Scheme',
      type: 'download',
      url: '/resources/schemes/scheme 5th sem.pdf',
      size: '150 KB',
      date: '2024-01-15'
    },
    {
      id: 7,
      title: '6th Semester Scheme',
      description: 'Academic scheme for 6th semester students',
      category: 'Scheme',
      type: 'download',
      url: '/resources/schemes/scheme 6th sem.pdf',
      size: '150 KB',
      date: '2024-01-15'
    },
    {
      id: 8,
      title: '7th Semester Scheme',
      description: 'Academic scheme for 7th semester students',
      category: 'Scheme',
      type: 'download',
      url: '/resources/schemes/scheme 7th sem.pdf',
      size: '150 KB',
      date: '2024-01-15'
    },
    {
      id: 9,
      title: '8th Semester Scheme',
      description: 'Academic scheme for 8th semester students',
      category: 'Scheme',
      type: 'download',
      url: '/resources/schemes/scheme 8th sem.pdf',
      size: '150 KB',
      date: '2024-01-15'
    },
    {
      id: 10,
      title: '3rd Semester Syllabus',
      description: 'Complete syllabus for 3rd semester',
      category: 'Syllabus',
      type: 'download',
      url: '/resources/syllabus/3rd Sem.pdf',
      size: '200 KB',
      date: '2024-01-15'
    },
    {
      id: 11,
      title: '4th Semester Syllabus',
      description: 'Complete syllabus for 4th semester',
      category: 'Syllabus',
      type: 'download',
      url: '/resources/syllabus/4th sem.pdf',
      size: '200 KB',
      date: '2024-01-15'
    },
    {
      id: 12,
      title: '5th Semester Syllabus',
      description: 'Complete syllabus for 5th semester',
      category: 'Syllabus',
      type: 'download',
      url: '/resources/syllabus/5th sem.pdf',
      size: '200 KB',
      date: '2024-01-15'
    },
    {
      id: 13,
      title: '6th Semester Syllabus',
      description: 'Complete syllabus for 6th semester',
      category: 'Syllabus',
      type: 'download',
      url: '/resources/syllabus/6th sem.pdf',
      size: '200 KB',
      date: '2024-01-15'
    },
    {
      id: 14,
      title: '7th Semester Syllabus',
      description: 'Complete syllabus for 7th semester',
      category: 'Syllabus',
      type: 'download',
      url: '/resources/syllabus/7th sem.pdf',
      size: '200 KB',
      date: '2024-01-15'
    },
    {
      id: 15,
      title: '8th Semester Syllabus',
      description: 'Complete syllabus for 8th semester',
      category: 'Syllabus',
      type: 'download',
      url: '/resources/syllabus/8th sem.pdf',
      size: '200 KB',
      date: '2024-01-15'
    }
  ];

  const categories = ['All', 'Scheme', 'Syllabus', 'Documentation'];

  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const getIcon = (category: string) => {
    switch (category) {
      case 'Scheme': return FileText;
      case 'Syllabus': return Book;
      case 'Documentation': return FileText;
      default: return FileText;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Scheme': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Syllabus': return 'bg-green-100 text-green-800 border-green-200';
      case 'Documentation': return 'bg-blue-100 text-blue-800 border-blue-200';
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
                    download={resource.type === 'download' ? resource.title : undefined}
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
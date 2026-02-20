import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Github, Award, BookOpen, X, FileText, Calendar } from 'lucide-react';

interface Student {
  id: number;
  name: string;
  batch: string;
  image: string;
  linkedin?: string;
  github?: string;
  email?: string;
  resume?: string;
  certifications?: string[];
}

const Students: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [selectedBatch, setSelectedBatch] = useState('All');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const students: Student[] = [
    {
      id: 1,
      name: 'Akash Choudhary',
      batch: '2022-2026',
      image: '',
      linkedin: 'https://linkedin.com/in/akashchoudhary',
      github: 'https://github.com/akashchoudhary',
      email: 'akash.choudhary.ra23@ggits.net',
      resume: '/resumes/akash-choudhary.pdf',
      certifications: [
        'Python for Data Science - Coursera',
        'Machine Learning Specialization - Udemy',
        'AWS Cloud Practitioner',
        'ROS Basics - The Construct'
      ]
    },
    {
      id: 2,
      name: 'Arpit Koshta',
      batch: '2022-2026',
      image: '',
      linkedin: 'https://linkedin.com/in/arpitkoshta',
      github: 'https://github.com/arpitkoshta',
      email: 'arpit.koshta.ra23@ggits.net',
      resume: '/resumes/arpit-koshta.pdf',
      certifications: [
        'Arduino Programming - Udemy',
        'IoT Fundamentals - Cisco',
        'Embedded Systems - NPTEL',
        'C++ Programming - HackerRank'
      ]
    }
  ];

  const batches = ['All', '2022-2026'];

  const filteredStudents = selectedBatch === 'All' 
    ? students 
    : students.filter(student => student.batch === selectedBatch);

  const handleImageLoad = (studentId: number) => {
    setLoadedImages(prev => new Set([...prev, studentId]));
  };

  const handleImageError = (studentId: number) => {
    setImageErrors(prev => new Set([...prev, studentId]));
  };

  const getImageSrc = (student: Student) => {
    const url = student.image;
    if (url.includes('i.ibb.co')) {
      return url;
    }
    return url;
  };

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
          <h1 className="text-5xl font-bold mb-4 scanner">Our Students</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the talented students driving innovation in AI and Robotics
          </p>
        </motion.div>

        {/* Batch Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {batches.map((batch) => (
            <button
              key={batch}
              onClick={() => setSelectedBatch(batch)}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-semibold ${
                selectedBatch === batch
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 hover:border-black'
              }`}
            >
              {batch === 'All' ? 'All Students' : `Batch ${batch}`}
            </button>
          ))}
        </motion.div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredStudents.map((student, index) => (
            <motion.div
              key={student.id}
              className="cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => setSelectedStudent(student)}
            >
              <div className="bg-white border-2 border-gray-200 hover:border-black transition-all duration-300 p-6 group">
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden relative">
                      {!loadedImages.has(student.id) && !imageErrors.has(student.id) && (
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-full"></div>
                      )}
                      
                      <img
                        src={getImageSrc(student)}
                        alt={student.name}
                        className={`w-28 h-28 rounded-full object-cover transition-all duration-700 ease-in-out transform ${
                          loadedImages.has(student.id) 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-95'
                        } ${imageErrors.has(student.id) ? 'hidden' : ''}`}
                        loading="lazy"
                        decoding="async"
                        onLoad={() => handleImageLoad(student.id)}
                        onError={() => handleImageError(student.id)}
                      />
                      
                      {imageErrors.has(student.id) && (
                        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white font-bold text-xl">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-center mb-1">{student.name}</h3>
                  <p className="text-center text-gray-600 text-sm font-medium mb-1">{student.email}</p>
                  <p className="text-center text-gray-500 text-xs mb-3">{student.batch}</p>
                  
                  <div className="flex justify-center space-x-2 mt-auto">
                    {student.linkedin && student.linkedin !== '#' && (
                      <div className="p-2 border border-gray-300 rounded-full">
                        <Linkedin className="w-4 h-4 text-gray-400" />
                      </div>
                    )}
                    {student.github && student.github !== '#' && (
                      <div className="p-2 border border-gray-300 rounded-full">
                        <Github className="w-4 h-4 text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-600">No students found for the selected batch.</p>
          </motion.div>
        )}

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedStudent && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStudent(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            
            <motion.div
              className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStudent(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="bg-black text-white p-8 rounded-t-2xl">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center text-3xl font-bold">
                    {selectedStudent.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-center sm:text-left">
                    <h2 className="text-3xl font-bold mb-1">{selectedStudent.name}</h2>
                    <p className="text-gray-300 text-lg mb-2">{selectedStudent.email}</p>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>Batch {selectedStudent.batch}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Social Links */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {selectedStudent.linkedin && selectedStudent.linkedin !== '#' && (
                    <a
                      href={selectedStudent.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {selectedStudent.github && selectedStudent.github !== '#' && (
                    <a
                      href={selectedStudent.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {selectedStudent.resume && (
                    <a
                      href={selectedStudent.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                      aria-label="Resume"
                    >
                      <FileText className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Certifications */}
                {selectedStudent.certifications && selectedStudent.certifications.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Certifications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedStudent.certifications.map((cert, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <div className="w-2 h-2 rounded-full bg-black mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }
        
        .animate-pulse {
          animation: shimmer 2s ease-in-out infinite;
          background: linear-gradient(90deg, #f0f0f0 0px, #e0e0e0 40px, #f0f0f0 80px);
          background-size: 200px;
        }
      `}</style>
    </div>
  );
};

export default Students;

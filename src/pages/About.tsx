import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Github } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  email?: string;
  bio: string;
}

const About: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Prof. (Dr) Sourabh Sahu',
      role: 'Head Of Department',
      image: 'https://i.ibb.co/hF9wwV4N/AIR.jpg',
      linkedin: '#',
      github: '#',
      email: '#',
      bio: ''
    },
    {
      id: 2,
      name: 'Prof. Vivek Anand',
      role: '2023 - 2027 Batch Incharge',
      image: '',
      linkedin: '#',
      github: '#',
      email: '#',
      bio: ''
    },
    {
      id: 3,
      name: 'Prof. Nitin Mishra',
      role: 'Embedded System Professor',
      image: '',
      linkedin: '#',
      github: '#',
      email: '#',
      bio: ''
    },
    
  ];

  const handleImageLoad = (memberId: number) => {
    setLoadedImages(prev => new Set([...prev, memberId]));
  };

  const handleImageError = (memberId: number) => {
    setImageErrors(prev => new Set([...prev, memberId]));
  };

  const getImageSrc = (member: TeamMember) => {
    // Add image optimization parameters for supported services
    const url = member.image;
    if (url.includes('i.ibb.co')) {
      return url; // ImageBB doesn't support URL parameters
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
          <h1 className="text-5xl font-bold mb-4 scanner">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn about our team and the passionate individuals driving innovation in robotics
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="group perspective-1000"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white border-2 border-gray-200 group-hover:border-black transition-colors duration-300">
                  <div className="p-6 h-full flex flex-col">
                    <div className="relative mb-4 mx-auto">
                      {/* Image container with loading state */}
                      <div className="w-36 h-36 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden relative">
                        {!loadedImages.has(member.id) && !imageErrors.has(member.id) && (
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-full"></div>
                        )}
                        
                        <img
                          src={getImageSrc(member)}
                          alt={member.name}
                          className={`w-36 h-36 rounded-full object-cover transition-all duration-700 ease-in-out transform ${
                            loadedImages.has(member.id) 
                              ? 'opacity-100 scale-100' 
                              : 'opacity-0 scale-95'
                          } ${imageErrors.has(member.id) ? 'hidden' : ''}`}
                          loading="lazy"
                          decoding="async"
                          onLoad={() => handleImageLoad(member.id)}
                          onError={() => handleImageError(member.id)}
                          style={{
                            imageRendering: 'crisp-edges',
                            WebkitBackfaceVisibility: 'hidden',
                            MozBackfaceVisibility: 'hidden',
                            backfaceVisibility: 'hidden',
                          }}
                        />
                        
                        {/* Fallback for failed images */}
                        {imageErrors.has(member.id) && (
                          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white font-bold text-2xl">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        )}
                      </div>
                      
                      {/* Decorative ring on hover */}
                      <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 group-hover:scale-105"></div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-center mb-2 line-clamp-2">{member.name}</h3>
                    <p className="text-center text-gray-600 font-semibold mb-4">{member.role}</p>
                    
                    <div className="flex justify-center space-x-3 mt-auto">
                      {member.linkedin && member.linkedin !== '#' && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:scale-110"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.github && member.github !== '#' && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:scale-110"
                          aria-label={`${member.name}'s GitHub`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {member.email && member.email !== '#' && (
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:scale-110"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-black text-white border-2 border-black">
                  <div className="p-6 h-full flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-4 text-center">{member.name}</h3>
                    <p className="text-sm leading-relaxed text-center">{member.bio}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        /* Enhanced image rendering */
        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: -moz-crisp-edges;
          image-rendering: -o-crisp-edges;
          image-rendering: crisp-edges;
          image-rendering: high-quality;
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform: translateZ(0);
          -moz-transform: translateZ(0);
          transform: translateZ(0);
        }
        
        /* Smooth transitions for better performance */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Loading animation */
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

        /* Text truncation */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* High DPI displays optimization */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          img {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: optimizeQuality;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
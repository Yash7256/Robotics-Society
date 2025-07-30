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

const Team: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Prof. (Dr) Sourabh Sahu',
      role: 'Club In-Charge',
      image: 'https://i.ibb.co/hF9wwV4N/AIR.jpg',
      linkedin: '#',
      github: '#',
      email: '#',
      bio: 'Computer Science major specializing in AI and robotics. Leading our autonomous systems projects.'
    },
    {
      id: 2,
      name: 'Aman Raj',
      role: 'Club Lead',
      image: 'https://i.ibb.co/x8H4fsBV/Picsart-25-07-29-18-22-33-310.jpg',
      linkedin: '#',
      github: '#',
      email: '#',
      bio: 'Club Lead responsible for coordinating team activities and strategic planning.'
    },
    {
      id: 3,
      name: 'Aadrika Rai',
      role: 'Public Relations',
      image: 'https://i.ibb.co/W1hxJ4s/IMG-20250730-123509.jpg',
      linkedin: '#',
      github: '#',
      email: '#',
      bio: 'Managing public relations and community outreach for the robotics club.'
    },
    {
      id: 4,
      name: 'Sakshi Shripal',
      role: 'Public Relations',
      image: 'https://i.ibb.co/7tnPcgjy/IMG-20250730-123541.jpg',
      linkedin: '#',
      github: '#',
      email: '#',
      bio: 'Handling external communications and building partnerships for the club.'
    },
    {
      id: 5,
      name: 'Harshita Upadhyay',
      role: 'Designer',
      image: 'https://i.ibb.co/LzqmfRJy/IMG-20250729-184928.jpg',
      linkedin: '#',
      github: '#',
      email: '#',
      bio: 'Creating visual designs and user interfaces for our robotics projects.'
    },
    {
      id: 6,
      name: 'Jaspreet Singh Labana',
      role: 'Media',
      image: 'https://via.placeholder.com/400x400/6B7280/FFFFFF?text=JS',
      linkedin: '#',
      github: '#',
      email: '#',
      bio: 'Managing media content and documentation for club activities and projects.'
    },
    {
      id: 7,
      name: 'Hassan Khan',
      role: 'Coordinator',
      image: 'https://i.ibb.co/0yWPwsCC/IMG-20250729-185955.jpg',
      linkedin: '#',
      github: '#',
      email: '#',
      bio: 'Coordinating project timelines and ensuring smooth team collaboration.'
    },
    {
      id: 8,
      name: 'Palak Patel',
      role: 'Coordinator',
      image: 'https://via.placeholder.com/400x400/6B7280/FFFFFF?text=PP',
      linkedin: '#',
      github: '#',
      email: '#',
      bio: 'Supporting project coordination and team management activities.'
    },
    {
      id: 9,
      name: 'Niyati Chouksey',
      role: 'Coordinator',
      image: 'https://via.placeholder.com/400x400/6B7280/FFFFFF?text=NC',
      linkedin: '#',
      github: '#',
      email: '#',
      bio: 'Assisting in project coordination and maintaining team organization.'
    }
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
          <h1 className="text-5xl font-bold mb-4 scanner">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the passionate individuals driving innovation in robotics
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
                            imageRendering: 'high-quality',
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

        {/* Join Us Section */}
        <motion.div
          className="mt-20 text-center bg-black text-white py-16 px-8 rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our robotics family. 
            Whether you're a beginner or expert, there's a place for you.
          </p>
          <button className="px-8 py-4 bg-white text-black hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 font-semibold hover:scale-105">
            Apply Now
          </button>
        </motion.div>
      </div>

      <style jsx>{`
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

export default Team;
import React from 'react';
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
    }
    
  ];

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
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-black transition-colors duration-300"></div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                    <p className="text-center text-gray-600 font-semibold mb-4">{member.role}</p>
                    <div className="flex justify-center space-x-3 mt-auto">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300"
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
          className="mt-20 text-center bg-black text-white py-16 px-8"
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
          <button className="px-8 py-4 bg-white text-black hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 font-semibold">
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
      `}</style>
    </div>
  );
};

export default Team;
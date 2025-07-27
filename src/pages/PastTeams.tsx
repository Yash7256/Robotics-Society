import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamPhoto {
  id: number;
  year: string;
  image: string;
  members: string[];
  description: string;
}

const PastTeams: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<TeamPhoto | null>(null);

  const teamPhotos: TeamPhoto[] = [
    {
      id: 1,
      year: '2023',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
      members: [
        'Alex Chen - President',
        'Sarah Johnson - Vice President',
        'Marcus Kim - Technical Lead',
        'Emily Rodriguez - Software Lead',
        'David Park - Hardware Lead',
        'Lisa Wang - Competition Coordinator',
        'James Miller - Research Lead',
        'Nina Patel - Workshop Coordinator',
        'Ryan Thompson - Media Manager',
        'Sophie Lee - Secretary'
      ],
      description: '2023 was a breakthrough year for our club. We won the Regional RoboCup championship and launched our first autonomous rover project. The team grew to 50+ active members.'
    },
    {
      id: 2,
      year: '2022',
      image: 'https://images.pexels.com/photos/1181437/pexels-photo-1181437.jpeg',
      members: [
        'Michael Chang - President',
        'Jessica Liu - Vice President',
        'Thomas Anderson - Technical Lead',
        'Rachel Green - Software Lead',
        'Kevin Martinez - Hardware Lead',
        'Amy Wilson - Event Coordinator',
        'Daniel Brown - Research Assistant',
        'Maya Patel - Outreach Lead'
      ],
      description: 'In 2022, we focused on building our foundation and establishing key partnerships with local tech companies. Our humanoid robot project began this year.'
    },
    {
      id: 3,
      year: '2021',
      image: 'https://images.pexels.com/photos/1181367/pexels-photo-1181367.jpeg',
      members: [
        'Jennifer Davis - President',
        'Andrew Kim - Vice President',
        'Laura Smith - Technical Lead',
        'Chris Johnson - Software Lead',
        'Maria Garcia - Hardware Lead',
        'Jason Wang - Competition Manager',
        'Emma Taylor - Research Lead'
      ],
      description: 'Despite the challenges of remote learning, 2021 was a year of innovation. We developed our first virtual robotics simulation platform and continued our research remotely.'
    },
    {
      id: 4,
      year: '2020',
      image: 'https://images.pexels.com/photos/1181498/pexels-photo-1181498.jpeg',
      members: [
        'Robert Lee - President',
        'Michelle Zhang - Vice President',
        'Steven Park - Technical Lead',
        'Ashley Brown - Software Lead',
        'Carlos Rodriguez - Hardware Lead',
        'Samantha Wilson - Event Coordinator'
      ],
      description: 'The founding year of our modern robotics program. We established our core curriculum and built our first workshop space in the engineering building.'
    },
    {
      id: 5,
      year: '2019',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      members: [
        'Victoria Chen - President',
        'Tyler Johnson - Vice President',
        'Amanda Davis - Technical Lead',
        'Brandon Kim - Software Lead',
        'Nicole Garcia - Hardware Lead'
      ],
      description: 'Our early days were marked by enthusiasm and determination. With limited resources but unlimited passion, we laid the groundwork for what would become a premier robotics program.'
    },
    {
      id: 6,
      year: '2018',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
      members: [
        'Jonathan Miller - Founder/President',
        'Grace Liu - Co-founder',
        'Nathan Wilson - Technical Advisor',
        'Olivia Martinez - Outreach Lead'
      ],
      description: 'The very beginning of our journey. A small group of passionate students came together with a shared vision of advancing robotics education on campus.'
    }
  ];

  const openModal = (team: TeamPhoto) => {
    setSelectedTeam(team);
  };

  const closeModal = () => {
    setSelectedTeam(null);
  };

  const navigateTeam = (direction: 'prev' | 'next') => {
    if (!selectedTeam) return;
    
    const currentIndex = teamPhotos.findIndex(team => team.id === selectedTeam.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % teamPhotos.length;
    } else {
      newIndex = (currentIndex - 1 + teamPhotos.length) % teamPhotos.length;
    }
    
    setSelectedTeam(teamPhotos[newIndex]);
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
          <h1 className="text-5xl font-bold mb-4 scanner">Past Teams</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating the legacy of our robotics community through the years
          </p>
        </motion.div>

        {/* Team Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamPhotos.map((team, index) => (
            <motion.div
              key={team.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => openModal(team)}
            >
              <div className="relative overflow-hidden bg-white border-2 border-gray-200 group-hover:border-black transition-all duration-300">
                <img
                  src={team.image}
                  alt={`Team ${team.year}`}
                  className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {team.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Team {team.year}</h3>
                  <p className="text-gray-600 mb-4">
                    {team.members.length} Members
                  </p>
                  <button className="text-black font-semibold hover:text-gray-600 transition-colors duration-300">
                    View Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legacy Section */}
        <motion.div
          className="mt-20 bg-black text-white p-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Our Legacy</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            From humble beginnings in 2018 to becoming one of the most respected robotics clubs 
            on campus, our journey has been marked by innovation, collaboration, and unwavering 
            dedication to advancing the field of robotics. Each year has brought new challenges, 
            victories, and memories that continue to inspire our current members.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-gray-300">Alumni Network</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-gray-300">Awards Won</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTeam && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10">
                <h2 className="text-2xl font-bold">Team {selectedTeam.year}</h2>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => navigateTeam('prev')}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => navigateTeam('next')}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <img
                  src={selectedTeam.image}
                  alt={`Team ${selectedTeam.year}`}
                  className="w-full h-96 object-cover mb-6 rounded"
                />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Team Members</h3>
                    <ul className="space-y-2">
                      {selectedTeam.members.map((member, index) => (
                        <li key={index} className="text-gray-700">
                          {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">Year Highlights</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedTeam.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PastTeams;
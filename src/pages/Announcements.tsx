import React from 'react';
import { motion } from 'framer-motion';
import { Pin, Calendar, ExternalLink } from 'lucide-react';

interface Announcement {
  id: number;
  title: string;
  date: string;
  description: string;
  link?: string;
  pinned: boolean;
  category: 'Competition' | 'Workshop' | 'Meeting' | 'Event' | 'General';
}

const Announcements: React.FC = () => {
  const announcements: Announcement[] = [
    {
      id: 1,
      title: 'RoboCup 2024 Registration Open',
      date: '2024-02-15',
      description: 'Registration is now open for RoboCup 2024! Join our team and compete against the best robotics clubs worldwide. Limited spots available.',
      link: '#',
      pinned: true,
      category: 'Competition'
    },
    {
      id: 2,
      title: 'Weekly Meeting - AI in Robotics',
      date: '2024-02-10',
      description: 'This week\'s meeting will focus on implementing AI algorithms in robotic systems. Guest speaker from Tesla Autopilot team.',
      pinned: true,
      category: 'Meeting'
    },
    {
      id: 3,
      title: 'Arduino Workshop for Beginners',
      date: '2024-02-08',
      description: 'Learn the basics of Arduino programming and circuit design. Perfect for newcomers to robotics. All materials provided.',
      link: '#',
      pinned: false,
      category: 'Workshop'
    },
    {
      id: 4,
      title: 'Robotics Showcase 2024',
      date: '2024-02-05',
      description: 'Annual showcase of student projects. Presents your work to industry professionals and fellow students.',
      pinned: false,
      category: 'Event'
    },
    {
      id: 5,
      title: 'New Lab Equipment Arrival',
      date: '2024-02-01',
      description: 'We\'ve received new 3D printers, servo motors, and microcontrollers. Check the equipment checkout system for availability.',
      pinned: false,
      category: 'General'
    },
    {
      id: 6,
      title: 'FIRST Robotics Competition Team Formation',
      date: '2024-01-28',
      description: 'Looking for dedicated members to join our FRC team. Experience with CAD, programming, or mechanical design preferred.',
      link: '#',
      pinned: false,
      category: 'Competition'
    },
    {
      id: 7,
      title: 'Soldering Safety Workshop',
      date: '2024-01-25',
      description: 'Mandatory safety workshop for all members using soldering equipment. Learn proper techniques and safety protocols.',
      pinned: false,
      category: 'Workshop'
    },
    {
      id: 8,
      title: 'Guest Lecture: Industry Robotics Trends',
      date: '2024-01-20',
      description: 'Industry professional will discuss current trends in robotics automation and career opportunities.',
      pinned: false,
      category: 'Event'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Competition': return 'bg-red-100 text-red-800 border-red-200';
      case 'Workshop': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Meeting': return 'bg-green-100 text-green-800 border-green-200';
      case 'Event': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const pinnedAnnouncements = announcements.filter(a => a.pinned);
  const regularAnnouncements = announcements.filter(a => !a.pinned);

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4 scanner">Announcements</h1>
          <p className="text-xl text-gray-600">
            Stay updated with the latest news and events from our robotics community
          </p>
        </motion.div>

        {/* Pinned Announcements */}
        {pinnedAnnouncements.length > 0 && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Pin className="w-6 h-6 mr-2" />
              Pinned Announcements
            </h2>
            <div className="space-y-6">
              {pinnedAnnouncements.map((announcement, index) => (
                <motion.div
                  key={announcement.id}
                  className="bg-yellow-50 border-l-4 border-yellow-400 p-6 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <h3 className="text-xl font-bold mb-2 sm:mb-0">{announcement.title}</h3>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getCategoryColor(announcement.category)}`}>
                        {announcement.category}
                      </span>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{formatDate(announcement.date)}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">{announcement.description}</p>
                  {announcement.link && (
                    <a
                      href={announcement.link}
                      className="inline-flex items-center text-black hover:text-gray-600 font-semibold transition-colors duration-300"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Announcements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">Recent Announcements</h2>
          <div className="space-y-6">
            {regularAnnouncements.map((announcement, index) => (
              <motion.div
                key={announcement.id}
                className="bg-white border-2 border-gray-200 hover:border-black p-6 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <h3 className="text-xl font-bold mb-2 sm:mb-0 group-hover:text-gray-600 transition-colors duration-300">
                    {announcement.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getCategoryColor(announcement.category)}`}>
                      {announcement.category}
                    </span>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{formatDate(announcement.date)}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{announcement.description}</p>
                {announcement.link && (
                  <a
                    href={announcement.link}
                    className="inline-flex items-center text-black hover:text-gray-600 font-semibold transition-colors duration-300"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Subscribe Section */}
        <motion.div
          className="mt-16 bg-black text-white p-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
          <p className="text-lg mb-6">
            Subscribe to our newsletter to receive the latest announcements directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-black rounded border-2 border-gray-300 focus:border-white focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-black hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 font-semibold rounded">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Announcements;
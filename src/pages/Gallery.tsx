import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  year: string;
  category: string;
  description: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const images: GalleryImage[] = [
    {
      id: 1,
      src: 'https://i.ibb.co/ynWkMgXL/Whats-App-Image-2025-07-04-at-11-19-29-PM-1.jpg',
      alt: 'Gyanotsav',
      year: '2024',
      category: 'Events',
      description: 'Techutsav'
    },
    {
      id: 2,
      src: 'https://i.ibb.co/v41Zwr1y/Whats-App-Image-2025-07-28-at-11-00-46-AM.jpg',
      alt: 'Race',
      year: '2024',
      category: 'Events',
      description: 'Drone Race'
    },
    {
      id: 3,
      src: 'https://i.ibb.co/Jw8txfj9/IMG-20240922-WA0038.jpg', 
      alt: '2024',
      year: '2024',
      category: 'Events',
      description: 'MOU based Robotics Workshop with TECHFEST IITB'
    },

     {
      id: 4,
      src: 'https://i.ibb.co/chLGQLxm/Whats-App-Image-2025-07-28-at-11-19-15-AM.jpg',   
      alt: '2024',
      year: '2024',
      category: 'Events',
      description: 'TechUtsav Team'
    }
    
   
  ];

  const years = ['All', ...Array.from(new Set(images.map(img => img.year))).sort().reverse()];
  const categories = ['All', ...Array.from(new Set(images.map(img => img.category))).sort()];

  const filteredImages = images.filter(img => {
    const yearMatch = selectedYear === 'All' || img.year === selectedYear;
    const categoryMatch = selectedCategory === 'All' || img.category === selectedCategory;
    return yearMatch && categoryMatch;
  });

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
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
          <h1 className="text-5xl font-bold mb-4 scanner">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capturing moments of innovation, collaboration, and achievement
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Filter className="w-5 h-5" />
            <span className="font-semibold">Filter by:</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-semibold text-gray-600 px-3 py-2">Year:</span>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-full border-2 transition-all duration-300 text-sm ${
                    selectedYear === year
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-gray-300 hover:border-black'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-semibold text-gray-600 px-3 py-2">Category:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full border-2 transition-all duration-300 text-sm ${
                    selectedCategory === category
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-gray-300 hover:border-black'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6"
          layout
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="break-inside-avoid mb-6 group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => openLightbox(image)}
              layout
            >
              <div className="relative overflow-hidden bg-white border-2 border-gray-200 group-hover:border-black transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <div className="text-sm font-semibold">{image.year}</div>
                    <div className="text-xs mt-1">{image.category}</div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 leading-relaxed">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredImages.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-600">No images found for the selected filters.</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-white transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-white transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-white transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-semibold mb-1">{selectedImage.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-300">
                      <span>{selectedImage.year}</span>
                      <span>•</span>
                      <span>{selectedImage.category}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-300">
                    {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
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

export default Gallery;
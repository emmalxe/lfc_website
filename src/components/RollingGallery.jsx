import React from 'react';
import './RollingGallery.css';

const RollingGallery = ({ images = [], speed = 30 }) => {
  // Default placeholder images if none provided
  const defaultImages = [
    'https://via.placeholder.com/400x300/FFB6C1/FFFFFF?text=Image+1',
    'https://via.placeholder.com/400x300/CDB4DB/FFFFFF?text=Image+2',
    'https://via.placeholder.com/400x300/BDE0FE/FFFFFF?text=Image+3',
    'https://via.placeholder.com/400x300/FFB6C1/FFFFFF?text=Image+4',
    'https://via.placeholder.com/400x300/CDB4DB/FFFFFF?text=Image+5',
    'https://via.placeholder.com/400x300/BDE0FE/FFFFFF?text=Image+6',
  ];

  const galleryImages = images.length > 0 ? images : defaultImages;

  return (
    <div className="rolling-gallery">
      <div className="gallery-track" style={{ animationDuration: `${speed}s` }}>
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
        {/* Duplicate images for seamless loop */}
        {galleryImages.map((image, index) => (
          <div key={`duplicate-${index}`} className="gallery-item">
            <img src={image} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RollingGallery;

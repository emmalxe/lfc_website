import React, { useState, useRef, useEffect } from 'react';
import './ThreeDCarousel.css';

const ThreeDCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [direction, setDirection] = useState('right'); // 'left' or 'right'
  const [_isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const handleNext = () => {
    setPreviousIndex(currentIndex);
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setPreviousIndex(currentIndex);
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDotClick = (index) => {
    setPreviousIndex(currentIndex);
    // Determine direction based on whether we're going forward or backward
    if (index > currentIndex || (index === 0 && currentIndex === images.length - 1)) {
      setDirection('right');
    } else {
      setDirection('left');
    }
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div 
      className="three-d-carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={containerRef}
    >
      <div className="carousel-wrapper">
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          const isPrevious = index === previousIndex && index !== currentIndex;
          
          let className = 'carousel-item';
          
          if (isActive) {
            className += ' active';
          } else if (isPrevious) {
            // Apply exit animation based on direction
            // When going right (next), old image exits to the left
            // When going left (previous), old image exits to the right
            className += direction === 'right' ? ' sliding-left-out' : ' sliding-right-out';
          } else {
            // Hidden items positioned based on direction
            // When going right (next), new image enters from the right
            // When going left (previous), new image enters from the left
            className += direction === 'right' ? ' sliding-right-in' : ' sliding-left-in';
          }

          return (
            <div
              key={index}
              className={className}
              onClick={() => handleDotClick(index)}
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`}
                className="carousel-image"
              />
              {isActive && <div className="active-indicator" />}
            </div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <button 
        className="carousel-nav prev" 
        onClick={handlePrevious}
        aria-label="Previous image"
      >
        ←
      </button>
      <button 
        className="carousel-nav next" 
        onClick={handleNext}
        aria-label="Next image"
      >
        →
      </button>

      {/* Dots indicator */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image counter */}
      <div className="carousel-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ThreeDCarousel;


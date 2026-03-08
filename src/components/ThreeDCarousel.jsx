import React, { useState, useRef, useEffect } from 'react';
import './ThreeDCarousel.css';

const ThreeDCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [_isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      else if (e.key === 'ArrowRight') handleNext();
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
    if (index > currentIndex || (index === 0 && currentIndex === images.length - 1)) {
      setDirection('right');
    } else {
      setDirection('left');
    }
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div
      className="three-d-carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={containerRef}
    >
      {/* Row: [arrow] [image track] [arrow] */}
      <div className="carousel-row">
        <button className="carousel-nav prev" onClick={handlePrevious} aria-label="Previous image">‹</button>

        <div className="carousel-wrapper">
          {images.map((image, index) => {
            const isActive = index === currentIndex;
            const isPrevious = index === previousIndex && index !== currentIndex;

            let className = 'carousel-item';
            if (isActive) {
              className += ' active';
            } else if (isPrevious) {
              className += direction === 'right' ? ' sliding-left-out' : ' sliding-right-out';
            } else {
              className += direction === 'right' ? ' sliding-right-in' : ' sliding-left-in';
            }

            return (
              <div key={index} className={className}>
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="carousel-image"
                />
              </div>
            );
          })}
        </div>

        <button className="carousel-nav next" onClick={handleNext} aria-label="Next image">›</button>
      </div>

      {/* Dots */}
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

      {/* Counter */}
      <div className="carousel-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ThreeDCarousel;

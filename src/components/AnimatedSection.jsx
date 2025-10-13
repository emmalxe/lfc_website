import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './AnimatedSection.css';

const AnimatedSection = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  once = true,
  className = ''
}) => {
  const [ref, isVisible] = useScrollAnimation({ 
    once,
    threshold: 0.1 
  });

  return (
    <div
      ref={ref}
      className={`animated-section ${animation} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

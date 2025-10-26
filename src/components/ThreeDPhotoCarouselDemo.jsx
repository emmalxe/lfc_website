import React from 'react';
import ThreeDCarousel from './ThreeDCarousel';
import { getJourneyImages } from '../utils/getJourneyImages';

const ThreeDPhotoCarouselDemo = () => {
  const journeyImages = getJourneyImages();

  return (
    <div className="w-full max-w-4xl mx-auto">
      <ThreeDCarousel images={journeyImages} />
    </div>
  );
};

export default ThreeDPhotoCarouselDemo;


// Auto-generated file - do not edit manually
// Run 'npm run generate-images' to regenerate this file

export const getJourneyImages = () => {
  const imageFiles = [
  "PHOTO-2025-10-13-22-50-33.jpg",
  "PHOTO-2025-10-13-22-50-35.jpg",
  "PHOTO-2025-10-13-22-54-46.jpg",
  "PHOTO-2025-10-13-22-54-47.jpg"
];
  
  const base = import.meta.env.BASE_URL;
  return imageFiles.map(filename => 
    `${base}references/journey pictures/${filename}`
  );
};

export const getImageCount = () => {
  return 4;
};

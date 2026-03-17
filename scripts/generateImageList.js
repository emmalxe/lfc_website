import fs from 'fs';
import path from 'path';

const journeyPicturesFolder = 'public/references/journey pictures';
const outputFile = 'src/utils/getJourneyImages.js';

// Read all files from the journey pictures folder
const files = fs.readdirSync(journeyPicturesFolder);

// Filter for image files
const imageFiles = files.filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
});

// Sort with preferred order
const preferredOrder = [
  "We care for all template drawing new mural 3.jpeg",
  "old_clinic_photo.jpg",
  "new_container.jpeg"
];

imageFiles.sort((a, b) => {
  const indexA = preferredOrder.indexOf(a);
  const indexB = preferredOrder.indexOf(b);
  
  if (indexA !== -1 && indexB !== -1) return indexA - indexB;
  if (indexA !== -1) return -1;
  if (indexB !== -1) return 1;
  return a.localeCompare(b);
});

// Generate the JavaScript code
const jsCode = `// Auto-generated file - do not edit manually
// Run 'npm run generate-images' to regenerate this file

export const getJourneyImages = () => {
  const imageFiles = ${JSON.stringify(imageFiles, null, 2)};
  
  const base = import.meta.env.BASE_URL;
  return imageFiles.map(filename => 
    \`\${base}references/journey pictures/\${filename}\`
  );
};

export const getImageCount = () => {
  return ${imageFiles.length};
};
`;

// Write the file
fs.writeFileSync(outputFile, jsCode);

console.log(`Generated ${imageFiles.length} image paths in ${outputFile}`);
console.log('Images:', imageFiles);

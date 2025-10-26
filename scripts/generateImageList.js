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

// Generate the JavaScript code
const jsCode = `// Auto-generated file - do not edit manually
// Run 'npm run generate-images' to regenerate this file

export const getJourneyImages = () => {
  const imageFiles = ${JSON.stringify(imageFiles, null, 2)};
  
  return imageFiles.map(filename => 
    \`/references/journey pictures/\${filename}\`
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


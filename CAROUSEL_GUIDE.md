# Photo Carousel Guide

This guide explains how to add new pictures to the "It's the journey that matters..." carousel on your website.

## Quick Steps to Add New Pictures

### 1. Add Your Images

Place your new image files in the following folder:
```
public/references/journey pictures/
```

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.webp`

### 2. Update the Carousel

After adding new images, run this command in your terminal:

```bash
npm run generate-images
```

This will automatically:
- Scan the `journey pictures` folder
- Detect all image files
- Update the carousel to include all images
- Adjust spacing and layout based on the number of images

### 3. View Your Changes

If your development server is already running (`npm run dev`), refresh your browser. Otherwise, start the server:

```bash
npm run dev
```

## Example

Let's say you want to add 3 new photos:

1. **Copy your images** to `public/references/journey pictures/`:
   - `new-photo-1.jpg`
   - `new-photo-2.jpg`
   - `new-photo-3.jpg`

2. **Run the update command**:
   ```bash
   npm run generate-images
   ```

3. **Check the output**. You should see something like:
   ```
   Generated 8 image paths in src/utils/getJourneyImages.js
   Images: [
     'PHOTO-2025-10-04-13-01-55 2.jpg',
     'PHOTO-2025-10-13-22-50-33.jpg',
     ...
     'new-photo-1.jpg',
     'new-photo-2.jpg',
     'new-photo-3.jpg'
   ]
   ```

4. **Refresh your browser** to see all 8 images in the carousel!

## Important Notes

### File Naming
- Use descriptive names for your images
- Avoid special characters (stick to letters, numbers, hyphens, and underscores)
- Spaces in filenames are okay but not recommended

### Image Quality
- Recommended resolution: 1920x1080 or similar aspect ratio
- Keep file sizes reasonable (under 2MB per image) for faster loading

### Order of Images
Images appear in alphabetical order by filename. To control the order:
- Use numbered prefixes: `01-image.jpg`, `02-image.jpg`, etc.
- Or use dates: `2025-01-15-event.jpg`

### Removing Images
1. Delete the image file from `public/references/journey pictures/`
2. Run `npm run generate-images`
3. The carousel will automatically update

## Troubleshooting

### Images not showing up?
1. Make sure the image is in the correct folder
2. Check that you ran `npm run generate-images`
3. Verify the image format is supported (`.jpg`, `.jpeg`, `.png`, `.webp`)
4. Refresh your browser (hard refresh: Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### Carousel looks broken?
1. Check browser console for errors (F12 → Console tab)
2. Make sure at least one image exists in the folder
3. Try running `npm run generate-images` again

## Technical Details

The carousel automatically:
- ✅ Loops infinitely (after the last image, it goes back to the first)
- ✅ Shows one image at a time with smooth transitions
- ✅ Adjusts spacing based on the number of images
- ✅ Works with any number of images (1 to 100+)
- ✅ Responsive on mobile and desktop

## File Structure

```
lfc_website/
├── public/
│   └── references/
│       └── journey pictures/        ← Add images here
│           ├── image1.jpg
│           ├── image2.jpg
│           └── ...
├── src/
│   ├── components/
│   │   ├── ThreeDCarousel.jsx      ← Carousel component
│   │   └── ThreeDPhotoCarouselDemo.jsx
│   └── utils/
│       └── getJourneyImages.js      ← Auto-generated image list
├── scripts/
│   └── generateImageList.js         ← Script that scans images
└── package.json
```

## Need Help?

If you encounter any issues:
1. Check that Node.js is installed (`node --version`)
2. Make sure dependencies are installed (`npm install`)
3. Verify the folder path is correct
4. Check file permissions (images should be readable)

---

**Remember:** Always run `npm run generate-images` after adding or removing images!


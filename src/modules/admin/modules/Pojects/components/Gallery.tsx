import React from 'react';
import { GalleryImage } from '../hooks/useProjects';
import { url } from '../../../../../utils/url';


interface GalleryProps {
  images: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2">Gallery</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <>
          <img key={image.id} src={`${url}${image.imagePath}`} alt={`Gallery ${image.id}`} className="rounded shadow-md" />
          </>
        ))}
      </div>
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Add Image</button>
    </div>
  );
};

export default Gallery;

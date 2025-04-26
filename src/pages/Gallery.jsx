import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal'; // Make sure to install this!

const images = [
  '/images/gallery/img1.jpeg',
  '/images/gallery/img2.jpeg',
  '/images/gallery/img3.jpeg',
];

const TILE_SIZE = 400;
const TILES_X = 20;
const TILES_Y = 20;

// Initialize react-modal (required once per app)
Modal.setAppElement('#root'); // Replace with your app's root element ID

const Gallery = () => {
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize scroll position
    container.scrollLeft = TILE_SIZE * TILES_X;
    container.scrollTop = TILE_SIZE * TILES_Y;

    const handleScroll = () => {
      const c = containerRef.current;
      if (!c) return;

      const wrapThreshold = TILE_SIZE * 2;
      const safeZoneXStart = TILE_SIZE * TILES_X - wrapThreshold;
      const safeZoneXEnd = TILE_SIZE * TILES_X * 2 + wrapThreshold;
      const safeZoneYStart = TILE_SIZE * TILES_Y - wrapThreshold;
      const safeZoneYEnd = TILE_SIZE * TILES_Y * 2 + wrapThreshold;

      if (c.scrollLeft < safeZoneXStart) c.scrollLeft += TILE_SIZE * TILES_X;
      else if (c.scrollLeft > safeZoneXEnd) c.scrollLeft -= TILE_SIZE * TILES_X;

      if (c.scrollTop < safeZoneYStart) c.scrollTop += TILE_SIZE * TILES_Y;
      else if (c.scrollTop > safeZoneYEnd) c.scrollTop -= TILE_SIZE * TILES_Y;
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const tiles = [];
  for (let y = 0; y < TILES_Y * 3; y++) {
    for (let x = 0; x < TILES_X * 3; x++) {
      const index = (x + y) % images.length;
      const isOddRow = y % 2 !== 0;
      const img = images[index];

      tiles.push(
        <div
          key={`${x}-${y}`}
          className="absolute overflow-hidden cursor-pointer hover:opacity-90 transition-opacity "
          style={{
            width: TILE_SIZE,
            height: TILE_SIZE,
            left: isOddRow ? `${x * TILE_SIZE + TILE_SIZE / 2}px` : `${x * TILE_SIZE}px`,
            top: `${y * TILE_SIZE}px`,
            marginRight: '-1px',
            marginBottom: '-1px',
          }}
          onClick={() => setSelectedImage(img)} 
        >
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover block hover:scale-105 transition-transform duration-300"
          />
        </div>
      );
    }
  }

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen overflow-auto no-scrollbar bg-white relative"
    >
      <div
        style={{
          width: `${TILE_SIZE * TILES_X * 3}px`,
          height: `${TILE_SIZE * TILES_Y * 3}px`,
          position: 'relative',
        }}
      >
        {tiles}
      </div>

      {/* 👇 Modal for selected image */}
      <Modal
        isOpen={!!selectedImage}
        onRequestClose={() => setSelectedImage(null)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(5px)',
            zIndex: 50,
          },
          content: {
            inset: '10%',
            background: 'transparent',
            border: 'none',
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        {selectedImage && (
          <div className="relative w-full h-full">
            <img 
              src={selectedImage} 
              className="w-full h-full object-contain" 
              alt="Enlarged preview" 
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/80"
            >
              ✕
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Gallery;
import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import ReactCompareImage from 'react-compare-image';

const images = [
  '/images/gallery/img1.jpeg',
  '/images/gallery/img2.jpeg',
  '/images/gallery/img3.jpeg',
  '/images/gallery/img4.jpg',
  '/images/gallery/img5.jpg',
  '/images/gallery/img6.jpg',
  '/images/gallery/img7.jpg',
  
];

const TILE_SIZE = 400;
const TILES_X = 20;
const TILES_Y = 20;

Modal.setAppElement('#root');

const Gallery = () => {
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

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

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setSelectedIndex(images.findIndex(image => image === img));
  };

  const navigateImages = (direction) => {
    let newIndex = selectedIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const tiles = [];
  for (let y = 0; y < TILES_Y * 3; y++) {
    for (let x = 0; x < TILES_X * 3; x++) {
      const index = (x + y) % images.length;
      const isOddRow = y % 2 !== 0;
      const img = images[index];

      tiles.push(
        <div
          key={`${x}-${y}`}
          className="absolute overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
          style={{
            width: TILE_SIZE,
            height: TILE_SIZE,
            left: isOddRow ? `${x * TILE_SIZE + TILE_SIZE / 2}px` : `${x * TILE_SIZE}px`,
            top: `${y * TILE_SIZE}px`,
            marginRight: '-1px',
            marginBottom: '-1px',
          }}
          onClick={() => handleImageClick(img)}
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

      <Modal
        isOpen={!!selectedImage}
        onRequestClose={() => setSelectedImage(null)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.9)',
            backdropFilter: 'blur(8px)',
            zIndex: 50,
          },
          content: {
            inset: '5%',
            background: 'black',
            border: '4px solid white',
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          },
        }}
      >
        {selectedImage && (
          <div className="relative w-full h-full flex flex-col">
            {/* Navigation Controls */}
            <div className="absolute top-0 left-0 right-0 flex justify-between p-4 z-10">
              <button
                onClick={() => navigateImages(-1)}
                className="bg-black/70 text-white p-3 rounded-full hover:bg-black border-2 border-white"
              >
                ←
              </button>
              <button
                onClick={() => setSelectedImage(null)}
                className="bg-black/70 text-white p-3 rounded-full hover:bg-red-500 border-2 border-white"
              >
                ✕
              </button>
              <button
                onClick={() => navigateImages(1)}
                className="bg-black/70 text-white p-3 rounded-full hover:bg-black border-2 border-white"
              >
                →
              </button>
            </div>

            {/* Image Comparison */}
            <div className="flex-1 w-full h-full">
              <ReactCompareImage
                leftImage={images[selectedIndex > 0 ? selectedIndex - 1 : images.length - 1]}
                rightImage={selectedImage}
                leftImageLabel="Before"
                rightImageLabel="After"
                sliderLineColor="#ffffff"
                sliderLineWidth={4}
                sliderPositionPercentage={0.5}
                handleSize={40}
                hover={true}
                aspectRatio="wider"
                className="w-full h-full"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4 text-center border-t-2 border-white">
              <p className="font-mono text-lg">
                Image {selectedIndex + 1} of {images.length}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Gallery;
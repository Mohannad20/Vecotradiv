import InfiniteSlider from "../components/InfiniteSlider";
import { Link } from "react-router-dom";

const images = [
  '/images/gallery/img1.jpeg',
  '/images/gallery/img2.jpeg',
  '/images/gallery/img3.jpeg',
];

export const Gallery = () => {
  return (
    <div className="relative w-full h-screen bg-neutral-900 hover:bg-white transition-colors duration-300 overflow-hidden">
   <Link to="/contact">
      
      <div className="absolute top-0 left-0 w-full flex flex-col gap-4 p-4">
        <InfiniteSlider direction="horizontal" speed={40} className="w-full h-[120px] ">
          {images.map((src, i) => (
            <img key={i} src={src} className="aspect-square w-[120px] " />
          ))}
        </InfiniteSlider>
        <InfiniteSlider direction="horizontal" reverse speed={40} className="w-full h-[120px] ">
          {images.map((src, i) => (
            <img key={i} src={src} className="aspect-square w-[120px] " />
          ))}
        </InfiniteSlider>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex flex-col gap-4 p-4">
        <InfiniteSlider direction="horizontal" speed={40} className="w-full h-[120px]  ">
          {images.map((src, i) => (
            <img key={i} src={src} className="aspect-square w-[120px] " />
          ))}
        </InfiniteSlider>
        <InfiniteSlider direction="horizontal" reverse speed={40} className="w-full h-[120px] ">
          {images.map((src, i) => (
            <img key={i} src={src} className="aspect-square w-[120px] " />
          ))}
        </InfiniteSlider>
      </div>

      <div className="absolute top-0 left-0 h-full flex  justify-center gap-4 p-4">
        <InfiniteSlider direction="vertical" speed={40} className="w-[120px] h-full ">
          {images.map((src, i) => (
            <img key={i} src={src} className="aspect-square w-[120px] " />
          ))}
        </InfiniteSlider>
        <InfiniteSlider direction="vertical" reverse speed={40} className="w-[120px] h-full ">
          {images.map((src, i) => (
            <img key={i} src={src} className="aspect-square w-[120px] " />
          ))}
        </InfiniteSlider>
      </div>

      <div className="absolute top-0 right-0 h-full flex gap-4 p-4">
        <InfiniteSlider direction="vertical" speed={40} className="w-[120px] h-full">
          {images.map((src, i) => (
            <img key={i} src={src} className="aspect-square w-[120px] " />
          ))}
        </InfiniteSlider>
        <InfiniteSlider direction="vertical" reverse speed={40} className="w-[120px] h-full">
          {images.map((src, i) => (
            <img key={i} src={src} className="aspect-square w-[120px] " />
          ))}
        </InfiniteSlider>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1
          className="text-[2.5rem] md:text-[4rem] font-[Monument] text-white uppercase font-bold tracking-widest hover:text-amber-300 transition-colors duration-300 "
          style={{
            WebkitTextStroke: "2px black", 
          }}
      >
        Galerie
      </h1>
      </div>
      </Link>
    </div>
  );
}

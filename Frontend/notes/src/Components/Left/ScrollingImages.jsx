import React from "react";

const ScrollingImages = () => {
  return (
    <div className="overflow-hidden">
      {/* The container that scrolls */}
      <div
        className="flex animate-scroll whitespace-nowrap"
        style={{ animation: "scroll 10s linear infinite" }}
      >
        {/* Your images */}
        <img src="img1.jpg" alt="Image 1" className="h-32 w-auto mx-2" />
        <img src="img2.jpg" alt="Image 2" className="h-32 w-auto mx-2" />
        <img src="img3.jpg" alt="Image 3" className="h-32 w-auto mx-2" />
        {/* Repeat images to create a seamless effect */}
      </div>
    </div>
  );
};

export default ScrollingImages;
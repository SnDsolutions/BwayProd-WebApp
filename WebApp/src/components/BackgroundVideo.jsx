
import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src="https://horizons-cdn.hostinger.com/7374c107-f8ac-4061-8bc8-58e7fc5c4c31/b2122122121212121212121212121212.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black opacity-50" />
    </div>
  );
};

export default BackgroundVideo;

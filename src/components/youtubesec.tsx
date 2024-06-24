// components/BigImageSection.tsx

import React from 'react';

const Youtubesec: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center items-center pb-24 bg-blue-50">
      <div className="border mt-[-120px] border-gray-300 rounded-lg shadow-lg">
        <a href="https://www.youtube.com/watch?v=VIDEO_ID" target="_blank" rel="noopener noreferrer">
          <iframe width="800" height="400" src="https://www.youtube.com/embed/zzRw3hvtWNY?si=STaGo3LetDLVoWkz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </a>
      </div>
      <button className="px-16 py-3 bg-yellow-500 text-white mt-10 rounded hover:bg-yellow-500">
        Get Started <span className="ml-2">&#8594;</span>
      </button>
    </section>
  );
};

export default Youtubesec;

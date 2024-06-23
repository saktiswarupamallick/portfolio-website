// components/BigImageSection.tsx

import React from 'react';

const Youtubesec: React.FC = () => {
  return (
    <section className="h-full flex flex-col justify-center items-center pb-56 bg-blue-50">
      <div className=" border mt-[-120px] border-gray-300 rounded-lg shadow-lg">
        <img
          src="/certificate.jpg"
          alt="Big Rectangular Image"
          className="w-[800px] h-[400px] object-cover"
        />
      </div>
      <button className="px-16 py-3 bg-yellow-500 text-white mt-10 rounded hover:bg-yellow-500">
        Get Started <span className="ml-2">&#8594;</span>
      </button>


    </section>
  );
};

export default Youtubesec;

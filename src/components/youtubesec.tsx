import React from 'react';

const BigImageSection: React.FC = () => {
  return (
    <section className="h-full rounded-lg mx-24 flex flex-col justify-center items-center pb-24 bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="flex justify-center items-center mx-auto border-4 border-purple-900 mt-[-120px] border-gray-300 rounded-lg shadow-lg overflow-hidden">
        {/* Set a max-width for the iframe container */}
        <div className="max-w-screen-lg w-full">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/zzRw3hvtWNY?si=J8KlX1a_bcN34zFH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <button className="px-8 sm:px-16 py-3 bg-black rounded-xl text-white mt-6 sm:mt-10 rounded hover:bg-yellow-500">
        Get Started <span className="ml-2">&#8594;</span>
      </button>
    </section>
  );
};

export default BigImageSection;

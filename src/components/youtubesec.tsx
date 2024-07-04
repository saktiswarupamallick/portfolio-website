import React from 'react';

const BigImageSection: React.FC = () => {
  return (
    <section className="h-full rounded-lg z-0 mx-24 flex flex-col justify-center items-center pb-24 bg-white">
      
      <div className="flex justify-center items-center mx-auto border-4 border-purple-900 mt-[-120px] border-gray-300 rounded-lg shadow-lg overflow-hidden">
        {/* Set a max-width for the iframe container */}
        <div className="max-w-screen-lg w-full">
        
        </div>
      </div>
      <button className="px-8 sm:px-16 py-3 bg-black rounded-xl text-white mt-6 sm:mt-10 rounded hover:bg-yellow-500">
        Get Started <span className="ml-2">&#8594;</span>
      </button>
    </section>
  );
};

export default BigImageSection;

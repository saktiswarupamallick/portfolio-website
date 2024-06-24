import React from 'react';

const ResponsiveSection: React.FC = () => {
  return (
    <section className="h-[370px] flex flex-col justify-center items-center bg-black text-white">
      <div className="text-center">
        <h2 className="text-xl font-medium mb-2">Welcome to My Channel</h2>
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          Master Web Development
        </h1>
        <h2 className="text-xl pb-10 font-medium">Learn, Build, and Grow with Me</h2>
      </div>
    </section>
  );
};

export default ResponsiveSection;

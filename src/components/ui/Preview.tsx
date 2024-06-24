import React from "react";
import { IconContainer } from "./IconContainer";
import { Radar } from "./Radar";

export function Preview() {
  return (
    <div className="relative flex pt-20 pb-20 w-full flex-col items-center bg-gradient-to-r from-indigo-200 to-purple-200 justify-center space-y-4 overflow-hidden px-4">
      <div className="mx-auto w-full max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Exploring My Tech Stack</h2>
        <p className="text-lg text-gray-700 mb-10">Crafting with code and creativity</p>
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
          <IconContainer text="Web Development" delay={0.2} imgSrc="/mongo.png" />
          <IconContainer text="Mobile Apps" delay={0.4} imgSrc="/next.svg" />
          <IconContainer text="Designing" delay={0.3} imgSrc="/Nodejs.png" />
        </div>
      </div>
      <div className="mx-auto w-full max-w-md">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
          <IconContainer text="Maintenance" delay={0.5} imgSrc="/path/to/maintenance.png" />
          <IconContainer text="Server Management" delay={0.8} imgSrc="/JavaScript.png" />
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
          <IconContainer text="GitHub Integration" delay={0.6} imgSrc="/react.png" />
          <IconContainer text="CMS Integration" delay={0.7} imgSrc="/ts.png" />
        </div>
      </div>

      <Radar className="absolute -bottom-12" />
      <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </div>
  );
}

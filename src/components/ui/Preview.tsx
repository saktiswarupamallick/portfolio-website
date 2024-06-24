"use client";
import React from "react";

import { IconContainer } from "./IconContainer";
import { Radar } from "./Radar";

export function Preview() {
  return (
    <div className="relative flex h-96 w-full flex-col items-center  justify-center space-y-4 overflow-hidden px-4">
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
          <IconContainer text="Web Development" delay={0.2} imgSrc="/MongoDB.png" />
          <IconContainer text="Mobile apps" delay={0.4} imgSrc="/next.svg" />
          <IconContainer text="Designing" delay={0.3} imgSrc="/Nodejs.png" />
        </div>
      </div>
      <div className="mx-auto w-full max-w-md">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
          <IconContainer text="Maintenance" delay={0.5} imgSrc="/path/to/maintenance.png" />
          <IconContainer text="Server management" delay={0.8} imgSrc="/JavaScript.png" />
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
          <IconContainer text="GitHub Integration" delay={0.6} imgSrc="/path/to/github-integration.png" />
          <IconContainer text="CMS Integration" delay={0.7} imgSrc="/ts.png" />
        </div>
      </div>

      <Radar className="absolute -bottom-12" />
      <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </div>
  );
}

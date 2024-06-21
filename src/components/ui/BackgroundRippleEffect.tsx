
"use client";
import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../../app/utils/cn";
import { SparklesCore } from "../ui/sparkles";


export const BackgroundCellAnimation = () => {

  const words = [
    {
      text: "Innovating",
      className: "text-black dark:text-blue-500",
    },
    {
      text: "the",
      className: "text-black dark:text-blue-500",
    },
    {
      text: "Future",
      className: "text-black dark:text-blue-500",
    },
    {
      text: "of",
      className: "text-black dark:text-blue-500",
    },
    {
      text: "Software",
      className: "text-black dark:text-blue-500",
    },
    {
      text: "Development",
      className: "text-blue-500 dark:text-blue-500",
    },
    
  ];
  const word = [
    {
      text: "Innovating",
      className: "text-black dark:text-blue-500",
    },
    {
      text: "the",
      className: "text-black dark:text-blue-500",
    },
    {
      text: "Future",
      className: "text-black dark:text-blue-500",
    },
   
    {
      text: "Development",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
return (
  <div className="relative h-screen bg-white flex justify-center overflow-hidden">
    <BackgroundCellCore />
    <div className="relative z-50 mt-40 pointer-events-none select-none">
    <div className="flex flex-col items-center justify-center h-[30rem]  ">
      <p className="text-black dark:text-neutral-200 xl:text-3xl sm:text-base  ">
      Leveraging Cutting-Edge Technologies to Build Tomorrow’s Solutions
      </p>
      <TypewriterEffectSmooth words={words} />
      <TypewriterEffectSmooth words={word} className="mt-[-20px]" />
      <motion.button 
      initial ={{opacity :0.5, scale: 0.8}}
      whileInView={{opacity:1 , scale:1}}
      transition={{
        delay:0.5,
        duration:0.8,
        ease:"easeInOut"
      }}
       className=" p-6 mt-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-4 rounded-full border-[#51ddf9] bg-[#131313] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
      ><span className=" bg-clip-text text-transparent bg-gradient-to-r from-neutral-400  to-neutral-800 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
        Start For Free
      </span>

      </motion.button>
    </div>
      
    </div>

  </div>
);
};

const BackgroundCellCore = () => {
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

const ref = useRef<any>(null);

const handleMouseMove = (event: any) => {
  const rect = ref.current && ref.current.getBoundingClientRect();
  setMousePosition({
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  });
};

const size = 300;
return (
  <div
    ref={ref}
    onMouseMove={handleMouseMove}
    className="h-full absolute inset-0"
  >
    <div className="absolute h-[30rem] inset-y-0  overflow-hidden">
      <div className="absolute h-full w-full pointer-events-none -bottom-2 z-40 bg-white [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      <div
        className="absolute inset-0 z-20 bg-transparent"
        style={{
          maskImage: `radial-gradient(
            ${size / 4}px circle at center,
           white, transparent
          )`,
          WebkitMaskImage: `radial-gradient(
          ${size / 4}px circle at center,
          white, transparent
        )`,
          WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
            mousePosition.y - size / 2
          }px`,
          WebkitMaskSize: `${size}px`,
          maskSize: `${size}px`,
          pointerEvents: "none",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        <Pattern cellClassName="border-blue-600 relative z-[100]" />
      </div>
      <Pattern className="opacity-[0.5]" cellClassName="border-neutral-700" />
    </div>
  </div>
);
};

const Pattern = ({
  className,
  cellClassName,
  }: {
  className?: string;
  cellClassName?: string;
}) => {
  const x = new Array(47).fill(0);
  const y = new Array(30).fill(0);
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
  const [clickedCell, setClickedCell] = useState<any>(null);

  return (
    <div className={cn("flex flex-row  relative z-30", className)}>
      {matrix.map((row, rowIdx) => (
        <div
          key={`matrix-row-${rowIdx}`}
          className="flex flex-col  relative z-20 border-b"
        >
          {row.map((column, colIdx) => {
            const controls = useAnimation();

            useEffect(() => {
              if (clickedCell) {
                const distance = Math.sqrt(
                  Math.pow(clickedCell[0] - rowIdx, 2) +
                    Math.pow(clickedCell[1] - colIdx, 2)
                );
                controls.start({
                  opacity: [0, 1 - distance * 0.1, 0],
                  transition: { duration: distance * 0.2 },
                });
              }
            }, [clickedCell]);

            return (
              <div
                key={`matrix-col-${colIdx}`}
                className={cn(
                  "bg-transparent border-l border-b border-neutral-900",
                  cellClassName
                )}
                onClick={() => setClickedCell([rowIdx, colIdx])}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: [0, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "backOut",
                  }}
                  animate={controls}
                 className="bg-cyan-600 h-12 w-12" //  rgba(14, 165, 233, 0.15) for a more subtle effect
                ></motion.div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};



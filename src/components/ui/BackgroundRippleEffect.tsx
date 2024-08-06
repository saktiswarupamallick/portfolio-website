"use client";
import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../../app/utils/cn";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

export const BackgroundCellAnimation: NextPage = () => {
  return (
    <div className="relative h-[660px] mb-[130px] bg-slate-950 flex justify-center items-center overflow-hidden">
      <div className="absolute z-[0] w-[80%] h-[60%] -left-[50%] rounded-full pink__gradient top-40" />
      <BackgroundCellCore />
      <div className="relative z-50 pointer-events-none select-none text-center">
        <motion.h1
          className="bg-clip-text font-poppins font-bold text-bold text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 text-[1rem] sm:text-[1rem] lg:text-[2rem]"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          Hi my name is
        </motion.h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl poppins-bold font-bold text-white text-bold">
          Sakti Swarupa
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl poppins-bold font-bold bg-clip-text text-bold text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          I craft things for the web.
        </h1>
        <h2 className="mt-4 text-base sm:text-lg md:text-xl lg:text-lg text-white">
          I&apos;m a software engineer with expertise in creating top-notch
          digital experiences. <br />My current focus is on developing products that are
          accessible and centered around user needs
        </h2>
        <div className="flex flex-col items-center"><a  href="https://docs.google.com/document/d/1asDR0LjCAoC00VApRjRVfTgAnSbihKAx/edit?usp=sharing&ouid=107048227985647790869&rtpof=true&sd=true"><MagicButton
          title=" My Resume"
          icon={<FaLocationArrow />}
          position="right"

        /></a></div>
        
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
      <div className="absolute h-[40rem] inset-y-0 overflow-hidden">
        <div className="absolute h-full w-full pointer-events-none -bottom-2 z-40 bg-slate-950 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div
          className="absolute inset-0 z-20 bg-transparent"
          style={{
            maskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
            WebkitMaskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Pattern cellClassName="border-cyan-900 relative z-[100]" />
        </div>
        <Pattern className="opacity-[0.4]" cellClassName="border-cyan-700" />
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
    <div className={cn("flex flex-row relative z-30", className)}>
      {matrix.map((row, rowIdx) => (
        <div
          key={`matrix-row-${rowIdx}`}
          className="flex flex-col relative z-20 border-b"
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
                  "bg-transparent border-l border-b border-neutral-600",
                  cellClassName
                )}
                onClick={() => setClickedCell([rowIdx, colIdx])}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: [0, 1, 0.5],
                    backgroundColor: "#fc67fa", // Dark cyan color
                  }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                  animate={controls}
                  className="bg-purple-800 h-12 w-12"
                ></motion.div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

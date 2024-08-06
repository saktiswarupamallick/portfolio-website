"use client";
import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import { cn } from "../../app/utils/cn";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import Link from "next/link";

export const BackgroundCellAnimation: NextPage = () => {
  return (
    <div className="relative h-[660px] mb-[130px] bg-slate-950 flex justify-center items-center overflow-hidden">
      <div className="absolute z-[0] w-[80%] h-[60%] -left-[50%] rounded-full pink__gradient top-40" />
      <BackgroundCellCore />
      <div className="relative z-50 select-none text-center">
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
        <div className="mt-4">
          <Link href="https://drive.google.com/file/d/1rta-DhJc7SqCZ6S0NZ99DcIjDWwEg4QN/view?usp=drive_link">
            <MagicButton
              title="My Resume"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
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
          <Pattern cellClassName="border-cyan-900 relative z-[100]" mousePosition={mousePosition} />
        </div>
        <Pattern className="opacity-[0.4]" cellClassName="border-cyan-700" mousePosition={mousePosition} />
      </div>
    </div>
  );
};

const Pattern = ({
  className,
  cellClassName,
  mousePosition,
}: {
  className?: string;
  cellClassName?: string;
  mousePosition: { x: number; y: number };
}) => {
  const x = new Array(47).fill(0);
  const y = new Array(30).fill(0);
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
  const [clickedCell, setClickedCell] = useState<any>(null);
  
  const controlsArray: AnimationControls[][] = [];
  for (let i = 0; i < x.length; i++) {
    const row: AnimationControls[] = [];
    for (let j = 0; j < y.length; j++) {
      row.push(useAnimation());
    }
    controlsArray.push(row);
  }

  useEffect(() => {
    if (clickedCell) {
      matrix.forEach((row, rowIdx) => {
        row.forEach((_, colIdx) => {
          const distance = Math.sqrt(
            Math.pow(clickedCell[0] - rowIdx, 2) +
            Math.pow(clickedCell[1] - colIdx, 2)
          );
          controlsArray[rowIdx][colIdx].start({
            opacity: [0, 1 - distance * 0.1, 0],
            transition: { duration: distance * 0.2 },
          });
        });
      });
    }
  }, [clickedCell, controlsArray, matrix]);

  return (
    <div className={cn("flex flex-row relative z-30", className)}>
      {matrix.map((row, rowIdx) => (
        <div
          key={`matrix-row-${rowIdx}`}
          className="flex flex-col relative z-20 border-b"
        >
          {row.map((_, colIdx) => (
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
                animate={controlsArray[rowIdx][colIdx]}
                className="bg-purple-800 h-12 w-12"
              ></motion.div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

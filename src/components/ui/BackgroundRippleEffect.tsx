"use client";
import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../app/utils/cn";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import Link from "next/link";


export const BackgroundCellAnimation: NextPage = () => {
  return (
    <div className="relative h-[660px] mb-[130px] bg-slate-950 flex justify-center items-center overflow-hidden">
     
      <BackgroundCellCore />
      <div className="relative z-50 select-none text-center p-6">

        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white text-bold">
          I&apos;m a software engineer
        </h1>
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl  font-bold bg-clip-text text-bold text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          who crafts innovation from complexity
        </h1>
        <h2 className="mt-4 text-base sm:text-lg md:text-xl lg:text-lg text-white">
          Meet Sakti, a tech enthusiast who turns ideas into powerful, user-friendly applications. Fueled by creativity and coffee.
          <br/>When not building software, you&apos;ll find me perfecting the art of balancing innovation with efficiency.
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
        <Pattern className="opacity-[0.4]" cellClassName="border-cyan-900" mousePosition={mousePosition} />
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
                className="bg-purple-800 h-12 w-12"
              ></motion.div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

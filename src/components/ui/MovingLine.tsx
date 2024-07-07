"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export const MovingLine = () => {
  const transition = {
    duration: 14,
    ease: "easeInOut",
  };

  const ref = useRef<any>(null);

  // Track scroll progress, lies between 0 and 1.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  // when scroll progress reached 1, path length becomes 0.
  const pathLengthValue = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const PATH = "M0.5 0.980671L0.5 1566.02";
  return (
    <div
      className="max-w-6xl mx-auto flex flex-row space-x-10 items-start w-full "
      ref={ref}
    >
      <svg
        width="1"
        height="1134"
        viewBox="0 0 1 1134"
        fill="none"
        xmlns="http://www.w3.org/2000/svg1"
        className="flex-shrink-0"
      >
        <path d={PATH} stroke="url(#paint0_linear_207_38)" />
        <defs>
          <linearGradient
            id="paint0_linear_207_38"
            x1="1"
            y1="-102.823"
            x2="1"
            y2="1566.02"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3879E7" stopOpacity="0" />
            <stop offset="1" stopColor="#3879E7" />
          </linearGradient>
        </defs>
        <motion.path
          // animating pathLength value, goes from 1 to 0
          style={{
            pathLength: useSpring(pathLengthValue, {
              stiffness: 700,
              damping: 100,
            }),
          }}
          transition={transition}
          d={PATH}
          stroke="var(--blue-500)"
          strokeOpacity="1"
          strokeLinecap={"round"}
          strokeWidth="3"
        />
      </svg>
      <div className="flex flex-col w-full">
        <Content />

      </div>
    </div>
  );
};

{/* dummy content to fill up the screen */ }

export const Content = () => {
  return (
    <div>
      <div className="content w-full mb-10 ">
        <p className="text-2xl font-bold text-white  ">
          The path follows the scroll
        </p>
        <p className="text-base font-normal text-neutral-300  ">
          If you look closely, you can see the path is being animated.
        </p>
        <div className="flex space-x-4 w-full ">
          <a href="https://www.examplepage1.com" target="_blank" rel="noopener noreferrer" className="w-full h-40 md:h-96 rounded-md overflow-hidden mt-4">
            <img src="/youtube.jpeg" alt="Description 1" className="w-full h-full object-cover" />
          </a>
          <a href="https://www.examplepage2.com" target="_blank" rel="noopener noreferrer" className="w-full h-40 md:h-96 rounded-md overflow-hidden mt-4">
            <img src="/youtube.jpeg" alt="Description 2" className="w-full h-full object-cover" />
          </a>
        </div>
      </div>
      <div className="content w-full mb-10 ">
        <p className="text-2xl font-bold text-white  ">
          The path follows the scroll
        </p>
        <p className="text-base font-normal text-neutral-300  ">
          If you look closely, you can see the path is being animated.
        </p>
        <div className="flex space-x-4 w-full ">
          <a href="https://www.examplepage3.com" target="_blank" rel="noopener noreferrer" className="w-full h-40 md:h-96 rounded-md overflow-hidden mt-4">
            <img src="/youtube.jpeg" alt="Description 1" className="w-full h-full object-cover" />
          </a>
          <a href="https://www.examplepage4.com" target="_blank" rel="noopener noreferrer" className="w-full h-40 md:h-96 rounded-md overflow-hidden mt-4">
            <img src="/youtube.jpeg" alt="Description 2" className="w-full h-full object-cover" />
          </a>
        </div>
      </div>
    </div>
  );
};

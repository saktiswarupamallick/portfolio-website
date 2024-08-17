"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { twMerge } from "tailwind-merge";


export function TracingBeamDemo() {
  return (<> <h2 className="text-5xl text-center font-bold text-white mb-2">Welcome Back To My <span className="text-purple-500">Youtube Channel</span> </h2>
    <TracingBeam className="px-6">

      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4">
              {item.title}
            </p>

            <div className="text-sm text-white prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  </>

  );
}

const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
        I have created a comprehensive YouTube series where I guide viewers through the process of building
         a minimalistic SASS website. In this series, I utilize Next.js for the framework, Aceternity UI and ShadCN UI
          for the user interface components, and Tailwind CSS for the styling. The series covers everything from initial setup 
          to developing the complete website,
         providing a detailed and practical approach to modern web development...............<a  className="text-purple-500 text-lg font-semibold" href="https://www.youtube.com/watch?v=zzRw3hvtWNY">click here</a>
        </p>

      </>
    ),
    badge: "",
    image:
      "/youtube.png",
  },

  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
        Created a comprehensive YouTube video in collaboration with ZEGOCLOUD,
         showcasing the development of a video calling app using their SDKs. This paid partnership involved detailed 
        demonstration and step-by-step guidance on creating functional video calling features................<a  className="text-purple-500 text-lg font-semibold" href="https://www.youtube.com/watch?v=FCiHAGNtno4">click here</a>
        </p>
      </>
    ),
    badge: "",
    image:
      "/zego.jpeg",
  },
];


export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      // Reduce the SVG height to confine the light beam within the content area
      setSvgHeight(contentRef.current.offsetHeight - 200);
    }
  }, []);
  
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight - 50]), // Adjusted
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 250]), // Adjusted
    {
      stiffness: 500,
      damping: 90,
    }
  );
  

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full max-w-4xl mx-auto h-full", className)}
    >
      <div className="absolute -left-4 md:-left-20 top-3">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "white" : "var(--emerald-500)",
              borderColor:
                scrollYProgress.get() > 0 ? "white" : "var(--emerald-600)",
            }}
            className="h-2 w-2  rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight} // Set the SVG height
          className=" ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};

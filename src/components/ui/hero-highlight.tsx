"use client";
import { cn } from "../../app/utils/cn";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { GlobeDemo } from "./globedemo";

export function HeroHighlightDemo() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <HeroHighlight className="pb-24 w-full bg-slate-950">
      <div className="absolute z-[20] w-[70%] h-[60%] -left-[50%] rounded-full pink__gradient top-40" />
      <motion.div
        ref={sectionRef}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={isInView ? { opacity: 1, y: [20, -5, 0] } : {}}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16 w-full"
      >
        <div className="md:w-2/3">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={isInView ? { opacity: 1, y: [20, -5, 0] } : {}}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="flex items-center mb-12 space-x-4"
          >
            <span className="text-xl md:text-2xl lg:text-3xl font-black font-poppins text-indigo-600 leading-relaxed lg:leading-snug">01.</span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white dark:text-white leading-relaxed lg:leading-snug">
              Why Choose Me?
            </h1>
            <hr className="flex-grow border-t-2 border-white" />
          </motion.div>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white">
            With over 3 years of professional experience as a <Highlight>Software Development Engineer</Highlight>, I have played a pivotal role in my career journey, developing applications utilizing the <Highlight>MERN stack</Highlight> and overseeing the <Highlight>technical team</Highlight>. My leadership involves managing and executing projects, including creating <Highlight>Inventory Management Systems</Highlight> and <Highlight>productivity software</Highlight>. Collaborating with <Highlight>international clients</Highlight> has showcased my ability to navigate diverse and challenging projects while maintaining a commitment to <Highlight>excellence</Highlight> in technology. I have gained valuable <Highlight>insights and skills</Highlight>, adapting to various challenges and leading successful project executions.
          </p>
        </div>
        <div className="md:w-2/3 mt-8 md:mt-8 flex justify-center">
          <GlobeDemo />
        </div>
      </motion.div>
    </HeroHighlight>
  );
}

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "relative h-auto flex items-center bg-white dark:bg-black justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 pointer-events-none" />
      <motion.div
        className="pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <div className={cn("relative z-20 w-full", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};

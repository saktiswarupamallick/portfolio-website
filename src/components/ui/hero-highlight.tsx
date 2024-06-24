"use client";
import { cn } from "../../app/utils/cn";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { DockDemo } from "../magicui/dock";

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
    <HeroHighlight className="mt-[-200px] pb-24 w-full">
      <div className="absolute z-[0] w-[80%] h-[60%] -left-[50%] rounded-full pink__gradient top-40" />
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
        className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 md:px-8 lg:px-16 w-full"
      >
        <div className="md:w-2/3">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={isInView ? { opacity: 1, y: [20, -5, 0] } : {}}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug"
          >
            Why Choose Me?
          </motion.h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-neutral-700 dark:text-white">
            As a proficient <Highlight>MERN stack developer</Highlight> and skilled <Highlight>UI/UX designer</Highlight>, I bring a wealth of experience in crafting intuitive, visually appealing digital solutions. Additionally, my passion for teaching and sharing knowledge as a <Highlight>YouTube educator</Highlight> ensures that I not only build exceptional products but also empower others through education.
          </p>
          < DockDemo/>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0 md:ml-8 flex justify-center md:justify-end">
          <motion.img
            src="/certificate.jpg"
            alt="Profile Picture"
            className="w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-86 rounded-md object-cover"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          />
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
        "relative h-auto md:h-[40rem] flex items-center bg-white dark:bg-black justify-center w-full group",
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

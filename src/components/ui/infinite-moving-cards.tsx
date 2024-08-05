"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export function InfiniteMovingLogosDemo() {
  return (
    <div className="h-[10rem] rounded-md flex flex-col antialiased bg-slate-950 bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="absolute z-[0] w-[80%] h-[60%] -left-[50%] rounded-full blue__gradient top-40" />
     
     
      <InfiniteMovingLogos
        items={logos}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const logos = [
  '/js.png',
  '/tail.svg',
  '/ts.png',
  '/re.svg',
  '/next.svg',
  '/Nodejs.png',
  '/mongo.png',
  '/Express.png',
  '/Prisma.png',
  '/awslogo.png',
  '/tail.svg',
  '/mysql.png',

  
  
];

export const InfiniteMovingLogos = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: string[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-10 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((src, idx) => (
          <li
            className="w-[80px] h-[80px] flex-shrink-0"
            key={idx}
          >
            <img src={src} alt={`Logo ${idx + 1}`} className="w-full h-full object-contain" />
          </li>
        ))}
      </ul>
    </div>
  );
};

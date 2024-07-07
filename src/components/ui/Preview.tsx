import React from "react";
import Image from 'next/image';
import { IconContainer } from "./IconContainer";
import { Radar } from "./Radar";

const logos = [
  '/logos/logo1.png',
  '/logos/logo2.png',
  '/logos/logo3.png',
  '/logos/logo4.png',
  '/logos/logo5.png',
  '/logos/logo6.png',
  '/logos/logo7.png',
  '/logos/logo8.png',
  '/logos/logo9.png',
  '/logos/logo10.png',
];

export function Preview() {
  return (
    <div className="relative overflow-hidden bg-gray-100">
      <div className="absolute inset-0 flex items-center">
        <div className="flex space-x-8 animate-marquee whitespace-nowrap">
          {logos.concat(logos).map((src, index) => (
            <Image key={index} src={src} alt={`Tech Logo ${index}`} width={100} height={50} />
          ))}
        </div>
      </div>
    </div>
  );
}

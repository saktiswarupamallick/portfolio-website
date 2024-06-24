"use client";
import React ,{useState} from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../../app/utils/cn";
import { IconContainer } from "./IconContainer";
import { Radar } from "./Radar";



export function NavbarDemo() {
  return (
    <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
    <div className="mx-auto w-full max-w-3xl">
      <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
        <IconContainer text="Web Development" delay={0.2} />
        <IconContainer
          delay={0.4}
          text="Mobile apps"
          icon={<AiFillDollarCircle className=" h-8 w-8 text-slate-600" />}
        />
        <IconContainer
          text="Designing"
          delay={0.3}
          icon={<BsClipboardDataFill className=" h-8 w-8 text-slate-600" />}
        />
      </div>
    </div>
    <div className="mx-auto w-full max-w-md">
      <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
        <IconContainer
          text="Maintenence"
          delay={0.5}
          icon={<BiSolidReport className=" h-8 w-8 text-slate-600" />}
        />
        <IconContainer
          text="Server management"
          icon={
            <HiMiniDocumentArrowUp className=" h-8 w-8 text-slate-600" />
          }
          delay={0.8}
        />
      </div>
    </div>
    <div className="mx-auto w-full max-w-3xl">
      <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
        <IconContainer
          delay={0.6}
          text="GitHub Integration"
          icon={<HiDocumentReport className=" h-8 w-8 text-slate-600" />}
        />
        <IconContainer
          delay={0.7}
          text="CMS Integration"
          icon={<RiFilePaper2Fill className=" h-8 w-8 text-slate-600" />}
        />
      </div>
    </div>

    <Radar className="absolute -bottom-12" />
    <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
  </div>

  );
}
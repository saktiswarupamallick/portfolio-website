

import { NavbarDemo } from "../components/ui/navbar-menu";
import Image from "next/image";
import { BackgroundCellAnimation } from "../components/ui/BackgroundRippleEffect";

import { HeroHighlightDemo } from "@/components/ui/hero-highlight";
import { MovingLine } from "@/components/ui/MovingLine";

import { InfiniteMovingLogosDemo } from "@/components/ui/infinite-moving-cards";
import { PlaceholdersAndVanishInputDemo } from "@/components/ui/placeholders-and-vanish-input";
import { Preview } from "@/components/ui/Preview";


import RecentProjects from "@/components/RecentProjects";
import { TracingBeamDemo } from "@/components/ui/tracing-beam";




export default function Home() {
  return (
    <main className="bg-slate-950">

      < BackgroundCellAnimation />
      < HeroHighlightDemo />
      < InfiniteMovingLogosDemo/>
      <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full"> < RecentProjects /> </div>
      </main>
      <Preview />
      <TracingBeamDemo />
      <PlaceholdersAndVanishInputDemo />
    </main>
  );
}

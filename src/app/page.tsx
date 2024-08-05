

import { NavbarDemo } from "../components/ui/navbar-menu";
import Image from "next/image";
import { BackgroundCellAnimation } from "../components/ui/BackgroundRippleEffect";

import { HeroHighlightDemo } from "@/components/ui/hero-highlight";
import  { MovingLine } from "@/components/ui/MovingLine";

import { InfiniteMovingCardsDemo } from "@/components/ui/infinite-moving-cards";
import { PlaceholdersAndVanishInputDemo } from "@/components/ui/placeholders-and-vanish-input";
import { Preview } from "@/components/ui/Preview";


import RecentProjects from "@/components/RecentProjects";
import { TracingBeamDemo } from "@/components/ui/tracing-beam";




export default function Home() {
  return (
    <main className="bg-slate-950">
   
      < BackgroundCellAnimation />
      < HeroHighlightDemo />
      
      < RecentProjects />
      <Preview />
      <TracingBeamDemo />
     
     
      <PlaceholdersAndVanishInputDemo />
    </main>
  );
}

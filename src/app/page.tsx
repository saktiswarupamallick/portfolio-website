

import { NavbarDemo } from "../components/ui/navbar-menu";
import Image from "next/image";
import { BackgroundCellAnimation } from "../components/ui/BackgroundRippleEffect";

import { HeroHighlightDemo } from "@/components/ui/hero-highlight";
import Youtube from "@/components/youtube";
import Youtubesec from "@/components/youtubesec";
import { InfiniteMovingCardsDemo } from "@/components/ui/infinite-moving-cards";
import { PlaceholdersAndVanishInputDemo } from "@/components/ui/placeholders-and-vanish-input";
import { Preview } from "@/components/ui/Preview";




export default function Home() {
  return (
    <main className="bg-slate-950">
      < NavbarDemo />
      < BackgroundCellAnimation />
      < HeroHighlightDemo />
      <Preview />
      <Youtube />
      <Youtubesec />
      < InfiniteMovingCardsDemo />
      <PlaceholdersAndVanishInputDemo />
    </main>
  );
}

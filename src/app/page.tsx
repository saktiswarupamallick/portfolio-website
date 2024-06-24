

import { NavbarDemo } from "../components/ui/navbar-menu";
import Image from "next/image";
import { BackgroundCellAnimation } from "../components/ui/BackgroundRippleEffect";

import { HeroHighlightDemo } from "@/components/ui/hero-highlight";
import Youtube from "@/components/youtube";
import Youtubesec from "@/components/youtubesec";
import { InfiniteMovingCardsDemo } from "@/components/ui/infinite-moving-cards";
import { PlaceholdersAndVanishInputDemo } from "@/components/ui/placeholders-and-vanish-input";




export default function Home() {
  return (
    <main >
      < NavbarDemo />
      < BackgroundCellAnimation />
      < HeroHighlightDemo />
   
      <Youtube />
      <Youtubesec />
      < InfiniteMovingCardsDemo />

      
    </main>
  );
}

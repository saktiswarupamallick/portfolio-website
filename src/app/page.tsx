

import { NavbarDemo } from "../components/ui/navbar-menu";
import Image from "next/image";
import { BackgroundCellAnimation } from "@/components/ui/BackgroundRippleEffect";
import { StickyScrollRevealDemo } from "@/components/ui/sticky-scroll-reveal";
import { HeroHighlightDemo } from "@/components/ui/hero-highlight";
import Youtube from "@/components/youtube";
import Youtubesec from "@/components/youtubesec";


export default function Home() {
  return (
    <main >
      
      <Youtube />
      <Youtubesec />

      
    </main>
  );
}

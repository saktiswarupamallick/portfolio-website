

import { NavbarDemo } from "../components/ui/navbar-menu";
import Image from "next/image";
import { BackgroundCellAnimation } from "@/components/ui/BackgroundRippleEffect";
import { StickyScrollRevealDemo } from "@/components/ui/sticky-scroll-reveal";


export default function Home() {
  return (
    <main >
      <NavbarDemo />
      <BackgroundCellAnimation />
      <StickyScrollRevealDemo />
      
    </main>
  );
}



import { NavbarDemo } from "../components/ui/navbar-menu";
import Image from "next/image";
import { BackgroundCellAnimation } from "@/components/ui/BackgroundRippleEffect";
import { OrbitingCirclesDemo } from "@/components/magicui/orbiting-circles";

export default function Home() {
  return (
    <main >
      <NavbarDemo />
      <BackgroundCellAnimation />
      <OrbitingCirclesDemo/>
    </main>
  );
}

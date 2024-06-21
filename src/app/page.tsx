

import { NavbarDemo } from "../components/ui/navbar-menu";
import Image from "next/image";
import { BackgroundCellAnimation } from "@/components/ui/BackgroundRippleEffect";

export default function Home() {
  return (
    <main >
      <NavbarDemo />
      <BackgroundCellAnimation />
    </main>
  );
}

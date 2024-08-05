
import Navbar from "../components/ui/navbar-menu";
import Image from "next/image";
import { BackgroundCellAnimation } from "../components/ui/BackgroundRippleEffect";
import { HeroHighlightDemo } from "@/components/ui/hero-highlight";
import { InfiniteMovingLogosDemo } from "@/components/ui/infinite-moving-cards";
import { Preview } from "@/components/ui/Preview";
import RecentProjects from "@/components/RecentProjects";
import { TracingBeamDemo } from "@/components/ui/tracing-beam";
import Footer from "@/components/ui/Footer";




export default function Home() {
  return (
    <main className="bg-slate-950">
      < Navbar/>
      < BackgroundCellAnimation />
      < HeroHighlightDemo />
      < InfiniteMovingLogosDemo/>
      <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full"> < RecentProjects /> </div>
      </main>
      <Preview />
      <TracingBeamDemo />
      < Footer />
    </main>
  );
}

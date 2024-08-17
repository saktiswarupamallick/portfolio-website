
import Navbar from "../components/ui/navbar-menu";
import Image from "next/image";
import { BackgroundCellAnimation } from "../components/ui/BackgroundRippleEffect";
import { HeroHighlightDemo } from "@/components/ui/hero-highlight";
import { InfiniteMovingLogosDemo } from "@/components/ui/infinite-moving-cards";
import { Preview } from "@/components/ui/Preview";
import RecentProjects from "@/components/RecentProjects";
import { TracingBeamDemo } from "@/components/ui/tracing-beam";
import Footer from "@/components/ui/Footer";
import { CompareDemo } from "@/components/ui/compare";
import { CardSpotlightDemo } from "@/components/ui/card-spotlight";
import { MacbookScrollDemo } from "@/components/ui/macbook-scroll";
import { AppleCardsCarouselDemo } from "@/components/ui/apple-cards-carousel";




export default function Home() {
  return (
    <main className="bg-slate-950">
      < Navbar />
      < BackgroundCellAnimation />
      <MacbookScrollDemo />
      < HeroHighlightDemo />
      <CompareDemo />
      < InfiniteMovingLogosDemo />
      <AppleCardsCarouselDemo />
      <Preview />
      <TracingBeamDemo />
      < Footer />
    </main>
  );
}

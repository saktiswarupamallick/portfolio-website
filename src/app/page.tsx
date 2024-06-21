import {BackgroundCellAnimation} from "../components/ui/BackgroundRippleEffect"
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import { NavbarDemo } from "@/components/navbar";
import Image from "next/image";

const content = [
 
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/mypic.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/certificate.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },


];

export default function Home() {
  return (
    <main >
      <NavbarDemo />
     < BackgroundCellAnimation />
     <div className="mt-[-250px]">
      <StickyScroll content={content} />
    </div>
    </main>
  );
}

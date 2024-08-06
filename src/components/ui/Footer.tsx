import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl md:text-5xl text-center text-white lg:max-w-[45vw]">
          Let&apos;s Elevate <span className="text-purple-500">Your</span> Online Presence
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center text-white">
          Contact me today to discuss how we can work together to achieve your digital goals.
        </p>
        <a href="mailto:saktiswarupamallick@gmail.com">
          <MagicButton
            title="Contact Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 sakti
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-xl border border-black-300"
            ><a href={info.href}> <img src={info.img} alt="icons" width={30} height={30} /></a>
             
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

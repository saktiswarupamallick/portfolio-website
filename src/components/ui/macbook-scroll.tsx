"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    IconBrightnessDown,
    IconBrightnessUp,
    IconCaretRightFilled,
    IconCaretUpFilled,
    IconChevronUp,
    IconMicrophone,
    IconMoon,
    IconPlayerSkipForward,
    IconPlayerTrackNext,
    IconPlayerTrackPrev,
    IconTable,
    IconVolume,
    IconVolume2,
    IconVolume3,
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconCommand } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { IconCaretDownFilled } from "@tabler/icons-react";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";

import Image from "next/image";

import { FaApple } from "react-icons/fa";

import Link from "next/link";

export function MacbookScrollDemo() {
    return (
        <div className="overflow-hidden p-6 dark:bg-slate-950 bg-slate-950 mt-[-600px] w-full">
            <MacbookScroll

                badge={
                    <Link href="https://github.com/saktiswarupamallick">
                        <IconBrandGithubFilled  style={{ width: "64px", height: "64px"}} className="text-black" />
                    </Link>
                }
                src={`/linear.webp`}
                showGradient={false}
            />
        </div>
    );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
                fill="#00AA45"
            ></path>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
                fill="#219653"
            ></path>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
                fill="#24292E"
            ></path>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
                fill="white"
            ></path>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
                fill="#24292E"
            ></path>
        </svg>
    );
};


export const MacbookScroll = ({
    src,
    showGradient,
    title,
    badge,
}: {
    src?: string;
    showGradient?: boolean;
    title?: string | React.ReactNode;
    badge?: React.ReactNode;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window && window.innerWidth < 768) {
            setIsMobile(true);
        }
    }, []);

    const scaleX = useTransform(
        scrollYProgress,
        [0, 0.3],
        [1.2, isMobile ? 1 : 1.5]
    );
    const scaleY = useTransform(
        scrollYProgress,
        [0, 0.3],
        [0.6, isMobile ? 1 : 1.5]
    );
    const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
    const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
    const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div
            ref={ref}
            className="min-h-[250vh] flex flex-col items-center py-0 md:py-80 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100 scale-[0.5] sm:scale-75"
        >
            <motion.h2
                style={{
                    translateY: textTransform,
                    opacity: textOpacity,
                }}
                className="dark:text-white text-neutral-800 text-3xl font-bold mb-20 text-center"
            >
                {title || (
                    <span>
                        .
                    </span>
                )}
            </motion.h2>
            {/* Lid */}
            <Lid
                src={src}
                scaleX={scaleX}
                scaleY={scaleY}
                rotate={rotate}
                translate={translate}
            />
            {/* Base area */}
            <div className="h-[22rem] w-[40rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10">
                {/* above keyboard bar */}
                <div className="h-10 w-full relative">
                    <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
                </div>
                <div className="flex relative">
                    <div className="mx-auto w-[10%] overflow-hidden  h-full">
                        <SpeakerGrid />
                    </div>
                    <div className="mx-auto w-[80%] h-full">
                        <Keypad />
                    </div>
                    <div className="mx-auto w-[10%] overflow-hidden  h-full">
                        <SpeakerGrid />
                    </div>
                </div>
                <Trackpad />
                <div className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
                {showGradient && (
                    <div className="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t dark:from-black from-white via-white dark:via-black to-transparent z-50"></div>
                )}
                {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
            </div>
        </div>
    );
};


export const Lid = ({
    scaleX,
    scaleY,
    rotate,
    translate,
    src,
}: {
    scaleX: MotionValue<number>;
    scaleY: MotionValue<number>;
    rotate: MotionValue<number>;
    translate: MotionValue<number>;
    src?: string;
}) => {
    return (
        <div className="relative [perspective:800px]">
            <div
                style={{
                    transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
                    transformOrigin: "bottom",
                    transformStyle: "preserve-3d",
                }}
                className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
            >
                <div
                    style={{
                        boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
                    }}
                    className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
                >
                    <span className="text-white">
                        <IconBrandGithub size={48} />
                    </span>
                </div>
            </div>
            <motion.div
                style={{
                    scaleX: scaleX,
                    scaleY: scaleY,
                    rotateX: rotate,
                    translateY: translate,
                    transformStyle: "preserve-3d",
                    transformOrigin: "top",
                }}
                className="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2"
            >
                <div className="absolute inset-0 bg-[#272729] rounded-lg" />
                <Image
                    src="/macbook.png"
                    alt="aceternity logo"
                    fill
                    className="object-cover object-left-top absolute rounded-lg inset-0 h-full w-full"
                />
            </motion.div>
        </div>
    );
};

export const Trackpad = () => {
    return (
        <div
            className="w-[40%] mx-auto h-32  rounded-xl my-1"
            style={{
                boxShadow: "0px 0px 1px 1px #00000020 inset",
            }}
        ></div>
    );
};

export const Keypad = () => {
    return (
        <div className="h-full rounded-md bg-[#050505] mx-1 p-1">
            {/* First Row */}
            <Row>
                <KBtn
                    className="w-10 items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start"
                >
                    esc
                </KBtn>
                <KBtn>
                    <IconBrightnessDown className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F1</span>
                </KBtn>

                <KBtn>
                    <IconBrightnessUp className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F2</span>
                </KBtn>
                <KBtn>
                    <IconTable className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F3</span>
                </KBtn>
                <KBtn>
                    <IconSearch className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F4</span>
                </KBtn>
                <KBtn>
                    <IconMicrophone className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F5</span>
                </KBtn>
                <KBtn>
                    <IconMoon className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F6</span>
                </KBtn>
                <KBtn>
                    <IconPlayerTrackPrev className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F7</span>
                </KBtn>
                <KBtn>
                    <IconPlayerSkipForward className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F8</span>
                </KBtn>
                <KBtn>
                    <IconPlayerTrackNext className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F8</span>
                </KBtn>
                <KBtn>
                    <IconVolume3 className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F10</span>
                </KBtn>
                <KBtn>
                    <IconVolume2 className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F11</span>
                </KBtn>
                <KBtn>
                    <IconVolume className="h-[6px] w-[6px]" />
                    <span className="inline-block mt-1">F12</span>
                </KBtn>
                <KBtn>
                    <div className="h-4 w-4 rounded-full  bg-gradient-to-b from-20% from-neutral-900 via-black via-50% to-neutral-900 to-95% p-px">
                        <div className="bg-black h-full w-full rounded-full" />
                    </div>
                </KBtn>
            </Row>

            {/* Second row */}
            <Row>
                <KBtn>
                    <span className="block">~</span>
                    <span className="block mt-1">`</span>
                </KBtn>

                <KBtn>
                    <span className="block ">!</span>
                    <span className="block">1</span>
                </KBtn>
                <KBtn>
                    <span className="block">@</span>
                    <span className="block">2</span>
                </KBtn>
                <KBtn>
                    <span className="block">#</span>
                    <span className="block">3</span>
                </KBtn>
                <KBtn>
                    <span className="block">$</span>
                    <span className="block">4</span>
                </KBtn>
                <KBtn>
                    <span className="block">%</span>
                    <span className="block">5</span>
                </KBtn>
                <KBtn>
                    <span className="block">^</span>
                    <span className="block">6</span>
                </KBtn>
                <KBtn>
                    <span className="block">&</span>
                    <span className="block">7</span>
                </KBtn>
                <KBtn>
                    <span className="block">*</span>
                    <span className="block">8</span>
                </KBtn>
                <KBtn>
                    <span className="block">(</span>
                    <span className="block">9</span>
                </KBtn>
                <KBtn>
                    <span className="block">)</span>
                    <span className="block">0</span>
                </KBtn>
                <KBtn>
                    <span className="block">&mdash;</span>
                    <span className="block">_</span>
                </KBtn>
                <KBtn>
                    <span className="block">+</span>
                    <span className="block"> = </span>
                </KBtn>
                <KBtn
                    className="w-10 items-end justify-end pr-[4px] pb-[2px]"
                    childrenClassName="items-end"
                >
                    delete
                </KBtn>
            </Row>

            {/* Third row */}
            <Row>
                <KBtn
                    className="w-10 items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start"
                >
                    tab
                </KBtn>
                <KBtn>
                    <span className="block">Q</span>
                </KBtn>

                <KBtn>
                    <span className="block">W</span>
                </KBtn>
                <KBtn>
                    <span className="block">E</span>
                </KBtn>
                <KBtn>
                    <span className="block">R</span>
                </KBtn>
                <KBtn>
                    <span className="block">T</span>
                </KBtn>
                <KBtn>
                    <span className="block">Y</span>
                </KBtn>
                <KBtn>
                    <span className="block">U</span>
                </KBtn>
                <KBtn>
                    <span className="block">I</span>
                </KBtn>
                <KBtn>
                    <span className="block">O</span>
                </KBtn>
                <KBtn>
                    <span className="block">P</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`{`}</span>
                    <span className="block">{`[`}</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`}`}</span>
                    <span className="block">{`]`}</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`|`}</span>
                    <span className="block">{`\\`}</span>
                </KBtn>
            </Row>

            {/* Fourth Row */}
            <Row>
                <KBtn
                    className="w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start"
                >
                    caps lock
                </KBtn>
                <KBtn>
                    <span className="block">A</span>
                </KBtn>

                <KBtn>
                    <span className="block">S</span>
                </KBtn>
                <KBtn>
                    <span className="block">D</span>
                </KBtn>
                <KBtn>
                    <span className="block">F</span>
                </KBtn>
                <KBtn>
                    <span className="block">G</span>
                </KBtn>
                <KBtn>
                    <span className="block">H</span>
                </KBtn>
                <KBtn>
                    <span className="block">J</span>
                </KBtn>
                <KBtn>
                    <span className="block">K</span>
                </KBtn>
                <KBtn>
                    <span className="block">L</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`:`}</span>
                    <span className="block">{`;`}</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`"`}</span>
                    <span className="block">{`'`}</span>
                </KBtn>
                <KBtn
                    className="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]"
                    childrenClassName="items-end"
                >
                    return
                </KBtn>
            </Row>

            {/* Fifth Row */}
            <Row>
                <KBtn
                    className="w-[3.65rem] items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start"
                >
                    shift
                </KBtn>
                <KBtn>
                    <span className="block">Z</span>
                </KBtn>
                <KBtn>
                    <span className="block">X</span>
                </KBtn>
                <KBtn>
                    <span className="block">C</span>
                </KBtn>
                <KBtn>
                    <span className="block">V</span>
                </KBtn>
                <KBtn>
                    <span className="block">B</span>
                </KBtn>
                <KBtn>
                    <span className="block">N</span>
                </KBtn>
                <KBtn>
                    <span className="block">M</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`<`}</span>
                    <span className="block">{`,`}</span>
                </KBtn>
                <KBtn>
                    <span className="block">{`>`}</span>
                    <span className="block">{`.`}</span>
                </KBtn>{" "}
                <KBtn>
                    <span className="block">{`?`}</span>
                    <span className="block">{`/`}</span>
                </KBtn>
                <KBtn
                    className="w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]"
                    childrenClassName="items-end"
                >
                    shift
                </KBtn>
            </Row>

            {/* sixth Row */}
            <Row>
                <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
                    <div className="flex justify-end w-full pr-1">
                        <span className="block">fn</span>
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <IconWorld className="h-[6px] w-[6px]" />
                    </div>
                </KBtn>
                <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
                    <div className="flex justify-end w-full pr-1">
                        <IconChevronUp className="h-[6px] w-[6px]" />
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <span className="block">control</span>
                    </div>
                </KBtn>
                <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
                    <div className="flex justify-end w-full pr-1">
                        <OptionKey className="h-[6px] w-[6px]" />
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <span className="block">option</span>
                    </div>
                </KBtn>
                <KBtn
                    className="w-8"
                    childrenClassName="h-full justify-between py-[4px]"
                >
                    <div className="flex justify-end w-full pr-1">
                        <IconCommand className="h-[6px] w-[6px]" />
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <span className="block">command</span>
                    </div>
                </KBtn>
                <KBtn className="w-[8.2rem]"></KBtn>
                <KBtn
                    className="w-8"
                    childrenClassName="h-full justify-between py-[4px]"
                >
                    <div className="flex justify-start w-full pl-1">
                        <IconCommand className="h-[6px] w-[6px]" />
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <span className="block">command</span>
                    </div>
                </KBtn>
                <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
                    <div className="flex justify-start w-full pl-1">
                        <OptionKey className="h-[6px] w-[6px]" />
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <span className="block">option</span>
                    </div>
                </KBtn>
                <div className="w-[4.9rem] mt-[2px] h-6 p-[0.5px] rounded-[4px] flex flex-col justify-end items-center">
                    <KBtn className="w-6 h-3">
                        <IconCaretUpFilled className="h-[6px] w-[6px]" />
                    </KBtn>
                    <div className="flex">
                        <KBtn className="w-6 h-3">
                            <IconCaretLeftFilled className="h-[6px] w-[6px]" />
                        </KBtn>
                        <KBtn className="w-6 h-3">
                            <IconCaretDownFilled className="h-[6px] w-[6px]" />
                        </KBtn>
                        <KBtn className="w-6 h-3">
                            <IconCaretRightFilled className="h-[6px] w-[6px]" />
                        </KBtn>
                    </div>
                </div>
            </Row>
        </div>
    );
};
export const KBtn = ({
    className,
    children,
    childrenClassName,
    backlit = true,
}: {
    className?: string;
    children?: React.ReactNode;
    childrenClassName?: string;
    backlit?: boolean;
}) => {
    return (
        <div
            className={cn(
                "p-[0.5px] rounded-[4px]",
                backlit && "bg-white/[0.2] shadow-xl shadow-white"
            )}
        >
            <div
                className={cn(
                    "h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center",
                    className
                )}
                style={{
                    boxShadow:
                        "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
                }}
            >
                <div
                    className={cn(
                        "text-neutral-200 text-[5px] w-full flex justify-center items-center flex-col",
                        childrenClassName,
                        backlit && "text-white"
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export const Row = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
            {children}
        </div>
    );
};

export const SpeakerGrid = () => {
    return (
        <div
            className="flex px-[0.5px] gap-[2px] mt-2 h-40"
            style={{
                backgroundImage:
                    "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
                backgroundSize: "3px 3px",
            }}
        ></div>
    );
};

export const OptionKey = ({ className }: { className: string }) => {
    return (
        <svg
            fill="none"
            version="1.1"
            id="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className={className}
        >
            <rect
                stroke="currentColor"
                strokeWidth={2}
                x="18"
                y="5"
                width="10"
                height="2"
            />
            <polygon
                stroke="currentColor"
                strokeWidth={2}
                points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
            />
            <rect
                id="_Transparent_Rectangle_"
                className="st0"
                width="32"
                height="32"
                stroke="none"
            />
        </svg>
    );
};

const AceternityLogo = () => {
    return (
        <svg
            width="66"
            height="65"
            viewBox="0 0 66 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-white"
        >
            <path
                d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                stroke="currentColor"
                strokeWidth="15"
                strokeMiterlimit="3.86874"
                strokeLinecap="round"
            />
        </svg>
    );
};

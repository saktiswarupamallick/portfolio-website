"use client";
import React, {
    useEffect,
    useRef,
    useState,
    createContext,
    useContext,
} from "react";
import {
    IconArrowNarrowLeft,
    IconArrowNarrowRight,
    IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "../../hooks/use-outside-click";

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full pt-20 py-20">
            <h2 className="max-w-7xl pl-4 pt-20 mx-auto text-xl md:text-5xl font-bold text-white dark:text-neutral-200 font-sans">
                Leading-Edge  <span className="text-purple-500">Project Initiatives</span>
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent1 = () => {
    return (
        <>
            {/* Section 1 */}
            <div className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
                <p className="text-neutral-400 text-base mb-15 md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-200">
                        Morsystems Saas Landing
                    </span>{" "}
                    This project is a responsive and visually appealing SaaS-themed landing page built using React and Tailwind CSS. The page features smooth animations powered by Framer Motion
                    and showcases various SaaS products through custom images
                    designed in Canva. The focus is on delivering a clean, light-themed interface that enhances user experience.
                    <a className="text-purple-500 text-lg font-semibold" href="https://morsystems.netlify.app">click here</a>
                </p>
                <Image
                    src="/project2.png"
                    alt="Morsystems"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full pt-20 rounded-lg mx-auto object-contain"
                />
            </div>

            {/* Section 2 */}
            <div className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
                <p className="text-neutral-400 text-base mb-15 md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-200">
                       Zeiko Saas Landing Page
                    </span>{" "}
                    Created a minimalistic website for my YouTube channel using Next.js, TypeScript, Tailwind CSS, Framer Motion, and ShadCN UI. This site features a sleek, dark-themed design that enhances visual appeal and user experience. The use of these modern technologies ensures a 
                    responsive and performant site, with smooth animations and a clean, intuitive interface.
                    <a className="text-purple-500 text-lg font-semibold" href="https://zeiko.netlify.app">click here</a>
                </p>
                <Image
                    src="/project1.png"
                    alt="Another Project"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full pt-20 rounded-lg mx-auto object-contain"
                />
            </div>
        </>
    );
};


const DummyContent2 = () => {
    return (
        <>
            {[...new Array(1).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-200">
                                Productivity Management Software-Proddy
                            </span>{" "}
                            I led the development of a cutting-edge SaaS platform using Next.js 13, achieving a 20% performance improvement over
                            industry benchmarks. By implementing real-time collaborative editing, user engagement increased by 30%. Integrating
                            Stripe reduced transaction processing time by 25%, ensuring seamless payments. Utilizing Drizzle ORM and Supabase
                            optimized database interactions, cutting query response times by 40% and boosting overall performance. The
                            incorporation of socket technology enhanced user experience, contributing to a 35% increase in user retention and
                            distinguishing the application as a modern productivity tool.
                            <a className="text-purple-500 text-lg font-semibold" href="https://drive.google.com/drive/folders/1HleARyhulMtQSbfwylvKTgMWRutNt4sE?usp=sharing">click here</a>
                        </p>
                        <Image
                            src="/project3.png"
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full pt-20 mx-auto object-contain"
                        />
                    </div>
                );
            })}
        </>
    );
};
const DummyContent3 = () => {
    return (
        <>
            {[...new Array(1).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold rounded-lg text-neutral-700 dark:text-neutral-200">
                                Coming Soon
                            </span>{" "}

                        </p>
                        <Image
                            src="/comming.png"
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 pt-20 h-full w-full mx-auto object-contain"
                        />
                    </div>
                );
            })}
        </>
    );
};

const data = [
    {
        category: "Frontend Development",
        title: "Saas landing Page",
        src: "/appback1.jpg",
        content: <DummyContent1 />,
    },
    {
        category: "Full Stack Development",
        title: "Saas Product",
        src: "/appback2.jpg",
        content: <DummyContent2 />,
    },
    {
        category: "Full Stack Development",
        title: "Fintech",
        src: "/appback3.jpg",
        content: <DummyContent3 />,
    },




];

interface CarouselProps {
    items: JSX.Element[];
    initialScroll?: number;
}

type Card = {
    src: string;
    title: string;
    category: string;
    content: React.ReactNode;
};

export const CarouselContext = createContext<{
    onCardClose: (index: number) => void;
    currentIndex: number;
}>({
    onCardClose: () => { },
    currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const handleCardClose = (index: number) => {
        if (carouselRef.current) {
            const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
            const gap = isMobile() ? 4 : 8;
            const scrollPosition = (cardWidth + gap) * (index + 1);
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    const isMobile = () => {
        return window && window.innerWidth < 768;
    };

    return (
        <CarouselContext.Provider
            value={{ onCardClose: handleCardClose, currentIndex }}
        >
            <div className="relative w-full">
                <div
                    className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
                    ref={carouselRef}
                    onScroll={checkScrollability}
                >
                    <div
                        className={cn(
                            "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
                        )}
                    ></div>

                    <div
                        className={cn(
                            "flex flex-row justify-start gap-4 pl-4",
                            "max-w-7xl mx-auto" // remove max-w-4xl if you want the carousel to span the full width of its container
                        )}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.2 * index,
                                        ease: "easeOut",
                                        once: true,
                                    },
                                }}
                                key={"card" + index}
                                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end gap-2 mr-10">
                    <button
                        className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                    >
                        <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
                    </button>
                    <button
                        className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                    >
                        <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
                    </button>
                </div>
            </div>
        </CarouselContext.Provider>
    );
};

export const Card = ({
    card,
    index,
    layout = false,
}: {
    card: Card;
    index: number;
    layout?: boolean;
}) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { onCardClose, currentIndex } = useContext(CarouselContext);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                handleClose();
            }
        }

        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    useOutsideClick(containerRef, () => handleClose());

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        onCardClose(index);
    };

    return (
        <div >
            <AnimatePresence >
                {open && (
                    <div className="fixed  border border-white inset-0 h-screen z-50 overflow-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            ref={containerRef}
                            layoutId={layout ? `card-${card.title}` : undefined}
                            className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
                        >
                            <button
                                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                                onClick={handleClose}
                            >
                                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
                            </button>
                            <motion.p
                                layoutId={layout ? `category-${card.title}` : undefined}
                                className="text-base font-medium text-black dark:text-white"
                            >
                                {card.category}
                            </motion.p>
                            <motion.p
                                layoutId={layout ? `title-${card.title}` : undefined}
                                className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
                            >
                                {card.title}
                            </motion.p>
                            <div className="py-10">{card.content}</div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            <motion.button
                layoutId={layout ? `card-${card.title}` : undefined}
                onClick={handleOpen}
                className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
            >
                <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
                <div className="relative z-40 p-8">
                    <motion.p
                        layoutId={layout ? `category-${card.category}` : undefined}
                        className="text-white text-sm md:text-base font-medium font-sans text-left"
                    >
                        {card.category}
                    </motion.p>
                    <motion.p
                        layoutId={layout ? `title-${card.title}` : undefined}
                        className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
                    >
                        {card.title}
                    </motion.p>
                </div>
                <BlurImage
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover absolute z-10 inset-0"
                />
            </motion.button>
        </div>
    );
};

export const BlurImage = ({
    height,
    width,
    src,
    className,
    alt,
    ...rest
}: ImageProps) => {
    const [isLoading, setLoading] = useState(true);
    return (
        <Image
            className={cn(
                "transition duration-300",
                isLoading ? "blur-sm" : "blur-0",
                className
            )}
            onLoad={() => setLoading(false)}
            src={src}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            blurDataURL={typeof src === "string" ? src : undefined}
            alt={alt ? alt : "Background of a beautiful view"}
            {...rest}
        />
    );
};

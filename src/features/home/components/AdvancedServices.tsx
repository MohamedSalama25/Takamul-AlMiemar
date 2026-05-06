"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/shared/lib/cn";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceItem {
    title: string;
    desc: string;
    highlights: string[];
    images: string[];
}

interface AdvancedServicesProps {
    dict: {
        title: string;
        subtitle: string;
        items: ServiceItem[];
    };
    isRtl?: boolean;
}

export default function AdvancedServices({ dict, isRtl = true }: AdvancedServicesProps) {
    const [activeIdx, setActiveIdx] = useState(0);
    const [progressValue, setProgressValue] = useState(0);
    const [imageIdx, setImageIdx] = useState(0);
    const isPausedRef = useRef(false);

    const DURATION_PER_CATEGORY = 6000; // 6 seconds per category
    const DURATION_PER_IMAGE = 3000; // 3 seconds per image
    const UPDATE_INTERVAL = 50;

    useEffect(() => {
        let elapsed = 0;
        let imageElapsed = 0;

        const interval = setInterval(() => {
            if (isPausedRef.current) return;

            elapsed += UPDATE_INTERVAL;
            imageElapsed += UPDATE_INTERVAL;

            // Update category progress
            const categoryProgressFraction = Math.min(elapsed / DURATION_PER_CATEGORY, 1);
            const startPercentage = (activeIdx / (dict.items.length - 1)) * 100;
            const percentageToFill = (1 / (dict.items.length - 1)) * 100;
            const newTotalProgress = startPercentage + (percentageToFill * categoryProgressFraction);
            setProgressValue(Math.min(newTotalProgress, 100));

            // Update image index for active category
            const currentItem = dict.items[activeIdx];
            if (currentItem.images.length > 1 && currentItem.images.length !== 5 && imageElapsed >= DURATION_PER_IMAGE) {
                setImageIdx((prev) => (prev + 1) % currentItem.images.length);
                imageElapsed = 0;
            }

            if (elapsed >= DURATION_PER_CATEGORY) {
                setActiveIdx((current) => (current + 1) % dict.items.length);
                setImageIdx(0);
                elapsed = 0;
                imageElapsed = 0;
            }
        }, UPDATE_INTERVAL);

        return () => clearInterval(interval);
    }, [activeIdx, dict.items.length]);

    const activeItem = dict.items[activeIdx];

    return (
        <section className="py-32 bg-background overflow-hidden relative" id="professional-services">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header Section */}
                <div className={cn("mb-20", isRtl ? "text-right" : "text-left")}>
                    <div className="inline-block max-w-3xl">
                        <h2 className="relative text-4xl md:text-6xl font-bold text-on-background pb-6 inline-block font-headline tracking-tighter">
                            {dict.title}
                            <span className={cn(
                                "absolute bottom-0 h-1 w-32 md:w-48 rounded-full",
                                isRtl
                                    ? "right-0 bg-gradient-to-l from-tertiary to-transparent"
                                    : "left-0 bg-gradient-to-r from-tertiary to-transparent"
                            )}></span>
                        </h2>
                        <p className="mt-8 text-on-surface-variant text-xl md:text-2xl font-light leading-relaxed italic">
                            {dict.subtitle}
                        </p>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch min-h-[550px]">
                    {/* Featured Image Area */}
                    <div className="w-full lg:w-2/3 order-2 lg:order-1 relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 bg-surface-container-low min-h-[450px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIdx}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.8, ease: "circOut" }}
                                className="absolute inset-0"
                            >
                                {activeItem.images.length === 5 ? (
                                    /* Mosaic 5-Image Grid */
                                    <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 gap-2 h-full w-full p-2">
                                        {/* Row 1 / Col 1&2 (Smalls on Left in LTR, Smalls on Right in RTL?) 
                                            Actually, user's screenshot shows Large on the RIGHT. 
                                            So in RTL, Large is on Left? No, usually RTL mirrors everything. 
                                            Let's look at boxes: Smalls on Left, Large on Right.
                                        */}
                                        <div className={cn(
                                            "relative rounded-xl overflow-hidden group/img",
                                            isRtl ? "lg:col-span-2 lg:row-span-2 lg:order-1" : "lg:col-span-2 lg:row-span-2 lg:order-2 lg:col-start-3"
                                        )}>
                                            <Image src={activeItem.images[0]} alt={activeItem.title} fill className="object-cover transition-transform duration-700 group-hover/img:scale-110 grayscale hover:grayscale-0" />
                                        </div>

                                        {/* Smalls */}
                                        <div className={cn("relative rounded-xl overflow-hidden group/img", isRtl ? "lg:order-2" : "lg:order-1")}>
                                            <Image src={activeItem.images[1]} alt={activeItem.title} fill className="object-cover transition-transform duration-700 group-hover/img:scale-110 grayscale hover:grayscale-0" />
                                        </div>
                                        <div className={cn("relative rounded-xl overflow-hidden group/img", isRtl ? "lg:order-3" : "lg:order-1")}>
                                            <Image src={activeItem.images[2]} alt={activeItem.title} fill className="object-cover transition-transform duration-700 group-hover/img:scale-110 grayscale hover:grayscale-0" />
                                        </div>
                                        <div className={cn("relative rounded-xl overflow-hidden group/img", isRtl ? "lg:order-4" : "lg:order-1")}>
                                            <Image src={activeItem.images[3]} alt={activeItem.title} fill className="object-cover transition-transform duration-700 group-hover/img:scale-110 grayscale hover:grayscale-0" />
                                        </div>
                                        <div className={cn("relative rounded-xl overflow-hidden group/img", isRtl ? "lg:order-5" : "lg:order-1")}>
                                            <Image src={activeItem.images[4]} alt={activeItem.title} fill className="object-cover transition-transform duration-700 group-hover/img:scale-110 grayscale hover:grayscale-0" />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="absolute inset-0">
                                        <Image
                                            fill
                                            src={activeItem.images[imageIdx]}
                                            alt={activeItem.title}
                                            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                            sizes="(max-width: 1024px) 100vw, 75vw"
                                        />
                                    </div>
                                )}

                                {/* Overlay Gradient */}
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>

                                {/* Content Overlay */}
                                <div className={cn(
                                    "absolute bottom-0 inset-x-0 p-8 md:p-12 lg:p-14",
                                    isRtl ? "text-right" : "text-left"
                                )}>
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                        className="max-w-3xl"
                                    >
                                        <h3 className="text-3xl md:text-5xl font-black text-white mb-4 font-headline tracking-tighter leading-tight">
                                            {activeItem.title}
                                        </h3>
                                        <p className="text-white/80 text-base md:text-lg font-light leading-relaxed mb-6 line-clamp-3">
                                            {activeItem.desc}
                                        </p>
                                        <div className={cn("flex flex-wrap gap-3", isRtl ? "justify-start" : "justify-start")}>
                                            {activeItem.highlights.map((highlight, hIdx) => (
                                                <span
                                                    key={hIdx}
                                                    className="px-4 py-1.5 rounded-lg border border-white/20 bg-black/40 backdrop-blur-xl text-white text-xs font-medium tracking-wide uppercase"
                                                >
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Sidebar */}
                    <div
                        className="hidden w-full lg:order-2 lg:flex lg:w-1/3 lg:flex-col lg:py-6 relative"
                        onMouseEnter={() => { isPausedRef.current = true; }}
                        onMouseLeave={() => { isPausedRef.current = false; }}
                    >
                        <div className="flex flex-col w-full relative z-10 justify-center h-full gap-2">
                            {/* Vertical Progress Bar Container */}
                            <div className={cn(
                                "absolute top-6 bottom-6 lg:top-8 lg:bottom-8 w-[2.5px] bg-white/10 rounded-full",
                                isRtl ? "right-0" : "left-0"
                            )}>
                                {/* Active Progress Fill */}
                                <div
                                    className="absolute top-0 w-full bg-tertiary shadow-[0_0_20px_rgba(234,195,74,0.4)] transition-all ease-linear duration-100"
                                    style={{ height: `${progressValue}%` }}
                                ></div>
                            </div>

                            {dict.items.map((item, idx) => {
                                const isActive = idx === activeIdx;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            setActiveIdx(idx);
                                            setProgressValue((idx / (dict.items.length - 1)) * 100);
                                            setImageIdx(0);
                                        }}
                                        className={cn(
                                            "relative py-6 px-10 text-start transition-all duration-500 group outline-none flex flex-col justify-center",
                                            isActive
                                                ? "text-on-background opacity-100"
                                                : "text-on-background/30 hover:text-on-background/60"
                                        )}
                                    >
                                        {/* Active Highlight Dot */}
                                        <div
                                            className={cn(
                                                "absolute top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full border transition-all duration-500 z-20",
                                                isRtl ? "-right-[4px]" : "-left-[4px]",
                                                isActive
                                                    ? "bg-tertiary border-tertiary scale-125 shadow-[0_0_15px_rgba(234,195,74,0.8)]"
                                                    : "bg-outline-variant border-outline scale-100 opacity-100"
                                            )}
                                        ></div>

                                        <span className={cn(
                                            "text-lg lg:text-2xl font-bold font-headline transition-all duration-300",
                                            isActive && (isRtl ? "-translate-x-2" : "translate-x-2")
                                        )}>
                                            {item.title}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

"use client";

import React from "react";
import Image from "next/image";

export default function MissionVision({ mission, vision }: { mission: any, vision: any }) {
    return (
        <section className="py-0 overflow-hidden bg-background">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
                <div className="bg-surface-variant p-24 flex flex-col justify-center text-on-background relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <Image
                            fill
                            className="object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAavzakmzGpLBVdfDrYllWTXC_KFQJf_xxCmG6afJF7KX-YFYG6778dCr_jVQPwWt3UQcQLyMDKVrpKip1BhzsSdJFYWWC-Z1BkaJ4zF2qUp4BrqghIyCgOUAaQkpJCH5fF9Rx1-WHbkdPxYr8k5dLy4ZUMkSBLEietjd5jbG3C08FvoIcSf9RNc314fzc6IYLw-Lj5Ta-_-OHFugIc8k00Xhr8fgFfK9U4hjboJoaEvUg_DKDX0MIscJhBmYqDyQ0lAgi45eKaIhOw"
                            alt="Blueprint architectural lines"
                        />
                    </div>
                    <div className="relative z-10 space-y-8">
                        <span className="text-tertiary font-label tracking-widest uppercase text-sm">{mission.badge}</span>
                        <h3 className="text-5xl font-light tracking-tight leading-tight text-on-background font-headline">
                            <span className="font-bold text-tertiary">{mission.title}</span>
                        </h3>
                        {mission.accent && (
                            <p className="text-3xl font-light leading-relaxed opacity-80 text-tertiary">
                                {mission.accent}
                            </p>
                        )}
                        <p className="text-on-surface-variant text-lg max-w-md italic">{mission.desc}</p>
                    </div>
                </div>
                <div className="bg-background relative">
                    <Image
                        fill
                        className="object-cover grayscale opacity-50"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwuUAYv3O69d1zan-5tABZMSfBpkDULIYwQ2NMAXLcfc-gRKYaRRDC_lNS04or_DAn9OFCh4dW2ezur3sLLERfuRu2sOQuiZxWa89FjwETmkAX2wWKhBvCE_L0NzuMsQ-Dv-2IbDs9QPnVkAKc-xhQIfHpiHQHq9vzFSdCPNFI_Gl7PvRdF-tOhZ-KFpbaqL9dfIrV6wxZyE3a4CDh_KXdPl7qZ5u8BjswvtLXvLH5BRRc8LfcheXR1oHnjMwEPnx1wGZ0JUc-Xuje"
                        alt="Construction site"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-surface-variant to-transparent"></div>
                    <div className="absolute bottom-12 left-12 p-12 glass-panel gold-shimmer max-w-md shadow-2xl border border-tertiary/20">
                        <span className="text-tertiary font-label tracking-widest uppercase text-xs mb-4 block block font-label">{vision.badge}</span>
                        <h3 className="text-3xl font-bold text-on-background mb-4 font-headline">{vision.title}</h3>
                        <p className="text-on-surface-variant text-sm italic">
                            {vision.desc}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

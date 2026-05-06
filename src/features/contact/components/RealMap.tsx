"use client";

import React, { useEffect, useMemo, useState } from "react";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";

const RIYADH_POSITION: [number, number] = [24.75944, 46.73291];

export function RealMap({ info }: { info: any }) {
    const [mounted, setMounted] = useState(false);
    const [customIcon, setCustomIcon] = useState<any>(null);

    const isArabic = useMemo(
        () => /[\u0600-\u06FF]/.test(info?.hq ?? "") || /[\u0600-\u06FF]/.test(info?.hqAddress ?? ""),
        [info?.hq, info?.hqAddress]
    );

    useEffect(() => {
        const L = require("leaflet");
        const icon = new L.DivIcon({
            className: "tkamul-map-marker",
            html: `
                <div style="position:relative;width:32px;height:32px;">
                    <span style="position:absolute;inset:0;border-radius:9999px;background:rgba(107,95,0,0.3);animation:mapPulse 1.8s ease-out infinite;"></span>
                    <span style="position:absolute;inset:7px;border-radius:9999px;background:#6b5f00;box-shadow:0 0 0 3px rgba(255,255,255,0.95);"></span>
                </div>
            `,
            iconSize: [32, 32],
            iconAnchor: [16, 16],
        });
        setCustomIcon(icon);
        setMounted(true);
    }, []);

    if (!mounted || !customIcon) {
        return (
            <div className="flex h-[460px] w-full items-center justify-center bg-surface dark:bg-surface-container-low">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
        );
    }

    return (
        <section className="relative overflow-hidden border-y border-outline-variant/20 bg-surface py-10 dark:border-outline-variant/25 dark:bg-surface-container-low md:py-14">
            <div className="mx-auto max-w-7xl px-6 md:px-8">
                <div className="mb-6">
                    <h3 className="font-headline text-2xl font-bold text-on-surface md:text-3xl">{info.hq}</h3>
                    <div className="mt-3 h-1 w-32 rounded-full bg-gradient-to-l from-tertiary to-transparent" />
                </div>

                <div className="overflow-hidden rounded-sm border border-outline-variant/30 shadow-[0_20px_45px_rgba(0,0,0,0.16)]">
                    <div dir="ltr" className="h-[460px] w-full">
                        <MapContainer
                            center={RIYADH_POSITION}
                            zoom={12}
                            zoomControl={false}
                            scrollWheelZoom={false}
                            className="h-full w-full"
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                            />

                            <Marker position={RIYADH_POSITION} icon={customIcon}>
                                <Tooltip direction="top" offset={[0, -18]} opacity={1} permanent={false}>
                                    <div
                                        dir={isArabic ? "rtl" : "ltr"}
                                        className="max-w-[300px] rounded-sm border border-outline-variant/25 bg-surface px-4 py-3 text-sm text-on-surface shadow-lg"
                                    >
                                        <p className="font-bold text-primary">{info.hq}</p>
                                        <p className="mt-1 leading-relaxed text-on-surface-variant">{info.hqAddress}</p>
                                    </div>
                                </Tooltip>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </section>
    );
}

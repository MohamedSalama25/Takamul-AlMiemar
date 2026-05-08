"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";

type MarkerItem = {
    key: string;
    label: string;
    sublabel: string;
    position: [number, number];
    color: string;
};

const BRANCHES: MarkerItem[] = [
    {
        key: "hq",
        label: "المقر الرئيسي - الرياض",
        sublabel: "P.O. Box 16058, Riyadh 13245",
        position: [24.75944, 46.73291],
        color: "#6b5f00",
    },
];

export function SmallBranchMap() {
    const [mounted, setMounted] = useState(false);
    const [icons, setIcons] = useState<Record<string, any>>({});

    useEffect(() => {
        const L = require("leaflet");
        const nextIcons: Record<string, any> = {};

        BRANCHES.forEach((branch) => {
            nextIcons[branch.key] = new L.DivIcon({
                className: "tkamul-branch-marker",
                html: `
                    <div style="position:relative;width:24px;height:24px;">
                        <span style="position:absolute;inset:0;border-radius:9999px;background:${branch.color}44;"></span>
                        <span style="position:absolute;inset:5px;border-radius:9999px;background:${branch.color};box-shadow:0 0 0 2px rgba(255,255,255,0.95);"></span>
                    </div>
                `,
                iconSize: [24, 24],
                iconAnchor: [12, 12],
            });
        });

        setIcons(nextIcons);
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex h-full w-full items-center justify-center bg-surface">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
        );
    }

    return (
        <div dir="ltr" className="h-full w-full">
            <MapContainer
                center={[24.75944, 46.73291]}
                zoom={11}
                zoomControl={false}
                scrollWheelZoom={false}
                className="h-full w-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />

                {BRANCHES.map((branch) => (
                    <Marker key={branch.key} position={branch.position} icon={icons[branch.key]}>
                        <Tooltip direction="top" offset={[0, -14]} opacity={1}>
                            <div className="rounded-sm border border-outline-variant/25 bg-surface px-3 py-2 text-xs shadow-lg">
                                <p className="font-semibold text-on-surface">{branch.label}</p>
                                <p className="text-on-surface-variant">{branch.sublabel}</p>
                            </div>
                        </Tooltip>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

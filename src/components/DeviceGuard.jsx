"use client";
import { useEffect, useState } from "react";

export default function DeviceGuard({ children }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
        const width = window.innerWidth;
        setIsMobile(width < 900); // you can tweak 900px breakpoint
        };

        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    if (isMobile) {
        return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white p-6 text-center">
            <h1 className="text-3xl font-semibold mb-4">
            🚫 Laptop or Tablet Required
            </h1>
            <p className="text-gray-400 text-lg">
            This website is designed for larger screens.  
            Please open it on a laptop or tablet for the best experience.
            </p>
        </div>
        );
    }

    return children;
}

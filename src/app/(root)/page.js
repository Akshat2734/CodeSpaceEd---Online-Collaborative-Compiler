"use client"


import { Inter } from "next/font/google";
import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// ✅ Font setup
const inter = Inter({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

// ✅ Reusable Skeleton Loader
function SkeletonLoader({ height = "300px" }) {
    return (
        <div
        className="animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-xl w-full"
        style={{ height }}
        ></div>
    );
}

// ✅ Lazy Motion Band Component
function LazyMotionBand({ items, direction }) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // Delay just a bit to allow layout + framer motion mount
        const timeout = setTimeout(() => setReady(true), 800);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="overflow-hidden w-screen max-w-[1100px] mx-auto border-2 border-[#222] rounded-xl mt-10">
        {!ready ? (
            <SkeletonLoader height="60px" />
        ) : (
            <motion.div
            className="flex w-max"
            animate={{
                x: direction === "left" ? ["0%", "-33.3%"] : ["-33.3%", "0%"],
            }}
            transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
            }}
            style={{ willChange: "transform" }}
            >
            {[...items, ...items, ...items].map((item, i) => (
                <div
                key={i}
                className="w-40 h-10 mr-5 rounded-xl flex items-center justify-center bg-gray-500 text-[1.2rem] font-medium"
                >
                {item.icon.endsWith(".png") ? (
                    <img
                    src={item.icon}
                    alt={item.text}
                    className="w-6 h-6"
                    loading="lazy"
                    />
                ) : (
                    <span className="text-3xl mb-2">{item.icon}</span>
                )}
                <span className="text-base text-black">{item.text}</span>
                </div>
            ))}
            </motion.div>
        )}
        </div>
    );
}

// ✅ Lazy Iframe Component with skeleton fallback
function LazyIframe({ src, title }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative w-full min-h-[500px] rounded-xl overflow-hidden bg-gray-900">
        {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
            <SkeletonLoader height="500px" />
            </div>
        )}
        <iframe
            src={src}
            title={title}
            className={`w-full h-[500px] rounded-xl transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
            loading="lazy"
        />
        </div>
    );
    }

const AboutSection = dynamic(() => import("import/components/AboutSection"), {
    loading: () => (
        <div className="flex justify-center mt-20">
        <div className="animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-4xl w-[400px] h-[300px]"></div>
        </div>
    ),
    ssr: false,
});

const ProgrammingLanguagesSection = dynamic(
    () => import("import/components/ProgrammingLanguagesSection"),
    {
        loading: () => (
        <div className="flex justify-center mt-20">
            <div className="animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-4xl w-[700px] h-[500px]" />
        </div>
        ),
        ssr: false,
    }
);

    // ✅ Main HomePage
export default function HomePage() {
    const [active, setActive] = useState(0);

    const items = [
        { icon: "/javascript.png", text: "JavaScript" },
        { icon: "/typescript.png", text: "TypeScript" },
        { icon: "/python.png", text: "Python" },
        { icon: "/java.png", text: "Java" },
        { icon: "/go.png", text: "Go" },
        { icon: "/rust.png", text: "Rust" },
    ];

    const items2 = [
        { icon: "/cpp.png", text: "C++" },
        { icon: "/csharp.png", text: "C#" },
        { icon: "/ruby.png", text: "Ruby" },
        { icon: "/swift.png", text: "Swift" },
        { icon: "/html.png", text: "HTML" },
        { icon: "/css.png", text: "CSS" },
    ];

    const data = [
        {
        img: "https://react.dev/",
        title: "React Docs",
        desc: "Learn modern React with official documentation.",
        },
        {
        img: "https://dashboard-embedded.convex.dev",
        title: "Convex Dashboard",
        desc: "Realtime backend for your applications.",
        },
        {
        img: "https://app.clerk.chat?k=your-jwt-token",
        title: "Clerk Authentication",
        desc: "User management and secure auth for developers.",
        },
        {
        img: "https://app.lemonsqueezy.com/",
        title: "Lemon Squeezy",
        desc: "Subscription and payment management made simple.",
        },
    ];

    return (
        <div>
        {/* Hero Title */}
        <h1
            className={`flex text-[48px] text-gray-300 justify-center ${inter.className} pt-30`}
        >
            Collaborating together with CodeSpaceEd
        </h1>

        {/* Moving Bands */}
        <LazyMotionBand items={items} direction="left" />
        <LazyMotionBand items={items2} direction="right" />

        {/* Iframe Section */}
        <div className="w-6xl shadow place-self-center rounded-xl mt-20 flex bg-black">
            <figure className="w-full">
            <LazyIframe
                src={data[active].img}
                title={data[active].title}
            />
            </figure>
            <div className="card-body text-gray-200 p-8">
            <h2 className="card-title text-2xl">{data[active].title}</h2>
            <p className="text-gray-400">{data[active].desc}</p>
            </div>
        </div>

        {/* Steps Control */}
        <div className="w-full flex justify-center mt-10">
            <ul className="steps w-170">
            {data.map((_, i) => (
                <li
                key={i}
                onClick={() => setActive(i)}
                className={`step cursor-pointer relative h-17 mt-5 after:!w-17 after:!h-17 after:text-2xl ${
                    i <= active ? "step-success" : ""
                }`}
                />
            ))}
            </ul>
        </div>
        <div className="flex justify-evenly mt-20 pl-32">
            <AboutSection />
            <ProgrammingLanguagesSection />
        </div>
        </div>
    );
}

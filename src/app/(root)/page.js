"use client"

import { Tagesschrift } from "next/font/google";
import { motion } from "motion/react"
import { useThemeContext } from "../../contexts/theme-context";
import { useState } from "react";


const tagesschrift = Tagesschrift({
  subsets: ["latin"],
  family: ["Tagesschrift", "system-ui"],
  weight: ["400"]
})

export default function HomePage() {
  const items = [
  { icon: "/javascript.png", text: "JavaScript" },
  { icon: "/typescript.png", text: "TypeScript" },
  { icon: "/python.png", text: "Python" },
  { icon: "/java.png", text: "Java" },
  { icon: "/go.png", text: "Go" },
  { icon: "/rust.png", text: "Rust" },
  ]

  const items2 =[
  { icon: "/cpp.png", text: "C++" },
  { icon: "/csharp.png", text: "C#" },
  { icon: "/ruby.png", text: "Ruby" },
  { icon: "/swift.png", text: "Swift" },
  { icon: "/html.png", text: "HTML" },
  { icon: "/css.png", text: "CSS" },
]


const data = [
    {
      img: "https://react.dev/",
      title: "Classic Hat",
      desc: "A timeless hat for everyday wear.",
    },
    {
      img: "https://dashboard-embedded.convex.dev",
      title: "Modern Hat",
      desc: "Stylish design with premium fabric.",
    },
    {
      img: "https://app.clerk.chat?k=your-jwt-token",
      title: "Sporty Hat",
      desc: "Lightweight and perfect for outdoor activity.",
    },
    {
      img: "https://app.lemonsqueezy.com/",
      title: "Elegant Hat",
      desc: "Refined style for special occasions.",
    },
  ];

const [active, setActive] = useState(0);

return (
    <>
    <div>
        <h1 className={`flex text-[48px] text-gray-300 justify-center ${tagesschrift.className} pt-30`}>Collaborating together with CodeSpaceEd</h1>
        <div className={`w-screen max-w-[1100px] overflow-hidden mt-10 mx-auto border-2 border-[#222] rounded-xl`}>
            <motion.div
                className="flex w-max"
                    animate={{ x: ["0%", "-33.3%"] }} 
                    transition={{
                        duration: 20, // speed
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                {[...items, ...items, ...items].map((item, i) => (
                    <div
                        key={i}
                        className="w-40 h-10 mr-5 rounded-xl flex items-center justify-center bg-gray-500 text-[1.2rem] font-medium"
                    >
                        {item.icon.endsWith(".png") ? (
                            <img src={item.icon} alt={item.text} className="w-6 h-6" />
                            ) : (
                            <span className="text-3xl mb-2">{item.icon}</span>
                        )}
                        <span className="text-base text-black">{item.text}</span>
                    </div>
                ))}
            </motion.div>
        </div>
        <div className="w-screen max-w-[1100px] overflow-hidden mt-5 mx-auto border-2 border-[#222] rounded-xl">
            <motion.div
                className="flex w-max"
                animate={{ x: ["-33.3%", "0%"] }} 
                transition={{
                    duration: 20, // speed
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {[...items2, ...items2, ...items2].map((item, i) => (
                    <div
                        key={i}
                        className="w-40 h-10 mr-5 rounded-xl flex items-center justify-center bg-gray-500 text-[1.2rem] font-medium"
                    >
                        {item.icon.endsWith(".png") ? (
                            <img src={item.icon} alt={item.text} className="w-6 h-6" />
                            ) : (
                            <span className="text-3xl mb-2">{item.icon}</span>
                        )}
                        <span className="text-base text-black">{item.text}</span>
                    </div>
                ))}
            </motion.div>
        </div>
        <div className={`w-6xl shadow place-self-center rounded-xl mt-27 flex bg-black`}>
            <figure>
                <iframe
                    src={data[active].img}
                    alt={data[active].title}
                    className="min-h-[500px] object-contain rounded-xl w-2xl bg-gray-600"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{data[active].title}</h2>
                <p>{data[active].desc}</p>
            </div>
        </div>
        <div className="w-full flex justify-center mt-15 ">
            <ul className="steps w-170">
                {data.map((item, i) => (
                <li
                    key={i}
                    onClick={() => setActive(i)}
                    className={`
                        step cursor-pointer relative h-17 mt-5
                        after:!w-17 after:!h-17 after:text-2xl
                        ${i <= active ? "step-success" : ""} 
                        
                    `}
                >
                </li>
                ))}
            </ul>
        </div>
        <div className="border-b-2 border-b-gray-600 m-20 " />
        <div className="flex justify-center gap-x-12">
            <div className="card bg-black w-96 shadow-sm rounded-4xl">
                <figure className="px-10 pt-10">
                <img
                    src="https://i.ytimg.com/vi/Tef1e9FiSR0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBth0kDT0aoBUn7ith5G7Cv798Qdg"
                    alt="frontend-roadmap"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Front-End Roadmap</h2>
                    <p>This step-by-step roadmap covers the essential skills and latest technologies to become a frontend developer in 2024. </p>
                    <div className="card-actions">
                        <button className="btn btn-soft" onClick={() => window.open('https://www.youtube.com/watch?v=Tef1e9FiSR0&t=1s', '_blank')}>Watch</button>
                    </div>
                </div>
            </div>
            <div className="card bg-black w-96 shadow-sm rounded-4xl">
                <figure className="px-10 pt-10">
                <img
                    src="https://i.ytimg.com/vi/OeEHJgzqS1k/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCZDnY_I6oWwGD5aeMPt1ejqqMv8Q"
                    alt="backend-roadmap"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Back-End Roadmap</h2>
                    <p>This step-by-step roadmap covers the essential skills and latest technologies to become a backend developer in 2024. </p>
                    <div className="card-actions">
                        <button className="btn btn-soft" onClick={() => window.open('https://www.youtube.com/watch?v=OeEHJgzqS1k', '_blank')}>Watch</button>
                    </div>
                </div>
            </div>
            <div className="card bg-black w-96 shadow-sm rounded-4xl">
                <figure className="px-10 pt-10">
                <img
                    src="https://i.ytimg.com/vi/7IgVGSaQPaw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB0Fxy_KZNaaloFK-e8QdZ8nl4bxw"
                    alt="machine-learning-roadmap"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Machine Learning Roadmap</h2>
                    <p>This step-by-step roadmap covers the essential skills you must learn to become a machine learning engineer in 2024. </p>
                    <div className="card-actions mt-2">
                        <button className="btn btn-soft" onClick={() => window.open('https://www.youtube.com/watch?v=7IgVGSaQPaw', '_blank')}>Watch</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="border-b-2 border-b-gray-600 m-20" />
        <div className="flex justify-evenly">
            <div>
                <div className="card bg-black text-primary-content rounded-4xl w-96 max-h-[300px]">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[26px]">About Me</h2>
                        <p className="text-[16px]">I’m a web developer focused on creating secure, high-performance websites and web apps. My expertise lies in building frontends, though I also enjoy exploring new challenges. I am currently open to a full-time remote role if I’m a good fit for the company.</p>
                        <div>
                            <button className="group p-2 rounded-md transition duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-primary dark:text-white group-hover:scale-125 group-hover:text-white/50 transition-transform duration-300"
                                    viewBox="0 0 24 24"
                                    strokeWidth="0.8"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2
                                c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2
                                a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3
                                a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3
                                a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2
                                c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                </svg>
                            </button>
                            <button className="group p-2 rounded-md transition duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-primary dark:text-white group-hover:scale-125 group-hover:text-yellow-500 transition-transform duration-300"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 
                                2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
                                4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                            </button>
                            <button className="group p-2 rounded-md transition duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-primary dark:text-white group-hover:scale-125 group-hover:text-blue-600 transition-transform duration-300"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.63 4.75 6v10h-4v-9c0-2.15-.04-4.9-3-4.9-3 0-3.45 2.3-3.45 4.75V24h-4V8z"/>
                                </svg>
                            </button>
                            <button className="group p-2 rounded-md transition duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-primary dark:text-white group-hover:scale-125 group-hover:text-pink-500 transition-transform duration-300"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card card-border bg-black rounded-4xl w-96 mt-10">
                        <div className="card-body">
                            <p className="text-center text-sm text-gray-500">
                                © 2025 CodeSpaceEd. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="card bg-black text-primary-content rounded-4xl w-[700px] -mt-0 my-10">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[26px] mb-4">Programming Languages</h2>
                        <p className="text-[16px] mb-6">
                        A collection of programming languages I work with. Click an icon to visit its official documentation.
                        </p>
                        <div className="grid grid-cols-3 gap-6">
                        {/* JavaScript */}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center"
                        >
                            <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">📜</button>
                            <span className="mt-2 text-sm">JavaScript</span>
                        </a>
                        {/* TypeScript */}
                        <a
                            href="https://www.typescriptlang.org/docs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center"
                        >
                            <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">🔷</button>
                            <span className="mt-2 text-sm">TypeScript</span>
                        </a>
                        {/* Python */}
                        <a
                            href="https://docs.python.org/3/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center"
                        >
                            <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">🐍</button>
                            <span className="mt-2 text-sm">Python</span>
                        </a>
                        {/* Java */}
                        <a
                            href="https://docs.oracle.com/javase/8/docs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center"
                        >
                            <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">☕</button>
                            <span className="mt-2 text-sm">Java</span>
                        </a>
                        {/* Go */}
                        <a
                            href="https://go.dev/doc/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center"
                        >
                            <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">🐹</button>
                            <span className="mt-2 text-sm">Go</span>
                        </a>
                        {/* Rust */}
                        <a
                            href="https://doc.rust-lang.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center"
                        >
                            <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">🦀</button>
                            <span className="mt-2 text-sm">Rust</span>
                        </a>
                        {/* C++ */}
                        <a
                            href="https://en.cppreference.com/w/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center"
                        >
                            <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">💠</button>
                            <span className="mt-2 text-sm">C++</span>
                        </a>
                        {/* C# */}
                        <a
                            href="https://learn.microsoft.com/en-us/dotnet/csharp/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center"
                        >
                            <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">🎯</button>
                            <span className="mt-2 text-sm">C#</span>
                        </a>
                        {/* Ruby */}
                        <a
                            href="https://www.ruby-lang.org/en/documentation/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center"
                        >
                            <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">💎</button>
                            <span className="mt-2 text-sm">Ruby</span>
                        </a>
                        {/* Swift */}
                        <a
                            href="https://developer.apple.com/documentation/swift"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center"
                        >
                            <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">🍎</button>
                            <span className="mt-2 text-sm">Swift</span>
                        </a>
                        {/* HTML */}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center"
                        >
                            <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">🌐</button>
                            <span className="mt-2 text-sm">HTML</span>
                        </a>
                        {/* CSS */}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center"
                        >
                            <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">🎨</button>
                            <span className="mt-2 text-sm">CSS</span>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

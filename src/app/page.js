"use client"

import { Tagesschrift } from "next/font/google";
import { motion } from "motion/react"
import { useThemeContext } from "./contexts/theme-context";
import { useState, useEffect, useRef } from "react";


const tagesschrift = Tagesschrift({
  subsets: ["latin"],
  family: ["Tagesschrift", "system-ui"],
  weight: ["400"]
})

export default function HomePage() {
  const items = [
  { icon: "📜", text: "JavaScript" },
  { icon: "🔷", text: "TypeScript" },
  { icon: "🐍", text: "Python" },
  { icon: "☕", text: "Java" },
  { icon: "🐹", text: "Go" },
  { icon: "🦀", text: "Rust" },
  ]

  const items2 =[
  { icon: "💠", text: "C++" },
  { icon: "🎯", text: "C#" },
  { icon: "💎", text: "Ruby" },
  { icon: "🍎", text: "Swift" },
  { icon: "🌐", text: "HTML" },
  { icon: "🎨", text: "CSS" },
]

const { theme } = useThemeContext()

const data = [
    {
      img: "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
      title: "Classic Hat",
      desc: "A timeless hat for everyday wear.",
    },
    {
      img: "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
      title: "Modern Hat",
      desc: "Stylish design with premium fabric.",
    },
    {
      img: "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
      title: "Sporty Hat",
      desc: "Lightweight and perfect for outdoor activity.",
    },
    {
      img: "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
      title: "Elegant Hat",
      desc: "Refined style for special occasions.",
    },
  ];

const [active, setActive] = useState(0);

  return (
    <>
    <div>
        <h1 className={`flex text-[48px] justify-center ${tagesschrift.className} pt-20`}>Collaborating together with CodeSpaceEd</h1>
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
                        className="w-40 h-10 mr-5 rounded-xl flex items-center justify-center bg-[#f5f5f5] text-[1.2rem] font-medium"
                    >
                        <span className="text-[25px]">{item.icon}</span>
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
                        className="w-40 h-10 mr-5 rounded-xl flex items-center justify-center bg-[#f5f5f5] text-[1.2rem] font-medium"
                    >
                        <span className="text-[25px]">{item.icon}</span>
                        <span className="text-base text-black">{item.text}</span>
                    </div>
                ))}
            </motion.div>
        </div>
        <div className={`w-6xl shadow place-self-center rounded-xl mt-20 flex ${theme === "dark" ? "bg-black" : "bg-gray-500"}`}>
             <figure>
                <img
                    src={data[active].img}
                    alt={data[active].title}
                    className="max-h-[500px] object-contain rounded-xl w-2xl bg-gray-600"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{data[active].title}</h2>
                <p>{data[active].desc}</p>
            </div>
        </div>
        <div className="w-full flex justify-center mt-10">
            <ul className="steps w-200">
                {data.map((item, i) => (
                <li
                    key={i}
                    onClick={() => setActive(i)}
                    className={`
                        step cursor-pointer relative h-20 mt-5
                        after:!w-20 after:!h-20 after:text-2xl 
                        ${i <= active ? "step-success" : ""} 
                        
                    `}
                >
                </li>
                ))}
            </ul>
        </div>
    </div>
    </>
    )
}

"use client";

export default function AboutSection() {
    return (
        <div>
        <div className="card bg-black text-primary-content rounded-4xl w-96 max-h-[300px]">
            <div className="card-body items-center text-center">
            <h2 className="card-title text-[26px]">About Me</h2>
            <p className="text-[16px]">
                I’m a web developer focused on creating secure, high-performance
                websites and web apps. My expertise lies in building frontends,
                though I also enjoy exploring new challenges. I am currently open
                to a full-time remote role if I’m a good fit for the company.
            </p>
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
                    <path
                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2
                    c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2
                    a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3
                    a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3
                    a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2
                    c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                    />
                </svg>
                </button>
                <button className="group p-2 rounded-md transition duration-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary dark:text-white group-hover:scale-125 group-hover:text-yellow-500 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path
                    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 
                    2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
                    4l-8 5-8-5V6l8 5 8-5v2z"
                    />
                </svg>
                </button>
                <button className="group p-2 rounded-md transition duration-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary dark:text-white group-hover:scale-125 group-hover:text-blue-600 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path
                    d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.63 4.75 6v10h-4v-9c0-2.15-.04-4.9-3-4.9-3 0-3.45 2.3-3.45 4.75V24h-4V8z"
                    />
                </svg>
                </button>
                <button className="group p-2 rounded-md transition duration-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary dark:text-white group-hover:scale-125 group-hover:text-pink-500 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path
                    d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"
                    />
                </svg>
                </button>
            </div>
            </div>
        </div>

        <div>
            <div className="card card-border bg-black rounded-4xl w-96 mt-12">
            <div className="card-body">
                <p className="text-center text-sm text-gray-500">
                © 2025 CodeSpaceEd. All rights reserved.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
}

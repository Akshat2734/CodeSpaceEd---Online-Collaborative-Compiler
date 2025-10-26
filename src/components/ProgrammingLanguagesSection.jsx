"use client";

export default function ProgrammingLanguagesSection() {
    return (
        <div>
        <div className="card bg-black text-primary-content rounded-4xl w-[700px] -mt-0 my-10">
            <div className="card-body items-center text-center">
            <h2 className="card-title text-[26px] mb-4">Programming Languages</h2>
            <p className="text-[16px] mb-6">
                A collection of programming languages I work with. Click an icon to
                visit its official documentation.
            </p>

            <div className="grid grid-cols-3 gap-6">
                {/* JavaScript */}
                <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                >
                <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">
                    📜
                </button>
                <span className="mt-2 text-sm">JavaScript</span>
                </a>

                {/* TypeScript */}
                <a
                href="https://www.typescriptlang.org/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                >
                <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">
                    🔷
                </button>
                <span className="mt-2 text-sm">TypeScript</span>
                </a>

                {/* Python */}
                <a
                href="https://docs.python.org/3/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                >
                <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">
                    🐍
                </button>
                <span className="mt-2 text-sm">Python</span>
                </a>

                {/* Java */}
                <a
                href="https://docs.oracle.com/javase/8/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                >
                <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">
                    ☕
                </button>
                <span className="mt-2 text-sm">Java</span>
                </a>

                {/* Go */}
                <a
                href="https://go.dev/doc/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                >
                <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">
                    🐹
                </button>
                <span className="mt-2 text-sm">Go</span>
                </a>

                {/* Rust */}
                <a
                href="https://doc.rust-lang.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                >
                <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">
                    🦀
                </button>
                <span className="mt-2 text-sm">Rust</span>
                </a>

                {/* C++ */}
                <a
                href="https://en.cppreference.com/w/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                >
                <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">
                    💠
                </button>
                <span className="mt-2 text-sm">C++</span>
                </a>

                {/* C# */}
                <a
                href="https://learn.microsoft.com/en-us/dotnet/csharp/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                >
                <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">
                    🎯
                </button>
                <span className="mt-2 text-sm">C#</span>
                </a>

                {/* Ruby */}
                <a
                href="https://www.ruby-lang.org/en/documentation/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                >
                <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">
                    💎
                </button>
                <span className="mt-2 text-sm">Ruby</span>
                </a>

                {/* Swift */}
                <a
                href="https://developer.apple.com/documentation/swift"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                >
                <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">
                    🍎
                </button>
                <span className="mt-2 text-sm">Swift</span>
                </a>

                {/* HTML */}
                <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                >
                <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">
                    🌐
                </button>
                <span className="mt-2 text-sm">HTML</span>
                </a>

                {/* CSS */}
                <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                >
                <button className="text-4xl p-3 rounded-full bg-primary/10 group-hover:scale-110 transition duration-300">
                    🎨
                </button>
                <span className="mt-2 text-sm">CSS</span>
                </a>
            </div>
            </div>
        </div>
        </div>
    );
}

import { currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../convex/_generated/api";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import LoginButton from "import/components/LoginButton";
import UpgradeButton from "./_components/UpgradeButton";


export default function pricingpage(){     
    const user = currentUser();
    const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL || "");
    const convexUser = convex.query(api.users.getUser, {
        userId: user?.id || "",
    });

    if (convexUser?.isPro) return <ProPlanView />;
    
    return(
        <div className="flex justify-evenly mt-24">
            {/* First Card */}
            <div className="card w-96 h-120 bg-black shadow-sm rounded-4xl">
                <div className="card-body">
                <span className="badge badge-xs badge-warning">Most Popular</span>
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold">Premium</h2>
                    <span className="text-xl">Rs.999/Year</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span>Global Infrastructure</span>
                    </li>
                    <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span>Multi-language support</span>
                    </li>
                    <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span>Batch processing capabilities</span>
                    </li>
                    <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span>Version control integration</span>
                    </li>
                    <li className="opacity-50">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-base-content/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className="line-through">Seamless cloud integration</span>
                    </li>
                    <li className="opacity-50">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-base-content/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className="line-through">Real-time collaboration tools</span>
                    </li>
                </ul>
                <div className="mt-6 flex justify-center">
                    
                        <SignedIn>
                            <UpgradeButton />
                        </SignedIn>
                        <SignedOut>
                            <LoginButton />
                        </SignedOut>
                    
                </div>
                </div>
            </div>

            {/* Second Card */}
            <div className="card w-96 bg-black rounded-4xl shadow-sm">
                <div className="card-body">
                    <span className="badge badge-xs badge-warning">Popular</span>
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold">Premium</h2>
                    <span className="text-xl">Rs.99/mo</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span>High-resolution image generation</span>
                    </li>
                    <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span>Customizable style templates</span>
                    </li>
                    <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span>Batch processing capabilities</span>
                    </li>
                    <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span>AI-driven image enhancements</span>
                    </li>
                    <li className="opacity-50">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-base-content/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className="line-through">Seamless cloud integration</span>
                    </li>
                    <li className="opacity-50">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-base-content/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className="line-through">Real-time collaboration tools</span>
                    </li>
                </ul>
                <div className="mt-6 flex justify-center">
                    
                        <SignedIn>
                            <UpgradeButton />
                        </SignedIn>
                        <SignedOut>
                            <LoginButton />
                        </SignedOut>
                    
                </div>
                </div>
            </div>

            {/* Third Card */}
            <div className="card w-96 bg-black rounded-4xl shadow-sm">
                <div className="card-body">
                <span className="badge badge-xs badge-warning">Most Popular</span>
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold">Premium</h2>
                    <span className="">Pay As Per Need</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span>High-resolution image generation</span>
                    </li>
                    <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span>Customizable style templates</span>
                    </li>
                    <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span>Batch processing capabilities</span>
                    </li>
                    <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span>AI-driven image enhancements</span>
                    </li>
                    <li className="opacity-50">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-base-content/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className="line-through">Seamless cloud integration</span>
                    </li>
                    <li className="opacity-50">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-base-content/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className="line-through">Real-time collaboration tools</span>
                    </li>
                </ul>
                <div className="mt-6 flex justify-center">
                    
                        <SignedIn>
                            <UpgradeButton />
                        </SignedIn>
                        <SignedOut>
                            <LoginButton />
                        </SignedOut>
                </div>
                </div>
            </div>
        </div>
    )
}
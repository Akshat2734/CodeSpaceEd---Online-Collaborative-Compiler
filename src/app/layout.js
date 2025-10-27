import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DeviceGuard from "import/components/DeviceGuard";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "../components/providers/ConvexClientProvider";
import NavigationHeader from "import/components/NavigationHeader";
import NavigationHeaderWrapper from "import/components/NavigationHeaderWrapper";
import RegisterUserClient from "import/components/RegisterUserClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CodeSpaceEd",
  description: "CodeEditorMadeForCollaboration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="darkgray" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1e1e1e] text-[#f5f5f5] overflow-y-scroll`}
      >
        <DeviceGuard>
            <ConvexClientProvider>
              <RegisterUserClient />
              <NavigationHeaderWrapper />
              {children}
            </ConvexClientProvider>
        </DeviceGuard>
      </body>
    </html>
  );
}

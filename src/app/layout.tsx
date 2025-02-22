import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Navigation } from "@/components/navigation";
import AuthSession from "@/providers/AuthSession";

const myFont = localFont({
  src: [
    {
      path: "../fonts/SpoqaHanSansNeo-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-spoqa",
});

export const metadata: Metadata = {
  title: "메인",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} antialiased overflow-x-hidden  relative`}
      >
        <AuthSession>
          <div className="flex justify-center items-center h-screen w-screen bg-white z-20">
            <div className="w-full max-w-[37.5rem] h-full mx-auto relative bg-foundation-quarternary text-content-secondary">
              <div className="pl-4 pr-4">{children}</div>
              <Navigation />
            </div>
          </div>
        </AuthSession>
      </body>
    </html>
  );
}

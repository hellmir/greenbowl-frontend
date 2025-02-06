import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Navigation } from "@/components/navigation";
import { Header } from "@/components/header";

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
      path: "../fonts/SpoqaHanSansNeo-Light.otf",
      weight: "400",
      style: "normal",
    },
  ],
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
      <body className={`${myFont.className} antialiased`}>
        <div className="flex justify-center items-center h-screen w-screen">
          <div className="w-full max-w-[599px] h-full  mx-auto relative border-2 border-foundation-primary bg-foundation-quarternary">
            <Header />
            <div className="mt-[54px] pl-4 pr-4">{children}</div>
            <Navigation />
          </div>
        </div>
      </body>
    </html>
  );
}

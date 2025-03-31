import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import AuthSession from "@/providers/AuthSession";
import Alert from "@/components/alert/Alert";
import FullscreenModal from "@/components/fullscreenModal/FullscreenModal";
import Script from "next/script";
import KakaoScript from "@/script/KakaoScript";

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
  title: {
    template: "%s - 그린볼",
    default: "냉장고 재료로 맞춤 레시피 추천 시작하기",
  },
  description:
    "냉장고 속 재료를 입력하면 맞춤형 레시피를 추천하고, 남은 재료로 요리할 수 있도록 도와줍니다.",
  keywords: [
    "레시피 추천",
    "냉장고 요리",
    "남은 재료 요리",
    "맞춤형 레시피",
    "냉장고 파먹기",
    "식단 관리",
    "요리법",
    "음식 추천",
  ],
  authors: [{ name: "그린볼", url: "https://greenbowl-eta.vercel.app" }],
  icons: { icon: "/favicon.ico" },
  verification: {
    google: "EaCYCOaoJiO7veRPXZXGMPl8gEIP3ZJqYAHGwe4W1Nc",
    other: {
      "naver-site-verification": "2f278cd6f006afb6173eac8ec0d79e01e73898b3",
    },
  },
  openGraph: {
    title: "냉장고 재료로 맞춤 레시피 추천 시작하기 - 그린볼",
    description:
      "냉장고 속 재료를 입력하면 맞춤형 레시피를 추천하고, 남은 재료로 요리할 수 있도록 도와줍니다.",
    url: "https://greenbowl-eta.vercel.app",
    siteName: "그린볼",
    type: "website",
  },
};

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`${myFont.className} antialiased overflow-x-hidden relative`}
      >
        <AuthSession>
          <Script
            src="https://cdn.swygbro.com/public/widget/swyg-widget.js"
            strategy="lazyOnload"
          />
          <div className="fixed inset-0 bg-foundation-quarternary z-0"></div>
          <div className="flex justify-center items-center z-30">
            <div className="w-full max-w-[37.5rem] min-h-screen mx-auto relative text-content-secondary z-40 bg-white">
              {children}
            </div>
          </div>
          <Alert />
          <FullscreenModal />
        </AuthSession>
      </body>
      <KakaoScript />
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "냉장고 관리 꿀팁 - 신선하게 보관하는 방법",
  description:
    "음식을 더 오래 신선하게 보관하는 냉장고 관리 꿀팁! 올바른 보관법과 정리 방법을 확인해 보세요.",
  keywords: [
    "냉장고 정리",
    "음식 보관법",
    "냉장고 오래 쓰는 법",
    "식재료 신선 보관",
    "냉동 보관 팁",
    "냉장고 청소 방법",
    "냉장고 활용 꿀팁",
  ],
  authors: [{ name: "그린볼", url: "https://greenbowl-eta.vercel.app" }],
};

export default function TipsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

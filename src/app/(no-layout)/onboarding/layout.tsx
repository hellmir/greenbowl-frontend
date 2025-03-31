import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "냉장고 재료로 맞춤 레시피 추천 시작하기",
  description:
    "냉장고를 효율적으로 관리하고 AI가 추천한 레시피를 통해 남은 재료를 소비하세요",
  keywords: [
    "냉장고 재료",
    "레시피 추천",
    "맞춤형 레시피",
    "요리 추천",
    "냉장고 파먹기",
    "AI 레시피피 추천",
    "레시피 시작하기",
    "온보딩",
  ],
  authors: [{ name: "그린볼", url: "https://greenbowl-eta.vercel.app" }],
};

export default function MyFridgeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

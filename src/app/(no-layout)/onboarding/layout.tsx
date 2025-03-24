import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "그린볼 - 냉장고 재료로 맞춤 레시피 추천 시작하기",
  description:
    "그린볼에 오신 것을 환영합니다! 냉장고에 있는 재료를 입력하면 AI가 맞춤형 레시피를 추천해 드립니다. 온보딩을 통해 사용법을 익혀보세요.",
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

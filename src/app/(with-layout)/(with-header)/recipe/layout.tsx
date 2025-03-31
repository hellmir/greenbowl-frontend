import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "내 재료로 만드는 맞춤 요리 - 레시피 추천",
  description:
    "냉장고 속 재료를 입력하면 AI가 맞춤형 레시피를 추천합니다. 남은 재료를 활용하여 쉽고 맛있는 요리를 만들어보세요!",
  keywords: [
    "레시피 추천",
    "냉장고 요리",
    "남은 재료 요리",
    "맞춤형 레시피",
    "냉장고 파먹기",
    "음식 추천",
    "간단한 요리법",
  ],
  authors: [{ name: "그린볼", url: "https://greenbowl-eta.vercel.app" }],
};

export default function RecipeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

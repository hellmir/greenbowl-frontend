import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "레시피 추천",
};

export default function RecipeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

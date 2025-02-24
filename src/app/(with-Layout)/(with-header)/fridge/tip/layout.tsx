import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "냉장고 꿀팁",
};

export default function TipsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

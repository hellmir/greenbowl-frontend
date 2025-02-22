import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "재료 추가하기",
};

export default function MyFridgeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "나의 냉장고",
};

export default function MyFridgeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

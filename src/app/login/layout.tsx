import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인",
};

export default function MyFridgeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

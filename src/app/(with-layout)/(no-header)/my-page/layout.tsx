import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "마이 페이지",
};

export default function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

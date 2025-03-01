import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
};

export default function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

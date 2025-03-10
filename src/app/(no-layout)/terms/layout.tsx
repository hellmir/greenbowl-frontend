import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 이용 약관",
};

export default function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

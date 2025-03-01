import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "설정",
};

export default function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="px-4">{children}</div>;
}

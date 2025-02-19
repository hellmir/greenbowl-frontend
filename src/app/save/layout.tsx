import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "저장",
};

export default function SaveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

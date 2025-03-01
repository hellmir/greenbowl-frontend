import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "식단",
};

export default function DietLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

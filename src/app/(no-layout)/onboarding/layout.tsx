import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "green-bowl",
};

export default function MyFridgeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

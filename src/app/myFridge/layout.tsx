import type { Metadata } from "next";
import { MyFridgeTabs } from "./_source/components/tab";

export const metadata: Metadata = {
  title: "나의 냉장고",
};

export default function MyFridgeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MyFridgeTabs />
      {children}
    </>
  );
}

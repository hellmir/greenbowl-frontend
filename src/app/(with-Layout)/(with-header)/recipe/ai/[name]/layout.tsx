import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "추천 레시피",
};

export default function RecipeLayout({
                                         children,
                                     }: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}

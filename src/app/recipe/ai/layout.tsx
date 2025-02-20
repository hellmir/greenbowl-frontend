import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "AI 추천 메뉴",
};

export default function RecipeLayout({
                                         children,
                                     }: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}

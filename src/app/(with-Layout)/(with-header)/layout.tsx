import { Header } from "@/components/header";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <div className="mt-[3.275rem]">{children}</div>
    </>
  );
};

export default layout;

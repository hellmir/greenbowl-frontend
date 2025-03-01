import { Header } from "@/components/header";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <div className="">{children}</div>
    </>
  );
};

export default layout;

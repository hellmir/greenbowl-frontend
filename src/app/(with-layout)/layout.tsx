import { Navigation } from "@/components/navigation";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="">{children}</div>
      <Navigation />
    </>
  );
};

export default layout;

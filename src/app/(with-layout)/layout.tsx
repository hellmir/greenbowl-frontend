import { Navigation } from "@/components/navigation";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="px-4">{children}</div>
      <Navigation />
    </>
  );
};

export default layout;

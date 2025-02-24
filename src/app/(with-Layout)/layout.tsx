import { Navigation } from "@/components/navigation";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {children}

      <Navigation />
    </>
  );
};

export default layout;

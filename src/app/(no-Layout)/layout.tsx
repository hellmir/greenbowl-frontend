const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="px-4">{children}</div>;
};

export default layout;

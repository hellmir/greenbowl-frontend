import MyPageHeader from "./_source/components/Header";
import Recipe from "./_source/components/TabItem/Recipe";
import TabsContainer from "./_source/components/Tabs";
import UserProfile from "./_source/components/UserProfile";

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
const page = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const tabName = params.tabName ? (params.tabName as string) : "recipe";

  return (
    <div className=" bg-foundation-tertiary min-h-screen">
      <MyPageHeader />
      <UserProfile />
      <TabsContainer tabName={tabName} />
      <Recipe />
      <div className="px-4 mb-20"></div>
    </div>
  );
};

export default page;

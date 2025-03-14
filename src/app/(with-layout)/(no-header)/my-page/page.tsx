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
    <div className=" bg-foundation-tertiary min-h-screen pb-20">
      <MyPageHeader />
      <UserProfile />
      <TabsContainer tabName={tabName} />
      {tabName === "recipe" && <Recipe />}
    </div>
  );
};

export default page;

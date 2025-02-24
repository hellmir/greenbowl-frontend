import MyPageHeader from "./_source/components/Header";
import TabsContainer from "./_source/components/Tabs";
import UserProfile from "./_source/components/UserProfile";

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
const page = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const tabName = params.tabName ? (params.tabName as string) : "recipe";

  return (
    <div>
      <MyPageHeader />

      <UserProfile />
      <TabsContainer tabName={tabName} />
    </div>
  );
};

export default page;

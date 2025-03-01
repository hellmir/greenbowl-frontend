import AddIngredientContainer from "./_source/components";

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const page = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const categoryId = params.categoryId ? +(params.categoryId as string) : 1;

  return (
    <div className="w-full">
      <AddIngredientContainer categoryId={categoryId} />
    </div>
  );
};

export default page;

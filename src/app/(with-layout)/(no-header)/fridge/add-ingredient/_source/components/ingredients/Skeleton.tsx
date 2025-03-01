import { Skeleton } from "@/components/ui/skeleton";

const CategoryIngredientSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {Array.from({ length: 14 }).map((_, idx) => (
        <Skeleton key={idx} className=" relative w-full h-9 rounded-lg" />
      ))}
    </div>
  );
};

export default CategoryIngredientSkeleton;

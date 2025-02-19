import categoryItems from "@/constants/categoryItems";

const IngredientsContainer = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {categoryItems.map((item) => (
        <div
          key={item.id}
          className="w-full h-9 bg-foundation-secondary border border-border-default label-xs text-content-secondary flex justify-center items-center hover:cursor-pointer"
        >
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default IngredientsContainer;

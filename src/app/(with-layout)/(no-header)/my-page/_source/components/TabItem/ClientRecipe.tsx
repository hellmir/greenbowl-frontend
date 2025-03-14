"use client";

import { BookmarkRecipe, deleteBookmarkRecipe } from "../../action/recipe";

import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaFire } from "react-icons/fa6";
import { Bookmark } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAiRecipe } from "@/store/aiRecipeStore";
import Image from "next/image";
import { useState, useTransition } from "react";

import useAfterMutationEffects from "@/hooks/useAfterMutationEffects";
import { useAlertStore } from "@/store/alertStore";
import { MenuApiResponse } from "@/app/api/test/recipe/ai/gpt/menus";

interface Props {
  recipes: BookmarkRecipe[];
}

const ClientRecipe = ({ recipes }: Props) => {
  return (
    <>
      {recipes.map((recipe, idx) => (
        <RecommendedMenu key={recipe.id} index={idx} recipe={recipe} />
      ))}
    </>
  );
};

interface RecommendedProps {
  index: number;
  recipe: BookmarkRecipe;
}

const RecommendedMenu = ({ index, recipe }: RecommendedProps) => {
  const router = useRouter();
  const { setSelectedRecipe } = useAiRecipe();
  const [isBookmarked, setIsBookmarked] = useState(true);
  const [isPending, startTransition] = useTransition();
  const afterAction = useAfterMutationEffects("북마크 삭제 성공");
  const play = useAlertStore((state) => state.play);

  const name: string = recipe.name;
  const representativeImageUrl = recipe.imageUrl
    ? recipe.imageUrl
    : process.env.NEXT_PUBLIC_DEFAULT_IMAGE_URL;
  const cookingTime = recipe.cookingTime;
  const calories = recipe.calories;

  const handleClick = () => {
    if (isPending) return;
    const newRecipes: MenuApiResponse = {
      name: recipe.name,
      cookingTime: recipe.cookingTime,
      calories: recipe.calories,
      imageUrls: [recipe.imageUrl],
    };
    setSelectedRecipe(newRecipes);
    router.push(`/recipe/ai/${recipe.id}`);
  };
  const handleClickBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPending) return;
    startTransition(async () => {
      try {
        setIsBookmarked((prev) => !prev);
        await deleteBookmarkRecipe(recipe.id);
        afterAction();
      } catch {
        play("삭제에 실패했습니다");
        router.refresh();
      }
    });
  };
  return (
    <div
      key={index}
      className={` relative flex items-start gap-5 p-3  rounded-lg shadow-md h-32 mb-8 ${isPending ? "bg-foundation-secondary opacity-65" : "bg-foundation-secondary"}`}
      onClick={handleClick}
    >
      <Image
        src={representativeImageUrl as string}
        alt="레시피 이미지"
        width={127}
        height={87}
        className="w-[127px] h-[87px] object-cover rounded-lg"
      />

      <div className="flex flex-col flex-1 justify-center gap-1 ">
        <p className=" heading-s text-content-secondary">{name}</p>

        <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
          <MdOutlineAccessTimeFilled className="text-content-quarternary" />
          <span className="text-foundation-primary">{cookingTime}</span>
          <span className="text-content-quarternary">min</span>
        </div>

        <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
          <FaFire className="text-content-quarternary" />
          <span className="text-green-600">{calories}</span>{" "}
          <span className="text-content-quarternary">kcal</span>
        </div>
      </div>

      <Bookmark
        className={`w-6 h-6 text-content-tertiary cursor-pointer ${isBookmarked ? "text-foundation-accent" : ""}`}
        onClick={(e) => {
          handleClickBookmark(e);
        }}
        fill={`${isBookmarked ? "#ff974b" : "white"}`}
      />
    </div>
  );
};

export default ClientRecipe;

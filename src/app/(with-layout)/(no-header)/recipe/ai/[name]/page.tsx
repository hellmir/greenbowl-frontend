/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { IoIosArrowBack } from "react-icons/io";
import { useAiRecipe } from "@/store/aiRecipeStore";
import { useEffect, useRef, useState } from "react";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaFire } from "react-icons/fa6";
import {
  AddDetailedBookmarkRequestPayload,
  AiDetailedMenusRequestPayload,
  DetailedMenuOptions,
  Nutrition,
  UsedIngredient,
} from "@/app/(with-layout)/(no-header)/recipe/ai/_source/config";
import { POST as postMenus } from "@/app/(with-layout)/(no-header)/recipe/ai/_source/actions/menus";
import {
  DELETE as deleteBookmark,
  POST as postBookmark,
} from "@/app/(with-layout)/(no-header)/recipe/ai/_source/actions/bookmark";
import { Bookmark } from "lucide-react";
import { GoShareAndroid } from "react-icons/go";
import RecipeStreaming from "@/app/(with-layout)/(no-header)/recipe/ai/[name]/_source/components/RecipeStreaming";

const Page = () => {
  const { selectedRecipe, availableIngredients } = useAiRecipe();
  const recipeName = selectedRecipe?.name;
  const cookingTime = selectedRecipe?.cookingTime;
  const calories = selectedRecipe?.calories;
  const representativeImageUrl =
    selectedRecipe?.imageUrls && selectedRecipe.imageUrls.length > 0
      ? selectedRecipe.imageUrls[0]
      : process.env.NEXT_PUBLIC_DEFAULT_IMAGE_URL;

  const [oneLineIntroduction, setOneLineIntroduction] = useState<string>();
  const [usedIngredients, setUsedIngredients] = useState<UsedIngredient[]>([]);
  const [nutrition, setNutrition] = useState<Nutrition>({
    calories: calories,
    carbohydrate: undefined,
    protein: undefined,
    fat: undefined,
    sodium: undefined,
    sugar: undefined,
  });

  const [recipeIntroduction, setRecipeIntroduction] = useState<string>("");

  const handleClickArrowBack = () => {
    window.history.back();
  };

  const bookmarkRef = useRef<SVGSVGElement | null>(null);
  let isBookmarked = false;

  const handleClickBookmark = async () => {
    isBookmarked = !isBookmarked;

    if (bookmarkRef.current) {
      bookmarkRef.current.classList.toggle("text-yellow-500", isBookmarked);
      bookmarkRef.current.classList.toggle("text-gray-500", !isBookmarked);
    }

    const payload: AddDetailedBookmarkRequestPayload = {
      name: recipeName,
      imageUrl: representativeImageUrl,
      cookingTime: cookingTime,
      calories: calories,
      oneLineIntroduction: oneLineIntroduction,
      ingredients: usedIngredients,
      introduction: recipeIntroduction,
      nutrition: nutrition,
    };

    if (isBookmarked) {
      await postBookmark(payload);
      return;
    }

    await deleteBookmark(recipeName!);
  };

  const AI_MODEL = process.env.NEXT_PUBLIC_AI_DETAILED_MENU_REQUEST_MODEL!;
  const TEMPLATE = process.env.NEXT_PUBLIC_AI_DETAILED_MENU_REQUEST_TEMPLATE!;
  const SECRET_KEY = process.env.NEXT_PUBLIC_AI_DETAILED_MENU_SECRET_KEY!;

  const detailedMenuOptions: DetailedMenuOptions = {
    name: [recipeName],
    availableIngredients: availableIngredients,
    cookingTime: [`${cookingTime}분`],
    calories: [`${calories}kcal`],
  };

  useEffect(() => {
    if (!recipeName) {
      return;
    }

    const cachedData = sessionStorage.getItem(`recipe_${recipeName}`);

    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      setOneLineIntroduction(parsedData.oneLineIntroduction);
      setUsedIngredients(parsedData.usedIngredients);
      setNutrition(parsedData.nutrition);
      setRecipeIntroduction(parsedData.recipeIntroduction);

      return;
    }

    const fetchAdditionalInfo = async () => {
      const payload: AiDetailedMenusRequestPayload = {
        llm_type: AI_MODEL,
        template: TEMPLATE,
        options: detailedMenuOptions,
        secret_key: SECRET_KEY,
      };

      console.log("레시피 추가 정보 요청 전송");
      const data = await postMenus(payload);

      setOneLineIntroduction(data.oneLineIntroduction);
      setUsedIngredients(data.usedIngredients);
      setNutrition((prev) => ({
        ...prev,
        carbohydrate: data.carbohydrate,
        protein: data.protein,
        fat: data.fat,
        sodium: data.sodium,
        sugar: data.sugar,
      }));
    };

    fetchAdditionalInfo();
  }, [selectedRecipe, availableIngredients]);

  useEffect(() => {
    if (recipeIntroduction && usedIngredients.length > 0) {
      sessionStorage.setItem(
        `recipe_${recipeName}`,
        JSON.stringify({
          oneLineIntroduction,
          usedIngredients,
          nutrition,
          recipeIntroduction,
        })
      );
    }
  }, [recipeIntroduction]);

  return (
    <div className="mt-4 px-4 pb-16">
      {/* TODO: 로딩 페이지 완성 후 대체 */}
      {usedIngredients.length === 0 ? (
        <p className="text-center text-gray-500">로딩 중...</p>
      ) : (
        <div className="flex flex-col justify-between h-screen">
          <div>
            <div className="grid grid-cols-3 items-center mb-6">
              <IoIosArrowBack
                className="text-2xl cursor-pointer size-8"
                onClick={handleClickArrowBack}
              />
              <h2 className="text-center text-2xl font-bold">추천 레시피</h2>
              <div className="flex justify-end gap-2">
                <GoShareAndroid className="w-8 h-8 mx-2" />
                <Bookmark
                  className="w-8 h-8"
                  onClick={handleClickBookmark}
                  ref={bookmarkRef}
                />
              </div>
            </div>

            <div className="relative w-full h-100">
              <img
                src={representativeImageUrl}
                alt="메뉴 이미지"
                className="w-full h-full object-cover"
              />
              <img
                src="/svg/aibanner.svg"
                alt="배너"
                className="inline-block w-full h-13"
              />
            </div>

            <h1 className="text-2xl font-bold text-start mt-8">{recipeName}</h1>

            <div className="text-gray-500 mt-3">{oneLineIntroduction}</div>

            <div className="flex justify-start gap-4 text-gray-600 mt-3">
              <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
                <MdOutlineAccessTimeFilled />
                <span className="text-green-600">{cookingTime}</span> min
              </div>
              <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
                <FaFire />
                <span className="text-green-600">{calories}</span> kcal
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-bold border-b pb-2">재료</h2>
              <ul className="mt-2 space-y-2 flex flex-col">
                {usedIngredients.length > 0 ? (
                  usedIngredients.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between p-2 border-b-2 border-gray-200"
                    >
                      <span className="flex">
                        <img
                          src="/image/meat.png"
                          alt={item.name}
                          className="w-7 h-7 mx-2"
                        />
                        {item.name}
                      </span>
                      <span>{item.weight}g</span>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500"></p>
                )}
              </ul>
            </div>

            <RecipeStreaming
              usedIngredients={usedIngredients}
              recipeName={recipeName}
              cookingTime={cookingTime}
              calories={calories}
              recipeIntroduction={recipeIntroduction}
              setRecipeIntroduction={setRecipeIntroduction}
            />

            <div className="mt-8">
              <h2 className="text-lg font-bold border-b pb-2">영양 정보</h2>
              <div className="bg-gray-200 rounded-lg grid grid-cols-3 gap-4 mb-24">
                <div className="p-3 text-sm text-gray-400 text-center">
                  <p className="font-semibold">열량</p>
                  <p className="text-green-600">{nutrition.calories}</p>
                </div>
                <div className="p-3 text-sm text-gray-400 text-center">
                  <p className="font-semibold">탄수화물</p>
                  <p className="text-green-600">{nutrition.carbohydrate}</p>
                </div>
                <div className="p-3 text-sm text-gray-400 text-center">
                  <p className="font-semibold">단백질</p>
                  <p className="text-green-600">{nutrition.protein}</p>
                </div>
                <div className="p-3 text-sm text-gray-400 text-center">
                  <p className="font-semibold">지방</p>
                  <p className="text-green-600">{nutrition.fat}</p>
                </div>
                <div className="p-3 text-sm text-gray-400 text-center">
                  <p className="font-semibold">나트륨</p>
                  <p className="text-green-600">{nutrition.sodium}</p>
                </div>
                <div className="p-3 text-sm text-gray-400 text-center">
                  <p className="font-semibold">당류</p>
                  <p className="text-green-600">{nutrition.sugar}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

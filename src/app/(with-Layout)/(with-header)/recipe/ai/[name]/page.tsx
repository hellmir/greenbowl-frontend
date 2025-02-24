"use client";

import {IoIosArrowBack} from "react-icons/io";
import {useAiRecipe} from "@/store/aiRecipeStore";
import {useEffect, useState} from "react";
import {MdOutlineAccessTimeFilled} from "react-icons/md";
import {FaFire} from "react-icons/fa6";
import {AiDetailedMenusRequestPayload, DetailedMenuOptions, UsedIngredient} from "@/app/api/recipe/ai/config";
import {POST} from "@/app/api/recipe/ai/gpt/menus";
import {Bookmark} from "lucide-react";
import {GoShareAndroid} from "react-icons/go";

const Page = () => {
    const {selectedRecipe, availableIngredients} = useAiRecipe();
    const recipeName = selectedRecipe?.name;
    const cookingTime = selectedRecipe?.cookingTime;
    const calories = selectedRecipe?.calories;
    const representativeImageUrl = selectedRecipe?.imageUrls ? selectedRecipe.imageUrls[0] : process.env.NEXT_PUBLIC_DEFAULT_IMAGE_URL

    useEffect(() => {
        const AI_MODEL: string = process.env.NEXT_PUBLIC_AI_MENUS_REQUEST_MODEL!;
        const TEMPLATE: string = process.env.NEXT_PUBLIC_AI_DETAILED_MENU_REQUEST_TEMPLATE!;
        const detailedMenuOptions: DetailedMenuOptions = {
            name: [recipeName],
            availableIngredients: availableIngredients,
            cookingTime: [cookingTime + "분"],
            calories: [calories + "kcal"],
        }
        const SECRET_KEY: string = process.env.NEXT_PUBLIC_SECRET_KEY!;

        const fetchAdditionalInfo = async () => {
            const payload: AiDetailedMenusRequestPayload = {
                llm_type: AI_MODEL,
                template: TEMPLATE,
                options: detailedMenuOptions,
                secret_key: SECRET_KEY
            }

            console.log("레시피 추가 정보 요청 전송")
            const data = await POST(payload);
            setOneLineIntroduction(data.oneLineIntroduction);
            setUsedIngredients(data.usedIngredients);
            setNutrition((prev) => prev.map((item) => ({
                ...item,
                value: item.label === "탄수화물" ? data.carbohydrate :
                    item.label === "단백질" ? data.protein :
                        item.label === "지방" ? data.fat :
                            item.label === "나트륨" ? data.sodium :
                                item.label === "당류" ? data.sugar :
                                    item.value
            })));
        };

        fetchAdditionalInfo();
    }, [selectedRecipe, availableIngredients]);

    const [oneLineIntroduction, setOneLineIntroduction] = useState<string>()
    const [usedIngredients, setUsedIngredients] = useState<UsedIngredient[]>([]);
    const [nutrition, setNutrition] = useState<{ label: string; value: number | undefined }[]>([
        {label: "열량", value: calories},
        {label: "탄수화물", value: undefined},
        {label: "단백질", value: undefined},
        {label: "지방", value: undefined},
        {label: "나트륨", value: undefined},
        {label: "당류", value: undefined},
    ]);
    const [recipeIntroduction, setRecipeIntroduction] = useState<string[]>([]);

    return (
        <div className="mt-[60px] px-4 pb-16">
            <div className="flex flex-col justify-between h-screen">
                <div>
                    <div className="grid grid-cols-3 items-center mb-6">
                        <IoIosArrowBack className="text-2xl cursor-pointer size-8"/>
                        <h2 className="text-center text-2xl font-bold">추천 레시피</h2>
                        <div className="flex justify-end gap-2">
                            <GoShareAndroid className="w-8 h-8 mx-2"/>
                            <Bookmark className="w-8 h-8"/>
                        </div>
                    </div>

                    <div className="relative w-full h-100">
                        <img
                            src={representativeImageUrl}
                            alt="메뉴 이미지"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src="/image/aibanner.png"
                            alt="배너"
                            className="inline-block w-full h-13"
                        />
                    </div>

                    <h1 className="text-2xl font-bold text-start mt-8">
                        {recipeName}
                    </h1>

                    <div className="text-gray-500 mt-3">
                        {oneLineIntroduction}
                    </div>

                    <div className="flex justify-start gap-4 text-gray-600 mt-3">
                        <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
                            <MdOutlineAccessTimeFilled/>
                            <span className="text-green-600">{selectedRecipe && selectedRecipe.cookingTime}</span> min
                        </div>
                        <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
                            <FaFire/>
                            <span className="text-green-600">{selectedRecipe && selectedRecipe.calories}</span> kcal
                        </div>
                    </div>

                    <p className="text-center text-gray-700 mt-6 font-semibold">
                    </p>

                    <div className="mt-8">
                        <h2 className="text-lg font-bold border-b pb-2">재료</h2>
                        <ul className="mt-2 space-y-2 flex flex-col">
                            {usedIngredients.length > 0 ? (
                                usedIngredients.map((item, index) => (
                                    <li key={index} className="flex justify-between p-2 border-b-2 border-gray-200">
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

                    <div className="mt-8">
                        <h2 className="text-lg font-bold border-b pb-2">레시피</h2>
                        <ol className="mt-2 space-y-3">
                            {recipeIntroduction}
                        </ol>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-lg font-bold border-b pb-2">영양 정보</h2>
                        <div className=" bg-gray-200 rounded-lg grid grid-cols-3 gap-4 mt-4">
                            {nutrition.map((item, index) => (
                                <div key={index} className="p-3 text-sm text-gray-400 text-center">
                                    <p className="font-semibold">{item.label}</p>
                                    <p className="text-green-600">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;

"use client";

import {useEffect, useState} from "react";
import {IoIosArrowBack} from "react-icons/io";
import {AiMenusRequestPayload, MenuApiResponse, MenuOptions} from "@/app/api/recipe/ai/config";
import {POST} from "@/app/api/recipe/ai/gpt/menus";
import {useAiRecipe} from "@/store/aiRecipeStore";
import RecommendedMenu from "@/app/(with-Layout)/(with-header)/recipe/ai/_source/components/RecommendedMenu";
import {useSearchParams} from "next/navigation";

const Page = () => {
    const {setAvailableIngredients} = useAiRecipe();
    const [recipes, setRecipes] = useState<MenuApiResponse[]>([]);
    const searchParams = useSearchParams();

    useEffect(() => {
        /*
        - 기존 mock 요청 -
        mockFetchRecipes().then((data) => setRecipes(data));
        */

        const AI_MODEL: string = process.env.NEXT_PUBLIC_AI_MENUS_REQUEST_MODEL!;
        const TEMPLATE: string = process.env.NEXT_PUBLIC_AI_MENUS_REQUEST_TEMPLATE!;

        const availableIngredients = searchParams.getAll("ingredients");
        
        /* 기존 파라미터 대체
        setAvailableIngredients(availablePorkBellyIngredients);
        */
        setAvailableIngredients(availableIngredients);

        const cookingTimeLimit = searchParams.get("cookingTime");
        const cuisine = searchParams.get("cuisine");

        const selectedOptions: MenuOptions = {
            ingredients: availableIngredients,
            cookingTimeLimit: [cookingTimeLimit],
            cuisineType: [cuisine]
        };

        const SECRET_KEY: string = process.env.NEXT_PUBLIC_AI_MENUS_SECRET_KEY!;

        const fetchMenus = async () => {
            const payload: AiMenusRequestPayload = {
                llm_type: AI_MODEL,
                template: TEMPLATE,
                options: selectedOptions,
                secret_key: SECRET_KEY
            }

            const data = await POST(payload);
            console.log("받은 데이터: ", data);

            if (Array.isArray(data)) {
                setRecipes(data);
            } else {
                console.error("응답 데이터가 객체가 아닙니다. 객체로 파싱합니다:\n", data);
                setRecipes(parseToObject(data));
            }
        };

        fetchMenus();
    }, []);

    const parseToObject = (data: string) => {
        try {
            return JSON.parse(data);
        } catch (error) {
            console.error("JSON 파싱에 실패했습니다: ", error);
        }
    }

    return (
        <div className="mt-[60px] px-4 pb-16">
            <div className="flex flex-col justify-between h-screen">
                <div>
                    <div className="flex items-center mb-14">
                        <IoIosArrowBack
                            className="text-2xl cursor-pointer size-8"/>
                        <h2 className="flex-1 text-center text-2xl font-bold">AI 추천 메뉴</h2>
                    </div>
                    <p className="text-start text-gray-800 text-base mb-10 font-semibold text-xl">
                        원하는 메뉴를 선택해 주세요!
                    </p>

                    <div className="mt-4 space-y-4">
                        {/* TODO: 로딩 페이지 완성 후 대체 */}
                        {recipes.length === 0 ? (
                            <p className="text-center text-gray-500">로딩 중...</p>
                        ) : (
                            recipes.map((recipe, index) => (
                                <RecommendedMenu key={index} index={index} recipe={recipe}/>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;

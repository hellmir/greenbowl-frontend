"use client";

import {Suspense, useEffect, useState} from "react";

import {
    AiMenusRequestPayload,
    MenuApiResponse,
    MenuOptions,
} from "@/app/(with-layout)/(no-header)/recipe/ai/_source//config";
import {GET} from "@/app/(with-layout)/(no-header)/recipe/ai/_source/actions/menus";
import {useAiRecipe} from "@/store/aiRecipeStore";
import RecommendedMenu from "@/app/(with-layout)/(no-header)/recipe/ai/_source/components/RecommendedMenu";
import {useSearchParams} from "next/navigation";
import Header from "./_source/components/Header";

const page = () => {
    return (
        <Suspense>
            <Page/>
        </Suspense>
    );
};

const Page = () => {
    const {setAvailableIngredients} = useAiRecipe();
    const [recipes, setRecipes] = useState<MenuApiResponse[]>([]);
    const searchParams = useSearchParams();

    useEffect(() => {
        /*
                    - 기존 mock 요청 -
                    mockFetchRecipes().then((data) => setRecipes(data));
                    */

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
            cuisineType: [cuisine],
        };

        const cachedData = sessionStorage.getItem("ai_recipes");
        const cachedParams = sessionStorage.getItem("option_params");

        if (
            cachedData &&
            cachedParams &&
            cachedParams === JSON.stringify(selectedOptions)
        ) {
            setRecipes(JSON.parse(cachedData));
            sessionStorage.setItem("isRefreshed", "false");

            return;
        }

        localStorage.removeItem("availableIngredients");
        sessionStorage.setItem("option_params", JSON.stringify(selectedOptions));

        const fetchMenus = async () => {
            const payload: AiMenusRequestPayload = {
                options: selectedOptions,
            };

            const data = await GET(payload);
            console.log("받은 데이터: ", data);

            if (Array.isArray(data)) {
                setRecipes(data);
                sessionStorage.setItem("ai_recipes", JSON.stringify(data));
                console.log(data, "데이터");
            } else {
                console.error(
                    "응답 데이터가 객체가 아닙니다. 객체로 파싱합니다:\n",
                    data
                );
                const parsedData = parseToObject(data);
                setRecipes(parsedData);
                sessionStorage.setItem("ai_recipes", JSON.stringify(parsedData));
            }
        };

        fetchMenus();
    }, [searchParams, setAvailableIngredients]);

    const parseToObject = (data: string) => {
        try {
            return typeof data === "string" ? JSON.parse(JSON.parse(data)) : JSON.parse(data);
        } catch (error) {
            console.error("JSON 파싱에 실패했습니다: ", error);
            return [];
        }
    };

    return (
        <div className="bg-foundation-tertiary px-4 min-h-screen ">
            <div className="mb-20">
                <Header/>
                <p className="mt-5 mb-5 heading-m text-content-secondary">
                    원하는 메뉴를 선택해 주세요!
                </p>

                <div className="mt-4 space-y-4 mb-20">
                    {/* TODO: 로딩 페이지 완성 후 대체 */}
                    {recipes.length === 0 ? (
                        <p className="text-center text-gray-500 heading-m">로딩 중...</p>
                    ) : (
                        recipes.map((recipe, index) => (
                            <RecommendedMenu key={index} index={index} recipe={recipe}/>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default page;

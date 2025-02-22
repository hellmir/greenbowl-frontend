"use client";

import {useEffect, useState} from "react";
import {IoIosArrowBack} from "react-icons/io";
import RecommendedMenu from "@/app/recipe/ai/_source/components/RecommendedMenu";
import {RecipeApiResponse} from "@/app/api/test/recipe/ai/gpt/menus"
import {POST} from "@/app/api/recipe/ai/gpt/menus";
import {AiRequestPayload} from "@/app/api/recipe/ai/config";

const Page = () => {
    const [recipes, setRecipes] = useState<RecipeApiResponse[]>([]);

    useEffect(() => {
        /*
        - 기존 mock 요청 -
        mockFetchRecipes().then((data) => setRecipes(data));
         */

        const AI_MODEL: string = process.env.NEXT_PUBLIC_AI_MENUS_REQUEST_MODEL!;
        const TEMPLATE: string = process.env.NEXT_PUBLIC_AI_MENUS_REQUEST_TEMPLATE!;
        const SECRET_KEY: string = process.env.NEXT_PUBLIC_SECRET_KEY!;

        const fetchRecipes = async () => {
            const payload: AiRequestPayload = {
                llm_type: AI_MODEL,
                template: TEMPLATE,
                secret_key: SECRET_KEY
            }

            const data = await POST(payload);

            if (Array.isArray(data)) {
                setRecipes(data);
            } else {
                console.error("응답 데이터가 객체가 아닙니다. 객체로 파싱합니다:\n", data);
                setRecipes(parseToObject(data));
            }
        };

        fetchRecipes();
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
                        <IoIosArrowBack className="text-2xl cursor-pointer size-8"/>
                        <h2 className="flex-1 text-center text-2xl font-bold">AI 추천 메뉴</h2>
                    </div>
                    <p className="text-start text-gray-800 text-base mb-10 font-semibold text-xl">
                        식재료 관리가 고민이시라면
                    </p>

                    <div className="mt-4 space-y-4">
                        {recipes.length === 0 ? (
                            <p className="text-center text-gray-500">로딩 중...</p>
                        ) : (
                            recipes.map((recipe, index) => (
                                <RecommendedMenu key={index} index={index} recipe={recipe}/>
                            ))
                        )}
                    </div>
                </div>
                <div className="mt-6">
                    <button className="w-full py-3 bg-green-500 text-white rounded-xl font-medium mb-24">
                        선택 완료
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;

import {Bookmark} from "lucide-react";
import {useRouter} from "next/navigation";
import {useAiRecipe} from "@/store/aiRecipeStore";
import {MenuApiResponse} from "@/app/(with-layout)/(no-header)/recipe/ai/_source//config";
import {AddBookmarkRequestPayload} from "@/app/(with-layout)/(no-header)/recipe/ai/_source/config";
import {
    DELETE as deleteBookmark,
    POST as postBookmark,
} from "@/app/(with-layout)/(no-header)/recipe/ai/_source/actions/bookmark";
import React, {useRef, useState} from "react";
import {useAlertStore} from "@/store/alertStore";
import ClockSvg from "@/components/svg/Clock";
import FireSvg from "@/components/svg/Fire";

interface Props {
    index: number;
    recipe: MenuApiResponse;
}

const RecommendedMenu = ({index, recipe}: Props) => {
    const router = useRouter();
    const {setSelectedRecipe} = useAiRecipe();

    const name: string = recipe.name;
    const representativeImageUrl =
        recipe.imageUrls && recipe.imageUrls.length > 0 && recipe.imageUrls[0]?.startsWith("https://")
            ? recipe.imageUrls[0]
            : process.env.NEXT_PUBLIC_DEFAULT_IMAGE_URL;
    const cookingTime = recipe.cookingTime;
    const calories = recipe.calories;

    const handleClick = () => {
        setSelectedRecipe(recipe);
        router.push(`/recipe/ai/${encodeURIComponent(name)}`);
    };

    const bookmarkRef = useRef<SVGSVGElement | null>(null);
    const [isBookmarked, setIsBookmarked] = useState(sessionStorage.getItem(`isBookmarked_${name}`) === "true");
    const {setMessage, setIsOpen} = useAlertStore();
    const [id, setId] = useState();

    const handleClickBookmark = async (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsBookmarked(!isBookmarked);

        if (bookmarkRef.current) {
            bookmarkRef.current.classList.toggle("text-foundation-accent", isBookmarked);
            bookmarkRef.current.classList.toggle("text-gray-500", !isBookmarked);
        }

        if (!isBookmarked) {
            setMessage("북마크에 추가되었습니다.");
            setIsOpen(true);

            const payload: AddBookmarkRequestPayload = {
                name: name,
                imageUrl: representativeImageUrl,
                cookingTime: cookingTime,
                calories: calories,
            };
            sessionStorage.setItem(`isBookmarked_${name}`, "true");

            await postBookmark(payload, setId);

            return;
        }

        setMessage("북마크에서 삭제되었습니다.");
        setIsOpen(true);
        sessionStorage.setItem(`isBookmarked_${name}`, "false");
        await deleteBookmark(name);
    };

    return (
        <div
            key={index}
            className={` flex items-start gap-5 p-3  bg-foundation-secondary rounded-2xl  h-32 ${
                index === 0 ? "mb-2" : "mb-8"
            }`}
            onClick={handleClick}
        >
            <img
                src={representativeImageUrl as string}
                alt="레시피 이미지"
                width={127}
                height={87}
                className="w-[127px] h-[87px] object-cover rounded-lg"
            />

            <div className="flex flex-col flex-1 justify-center gap-1 ">
                <p className=" heading-s text-content-secondary">{name}</p>

                <div className="flex items-center gap-1 heading-s text-gray-600">
                    <div className="h-full flex items-start mt-1">
                        <ClockSvg/>
                    </div>
                    <span className="text-foundation-primary">{cookingTime}</span>
                    <span className="text-content-quarternary">min</span>
                </div>

                <div className="flex items-center gap-1 heading-s text-gray-600">
                    <div className="h-full flex items-start">
                        <FireSvg/>
                    </div>
                    <span className="text-foundation-primary">{calories}</span>{" "}
                    <span className="text-content-quarternary">kcal</span>
                </div>

                {/*
                - 인분 삭제 -
                <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
                    <IoPerson/>
                    <span className="text-green-600">{recipe.servings}</span> 인분
                </div>
                */}
            </div>

            <Bookmark
                className={`w-6 h-6 text-content-tertiary cursor-pointer ${isBookmarked ? "text-foundation-accent" : ""}`}
                onClick={(e) => handleClickBookmark(e)}
                fill={`${isBookmarked ? "#ff974b" : "white"}`}
                ref={bookmarkRef}
            />
        </div>
    );
};

export default RecommendedMenu;

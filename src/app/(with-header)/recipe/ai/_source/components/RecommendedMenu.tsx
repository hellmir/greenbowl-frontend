import {MdOutlineAccessTimeFilled} from "react-icons/md";
import {FaFire} from "react-icons/fa6";
import {Bookmark} from "lucide-react";
import {RecipeApiResponse} from "@/app/api/test/recipe/ai/gpt/menus";

interface Props {
    index: number,
    recipe: RecipeApiResponse,
}

const RecommendedMenu = ({index, recipe}: Props) => {
    const name: string = recipe.name;
    const imageUrls: [string | undefined]
        = recipe.imageUrls ? recipe.imageUrls : [process.env.NEXT_PUBLIC_DEFAULT_IMAGE_URL];

    return (
        <div
            key={index}
            className="flex items-start gap-5 p-3 bg-scale-beige-300 rounded-lg shadow-md h-32"
        >
            <img
                src={imageUrls[0]}
                alt="레시피 이미지"
                className="w-40 h-full object-cover rounded-lg"
            />

            <div className="flex flex-col flex-1 justify-center gap-1">
                <p className="text-base font-semibold text-xl">{name}</p>

                <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
                    <MdOutlineAccessTimeFilled/>
                    <span className="text-green-600">{recipe.cookingTime}</span> min
                </div>

                <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
                    <FaFire/>
                    <span className="text-green-600">{recipe.calories}</span> kcal
                </div>

                {/*
                - 인분 삭제 -
                <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
                    <IoPerson/>
                    <span className="text-green-600">{recipe.servings}</span> 인분
                </div>
                */}
            </div>

            <Bookmark className="w-7 h-7 text-gray-400 cursor-pointer"/>
        </div>
    );
}

export default RecommendedMenu;

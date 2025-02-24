import {MdOutlineAccessTimeFilled} from "react-icons/md";
import {FaFire} from "react-icons/fa6";
import {Bookmark} from "lucide-react";
import {useRouter} from "next/navigation";
import {useAiRecipe} from "@/store/aiRecipeStore";
import {MenuApiResponse} from "@/app/api/recipe/ai/config";

interface Props {
    index: number,
    recipe: MenuApiResponse,
}

const RecommendedMenu = ({index, recipe}: Props) => {
    const router = useRouter();
    const {setSelectedRecipe} = useAiRecipe();

    const name: string = recipe.name;
    const representativeImageUrl
        = recipe.imageUrls && recipe.imageUrls.length > 0 ? recipe.imageUrls[0] : process.env.NEXT_PUBLIC_DEFAULT_IMAGE_URL;

    const handleClick = () => {
        setSelectedRecipe(recipe);
        router.push(`/recipe/ai/${encodeURIComponent(name)}`);
    };

    return (
        <div
            key={index}
            className="flex items-start gap-5 p-3 bg-scale-beige-300 rounded-lg shadow-md h-32"
            onClick={handleClick}
        >
            <img
                src={representativeImageUrl}
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

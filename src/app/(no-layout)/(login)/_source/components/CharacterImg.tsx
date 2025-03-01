/* eslint-disable @next/next/no-img-element */
import imagePath from "@/constants/imagePath";

const CharacterImg = () => {
  return (
    <div className="flex justify-center">
      <img
        src={imagePath.cookingCharacter.src}
        alt={imagePath.cookingCharacter.alt}
      />
    </div>
  );
};

export default CharacterImg;

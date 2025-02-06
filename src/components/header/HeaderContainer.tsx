import imagePath from "@/constants/imagePath";
import Image from "next/image";
import Link from "next/link";

const HeaderContainer = () => {
  return (
    <header className="pl-4 pr-4 h-[54px] w-full max-w-[599px] flex items-center justify-between fixed">
      <Link href={"/myFridge"}>
        <Image
          className=" hover:cursor-pointer"
          src={imagePath.logo.src}
          alt={imagePath.logo.alt}
          height={12}
          width={118}
        />
      </Link>
      <Image
        className=" hover:cursor-pointer"
        src={imagePath.profile.src}
        alt={imagePath.profile.alt}
        height={32}
        width={32}
      />
    </header>
  );
};

export default HeaderContainer;

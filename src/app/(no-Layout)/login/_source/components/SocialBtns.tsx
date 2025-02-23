"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import KakaoLoginSvg from "@/components/svg/Kakao";
import GoogleLoginSvg from "@/components/svg/Google";
import route from "@/constants/route";

const SocialLoginButtons = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={async () => await signIn("kakao")}
        className="h-14 rounded-xl bg-[#FDE500] text-black py-3 px-5 flex items-center justify-center"
      >
        <KakaoLoginSvg />
        <p className="label-l ml-2">카카오로 로그인</p>
      </button>

      <button
        onClick={async () => await signIn("google")}
        className="h-14 rounded-xl bg-white text-black py-3 px-5 flex items-center justify-center border border-[#E6E6E6]"
      >
        <GoogleLoginSvg />
        <p className="label-l ml-2">구글로 로그인</p>
      </button>

      <button
        onClick={() => router.push(route.recipe.root)}
        className="h-14 rounded-xl bg-white text-black py-3 px-5 flex items-center justify-center border border-[#E6E6E6]"
      >
        <p className="label-l ml-2">게스트로 둘러 보기</p>
      </button>
    </div>
  );
};
export default SocialLoginButtons;

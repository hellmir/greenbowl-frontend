"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const page = () => {
  const a = useSession();
  console.log(a);
  return (
    <div className="mt-[80px]">
      <button
        onClick={async () => {
          await signIn("kakao");
        }}
      >
        로그인~
      </button>
      <button
        onClick={async () => {
          await signOut();
        }}
      >
        로그아웃~
      </button>
    </div>
  );
};

export default page;

"use client";
import { signIn, useSession } from "next-auth/react";

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
        클릭
      </button>
    </div>
  );
};

export default page;

import route from "@/constants/route";
import Link from "next/link";

const LoginTerms = () => {
  return (
    <div className="absolute bottom-0 pr-4 pb-4">
      <p className="text-center  text-content-tertiary paragraph-s">
        소셜 로그인 및 회원가입 시 그린볼의{" "}
        <span className="underline">
          <Link href={route.terms.root}>이용약관</Link>
        </span>
        과{" "}
        <span className="underline">
          <Link href={route.privacy.root}>개인정보</Link>
        </span>{" "}
        취급방침에 동의하는 것으로 간주합니다.
      </p>
    </div>
  );
};

export default LoginTerms;

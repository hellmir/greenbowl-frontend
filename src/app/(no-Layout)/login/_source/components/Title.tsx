import LogoSymbol from "@/components/svg/LogoSymbol";
import LogoType from "@/components/svg/LogoType";

const LoginTitle = () => {
  return (
    <div>
      <div className="flex items-center mb-4 justify-center gap-1">
        <LogoSymbol width={34} height={34} />
        <LogoType width={177} height={21} />
      </div>
      <div className="text-center">
        <p>나의 건강을 담은 영양가 있는</p>
        <p className="text-foundation-primary">맞춤형 AI 요리 코치</p>
      </div>
    </div>
  );
};

export default LoginTitle;

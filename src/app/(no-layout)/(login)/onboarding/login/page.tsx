import { getServerSession } from "next-auth";
import authOptions from "@/constants/authOptions";
import { redirect } from "next/navigation";
import route from "@/constants/route";
import LoginTitle from "../../_source/components/Title";
import CharacterImg from "../../_source/components/CharacterImg";
import SocialLoginButtons from "../../_source/components/SocialBtns";
import LoginTerms from "../../_source/components/Terms";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect(route.recipe.root);
  }
  return (
    <div className="flex flex-col  mb-5  bg-foundation-secondary">
      <div className="mt-20 flex flex-col  mb-5 justify-start gap-8">
        <LoginTitle />
        <CharacterImg />
        <SocialLoginButtons />
        <LoginTerms />
      </div>
    </div>
  );
};

export default LoginPage;

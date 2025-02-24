import LoginTitle from "./_source/components/Title";
import CharacterImg from "./_source/components/CharacterImg";
import SocialLoginButtons from "./_source/components/SocialBtns";
import LoginTerms from "./_source/components/Terms";
import { getServerSession } from "next-auth";
import authOptions from "@/constants/authOptions";
import { redirect } from "next/navigation";
import route from "@/constants/route";
import LoginHeader from "./_source/components/Header";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect(route.recipe.root);
  }
  return (
    <div className="flex flex-col mt-20 mb-5 justify-start gap-8">
      <LoginHeader />
      <LoginTitle />
      <CharacterImg />
      <SocialLoginButtons />
      <LoginTerms />
    </div>
  );
};

export default LoginPage;

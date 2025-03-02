import { getServerSession } from "next-auth";
import authOptions from "@/constants/authOptions";
import { redirect } from "next/navigation";
import route from "@/constants/route";
import Onboarding from "./_source";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(route.recipe.root);
  }

  return <Onboarding />;
};

export default page;

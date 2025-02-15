import { cookies } from "next/headers";
import MainHeader from "./MainHeader";

const HeaderContainer = async () => {
  const cookie = await cookies();
  const headerCookie = cookie.get("headerType")?.value as "show" | "none";

  return <MainHeader initialHeaderType={headerCookie} />;
};

export default HeaderContainer;

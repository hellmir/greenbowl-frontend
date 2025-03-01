import { NextAuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.OAUTH_KAKAO_CLIENT_ID as string,
      clientSecret: process.env.OAUTH_KAKAO_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.OAUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.OAUTH_GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/error",
  },
};

export default authOptions;

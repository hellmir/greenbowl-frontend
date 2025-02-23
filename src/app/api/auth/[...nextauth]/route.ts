import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

const handler = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.OAUTH_KAKAO_CLIENT_ID as string,
      clientSecret: process.env.OAUTH_KAKAO_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/error",
  },
});

export { handler as GET, handler as POST };

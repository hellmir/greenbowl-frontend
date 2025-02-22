import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
console.log(process.env.NEXT_PUBLIC_OAUTH_KAKAO_CLIENT_ID);
const handler = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_OAUTH_KAKAO_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_OAUTH_KAKAO_CLIENT_SECRET as string,
    }),
  ],
});

export { handler as GET, handler as POST };

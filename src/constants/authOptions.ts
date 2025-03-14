import { NextAuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import GoogleProvider from "next-auth/providers/google";
import BASE_API_URL from "./apiUrl";

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
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        try {
          const res = await fetch(`${BASE_API_URL}/api/users/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: token.email }),
          });

          if (!res.ok) throw new Error("서버 로그인 실패");

          const accessToken = res.headers.get("Authorization");

          const json = await res.json();

          const userId = json.userId;

          if (!accessToken) throw new Error("토큰이 존재하지 않습니다.");
          if (!userId) throw new Error("userId가 존재하지 않습니다.");

          token.accessToken = accessToken;
          token.userId = userId;
        } catch (error) {
          console.error("액세스 토큰 가져오기 실패:", error);
        }
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.userId = token.userId as number;
      return session;
    },
  },

  pages: {
    signIn: "/login",
    error: "/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;

import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
    error: "/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export const config = {
  matcher: ["/fridge/:path*", "/my-page/:path*", "/config/:path*"],
};

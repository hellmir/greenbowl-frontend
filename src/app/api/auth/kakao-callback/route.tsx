// app/auth/callback/route.ts
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  if (error) return redirect("/login?error=kakao_failed");
  if (!code) return redirect("/login?error=no_code");

  try {
    const response = await signIn("kakao", {
      code,
      redirect: false,
    });

    return redirect(response?.url || "/");
  } catch {
    return redirect("/login?error=auth_failed");
  }
}

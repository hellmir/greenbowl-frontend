import { NextRequest, NextResponse } from "next/server";
import route from "@/constants/route";

const hiddenHeaderPages: string[] = [
  route.myFridge.addIngredient,
  route.diet.root,
];

export function handleHeaderMiddleware(req: NextRequest, res: NextResponse) {
  const path = req.nextUrl.pathname;

  if (hiddenHeaderPages.includes(path)) {
    res.cookies.set("headerType", "none", { path: "/" });
  } else {
    res.cookies.set("headerType", "show", { path: "/" });
  }
}

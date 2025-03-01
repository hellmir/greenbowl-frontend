import { NextRequest, NextResponse } from "next/server";

export function handleQueryMiddleware(req: NextRequest) {
  const url = req.nextUrl;

  if (
    url.pathname === "/myFridge/addIngredient" &&
    !url.searchParams.has("categoryId")
  ) {
    url.searchParams.set("categoryId", "1");
    return NextResponse.redirect(url);
  }
}

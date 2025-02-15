import { NextRequest, NextResponse } from "next/server";
import { handleHeaderMiddleware } from "./middlewares/header";
import { handleQueryMiddleware } from "./middlewares/changeRouteAddIngredient";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  handleHeaderMiddleware(req, res);

  const queryResponse = handleQueryMiddleware(req);
  if (queryResponse) return queryResponse;

  return res;
}

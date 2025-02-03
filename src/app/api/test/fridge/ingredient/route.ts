import { Ingredient } from "@/app/myFridge/_source/types/fridge";
import { NextResponse } from "next/server";
export let mockIngredients: Ingredient[] = [
  { id: "1", name: "가" },
  { id: "2", name: "나" },
  { id: "3", name: "다" },
  { id: "4", name: "라" },
];

export const GET = async () => {
  return NextResponse.json(mockIngredients);
};

export const UPDATE = async (req: Request) => {
  const { id, name } = await req.json();

  mockIngredients = mockIngredients.map((ingredient) =>
    ingredient.id === id ? { id, name } : ingredient
  );

  return NextResponse.json(mockIngredients);
};

export const POST = async (req: Request) => {
  const { name } = await req.json();

  const newIngredient = { id: mockIngredients.length + 1 + "", name };
  mockIngredients = [...mockIngredients, newIngredient];

  return NextResponse.json(newIngredient);
};

export const DELETE = async (req: Request) => {
  const { id } = await req.json();

  mockIngredients = mockIngredients.filter(
    (ingredient) => ingredient.id !== id
  );
};

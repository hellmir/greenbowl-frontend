import { Ingredient } from "@/app/myFridge/_source/types/fridge";
import { NextResponse } from "next/server";
export let mockIngredients: Ingredient[] = [
  {
    id: "1",
    name: "돼지고기",
    category: 1,
    quantity: 2,
    storageCondition: "냉동",
    expirationDate: new Date("2025-08-17"),
  },
  {
    id: "5",
    name: "돼지고기2",
    category: 1,
    quantity: 4,
    storageCondition: "실온",
    expirationDate: new Date("2025-03-15"),
  },
  {
    id: "6",
    name: "돼지고기3",
    category: 1,
    quantity: 5,
    storageCondition: "냉장",
    expirationDate: new Date("2025-01-15"),
  },
  {
    id: "7",
    name: "돼지고기4",
    category: 1,
    quantity: 1,
    storageCondition: "냉장",
    expirationDate: new Date("2025-02-09"),
  },
  {
    id: "8",
    name: "돼지고기5",
    category: 1,
    quantity: 8,
    storageCondition: "냉동",
    expirationDate: new Date("2025-02-10"),
  },
  {
    id: "2",
    name: "청경채",
    category: 2,
    quantity: 5,
    storageCondition: "냉장",
    expirationDate: new Date("2025-02-06"),
  },
  {
    id: "3",
    name: "소금",
    category: 5,
    quantity: 8,
    storageCondition: "실온",
    expirationDate: new Date("2025-02-18"),
  },
  {
    id: "4",
    name: "배",
    category: 3,
    quantity: 1,
    storageCondition: "냉장",
    expirationDate: new Date("2025-03-10"),
  },
];

export const GET = async () => {
  return NextResponse.json(mockIngredients);
};

export const UPDATE = async (req: Request) => {
  const putIngredient = await req.json();

  mockIngredients = mockIngredients.map((ingredient) =>
    ingredient.id === putIngredient.id ? { ...putIngredient } : ingredient
  );

  return NextResponse.json(mockIngredients);
};

export const POST = async (req: Request) => {
  const ingredient = await req.json();

  const newIngredient = { id: mockIngredients.length + 1 + "", ...ingredient };
  mockIngredients = [...mockIngredients, newIngredient];

  return NextResponse.json(newIngredient);
};

export const DELETE = async (req: Request) => {
  const { ids } = await req.json();

  mockIngredients = mockIngredients.filter(
    (ingredient) => !ids.includes(+ingredient.id)
  );

  return NextResponse.json("success");
};

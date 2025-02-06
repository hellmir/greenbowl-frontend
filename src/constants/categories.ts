export interface Category {
  id: number;
  name: string;
  image: string;
}

export const categories: Category[] = [
  { id: 1, name: "육류", image: "/anything.gif" },
  { id: 2, name: "채소", image: "/anything.gif" },
  { id: 3, name: "과일", image: "/anything.gif" },
  { id: 4, name: "수산물", image: "/anything.gif" },
  { id: 5, name: "조미료", image: "/anything.gif" },
  { id: 6, name: "기타", image: "/anything.gif" },
];

const route = {
  myFridge: {
    root: "/myFridge",
    addIngredient: "/myFridge/addIngredient",
    myIngredient: "/myFridge/myIngredient",
    tip: "/myFridge/tip",
  },
  diet: "/diet",
  recipe: "/recipe",
  save: "/save",
} as const;

export default route;

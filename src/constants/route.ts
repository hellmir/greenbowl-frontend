const route = {
  myFridge: {
    root: "/myFridge",
    addIngredient: "/myFridge/addIngredient",
    myIngredient: "/myFridge/myIngredient",
    tip: "/myFridge/tip",
  },
  diet: {
    root: "/diet",
  },
  recipe: {
    root: "/recipe",
  },
  save: "/save",
} as const;

export default route;

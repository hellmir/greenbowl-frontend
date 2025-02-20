const route = {
  myFridge: {
    root: "/myFridge",
    addIngredient: "/myFridge/addIngredient",
    myIngredient: "/myFridge/myIngredient",
    tip: "/myFridge/tip",
  },
  diet: {
    root: "/diet",
    test: "/diet/test",
  },
  recipe: {
    root: "/recipe",
  },
  save: "/save",
} as const;

export default route;

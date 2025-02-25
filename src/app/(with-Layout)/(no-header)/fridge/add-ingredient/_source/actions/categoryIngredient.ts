"use server";

export const getCategoryIngredients = ({ categoryId }) => {};

interface CreateCategoryIngredients {
  categoryDetail: string;
  sequence: number;
}

export const createCategoryIngredients = ({
  categoryDetail,
  sequence,
}: CreateCategoryIngredients) => {

    console.log(categoryDetail,sequence)
};

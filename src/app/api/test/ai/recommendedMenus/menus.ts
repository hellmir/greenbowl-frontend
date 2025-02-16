export interface RecipeApiResponse {
    name: string;
    imageUrl: string;
    cookingTime: number;
    caloriesPerServing: number;
    servings: number;
}

export const mockFetchRecipes = (): Promise<RecipeApiResponse[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    imageUrl:
                        "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/08/24c312f82313faaf1e4d5ef98761efcb1.jpg",
                    name: "된장찌개",
                    cookingTime: 30,
                    caloriesPerServing: 200,
                    servings: 2,
                },
                {
                    imageUrl:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Malatang_from_South_Korea.jpg/1200px-Malatang_from_South_Korea.jpg",
                    name: "마라탕",
                    cookingTime: 30,
                    caloriesPerServing: 300,
                    servings: 1,
                },
                {
                    imageUrl:
                        "https://i.namu.wiki/i/j2AxLP9AtrcJebh4DVfGxowfXwI3a95dG_YZb_Ktczc6Ca7ACyd_NJL3YHQMw8SABGTQiJDwSpySOSSBLZVEZw.webp",
                    name: "짜장면",
                    cookingTime: 40,
                    caloriesPerServing: 500,
                    servings: 1,
                },
            ]);
        }, 1000);
    });
};

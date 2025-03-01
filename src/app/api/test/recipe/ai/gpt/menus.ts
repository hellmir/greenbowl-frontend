/**
 실제 데이터로 대체됨
 */
export interface MenuApiResponse {
    name: string;
    cookingTime: number;
    calories: number;
    imageUrls: [string | undefined];

    // 인분 정보 삭제
    // servings: number;
}

/**
 실제 데이터로 대체됨
 */
export const mockFetchRecipes = (): Promise<MenuApiResponse[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    // imageUrl:
                    //     "https://tse1.mm.bing.net/th?id=OIP.2_5fZFZzXM_zSnGWUgiivwHaHa&pid=Api",
                    name: "김치찌개",
                    cookingTime: 30,
                    calories: 200,
                    imageUrls: ["img-url"],
                    // servings: 2,
                },
                {
                    // imageUrl:
                    //     "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/08/24c312f82313faaf1e4d5ef98761efcb1.jpg",
                    name: "된장찌개",
                    cookingTime: 30,
                    calories: 200,
                    imageUrls: ["img-url"],
                    // servings: 2,
                },
                {
                    // imageUrl:
                    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Malatang_from_South_Korea.jpg/1200px-Malatang_from_South_Korea.jpg",
                    name: "마라탕",
                    cookingTime: 30,
                    calories: 300,
                    imageUrls: ["img-url"],
                    // servings: 1,
                },
                {
                    // imageUrl:
                    //     "https://i.namu.wiki/i/j2AxLP9AtrcJebh4DVfGxowfXwI3a95dG_YZb_Ktczc6Ca7ACyd_NJL3YHQMw8SABGTQiJDwSpySOSSBLZVEZw.webp",
                    name: "짜장면",
                    cookingTime: 40,
                    calories: 500,
                    imageUrls: ["img-url"],
                    // servings: 1,
                },
                {
                    // imageUrl:
                    //     "https://cdn.dominos.co.kr/admin/upload/goods/20240214_sLfmidPm.jpg",
                    name: "피자",
                    cookingTime: 60,
                    calories: 350,
                    imageUrls: ["img-url"],
                    // servings: 2,
                },
            ]);
        }, 1000);
    });
};

import RecommendContents from "./RecommendContents";

const Recommend = () => {
  return (
    <div className="bg-foundation-quarternary px-4 min-h-screen mb-20">
      <h1 className="sr-only">레시피 추천 - 그린볼</h1>

      <section className="mb-6">
        <h2 className="h-9 mb-1 text-content-secondary heading-m py-2">
          맞춤형 레시피 추천
        </h2>

        <p className="pr-10 label-s text-content-tertiary">
          냉장고 속 재료를 입력하고 음식 스타일을 설정해 보세요.
        </p>
      </section>

      <section aria-labelledby="recommend-contents">
        <RecommendContents />
      </section>
    </div>
  );
};

export default Recommend;

import RecommendContents from "./RecommendContents";

const Recommend = () => {
  return (
    <div className="">
      <div className="mb-6">
        <h2 className="h-9 mb-1 text-content-secondary heading-m py-2">
          맞춤형 레시피 추천
        </h2>
        <p className="pr-10 label-s text-content-tertiary">
          냉장고 속 재료를 입력하고 음식 스타일을 설정해 보세요
        </p>
      </div>
      <RecommendContents />
    </div>
  );
};

export default Recommend;

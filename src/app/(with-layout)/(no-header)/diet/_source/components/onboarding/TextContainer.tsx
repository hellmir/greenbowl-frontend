const messages = [
  "반가워요\n저는 컨디션을 체크하여 맞춤형으로\n식단을 만들어주는 AI 식단코치\n그린이에요.",
  "맞춤형 식단을 추천 받으려면\n한 번의 라이프스타일 체크가 필요해요.\n몸 상태와 생활 습관을\n아보카도 유형으로 분석해 줄게요.",
  "지금부터 분석을 위해\n몇 가지 질문을 할 거에요.\n편하게 대답해주시면 돼요.",
];

const TextContainer = ({ stage }: { stage: number }) => {
  return (
    <div className=" mb-5 px-3 py-2 flex flex-col items-center bg-foundation-secondary border border-border-default label-s text-content-secondary rounded-xl text-center whitespace-pre">
      {messages[stage]}
    </div>
  );
};

export default TextContainer;

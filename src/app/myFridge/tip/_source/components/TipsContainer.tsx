import TipItem from "./tip/TipItem";

const TipsContainer = () => {
  return (
    <div className="mt-[54px]">
      <div className=" mt-20 mb-20 heading-m">
        <p>식재료 관리가 고민이시라면</p>
      </div>
      {Array.from({ length: 7 }).map((_, idx) => (
        <TipItem key={idx} />
      ))}
    </div>
  );
};

export default TipsContainer;

import TipItem from "./tip/TipItem";

const TipsContainer = () => {
  return (
    <div className="mt-[3.375rem] ">
      <div className=" mt-5 mb-5 heading-m">
        <p>식재료 관리가 고민이시라면</p>
      </div>
      {Array.from({ length: 7 }).map((_, idx) => (
        <TipItem key={idx} />
      ))}
    </div>
  );
};

export default TipsContainer;

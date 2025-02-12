import { Button } from "@/components/ui/button";

const Bottom = () => {
  return (
    <div className="sticky bottom-0 py-12 mx-auto flex  w-full max-w-[599px] bg-white z-40 border-t-border-border border">
      <Button className=" bg-content-quinary w-4/12">초기화</Button>
      <Button className=" flex-grow ml-8">0개 재료 추가하기</Button>
    </div>
  );
};

export default Bottom;

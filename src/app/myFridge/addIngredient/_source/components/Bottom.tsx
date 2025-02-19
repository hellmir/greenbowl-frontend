import { Button } from "@/components/ui/button";

const Bottom = () => {
  return (
    <div className="sticky bottom-0 py-3 mx-auto flex  w-full max-w-[37.5rem] bg-white z-40 border-t-border-default border">
      <Button className=" bg-content-quinary w-4/12">초기화</Button>
      <Button className=" flex-grow ml-2">0개 재료 추가하기</Button>
    </div>
  );
};

export default Bottom;

import { Button } from "@/components/ui/button";

const Empty = () => {
  return (
    <div className=" border-2 border-black h-[480px] flex items-center justify-center relative ">
      <p>텅...</p>
      <Button type="button" className=" w-full absolute bottom-3">
        재료 추가하기
      </Button>
    </div>
  );
};

export default Empty;

import { Button } from "@/components/ui/button";

interface Props {
  quantity: number;
  onChange: (quantity: number) => void;
}

const Quantity = ({ quantity, onChange }: Props) => {
  const handleClickPlusBtn = () => {
    onChange(quantity + 1);
  };
  const handleClickMinusBtn = () => {
    if (quantity === 0) return;
    onChange(quantity - 1);
  };
  return (
    <div className="h-40 flex items-center">
      <p className="w-1/2">수량</p>
      <div className="flex w-1/2 justify-center">
        <Button
          onClick={handleClickMinusBtn}
          variant={"ghost"}
          className=" w-3/12 flex items-center justify-center"
        >
          -
        </Button>
        <div className="text-label-m grow flex items-center justify-center">
          {quantity}
        </div>
        <Button
          onClick={handleClickPlusBtn}
          variant={"ghost"}
          className=" w-3/12 flex items-center justify-center"
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Quantity;

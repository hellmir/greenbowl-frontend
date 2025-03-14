import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  selected: boolean;
}

const SelectButton = ({ children, selected, ...props }: Props) => {
  return (
    <Button
      className={`border rounded-2xl text-foundation-primary ${selected ? "bg-scale-yellowgreen-100 border-foundation-primary text-foundation-primary" : "bg-foundation-secondary border-border-default text-content-secondary"}`}
      type={"button"}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SelectButton;

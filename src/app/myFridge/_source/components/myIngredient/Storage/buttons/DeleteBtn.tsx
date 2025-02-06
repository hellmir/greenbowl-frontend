import { Button } from "@/components/ui/button";

interface Props {
  onClick: () => void;
}
const DeleteBtn = ({ onClick }: Props) => {
  return (
    <Button type="button" onClick={onClick}>
      DeleteBtn
    </Button>
  );
};

export default DeleteBtn;

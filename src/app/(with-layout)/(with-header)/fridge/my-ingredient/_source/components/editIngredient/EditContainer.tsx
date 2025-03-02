import { Navigation } from "@/components/navigation";
import EditIngredientList from "./EditIngredientList";

import Header from "./Header";

interface Props {
  handleClose: () => void;
}

const EditContainer = ({ handleClose }: Props) => {
  return (
    <div className=" z-30">
      <Header handleClose={handleClose} />
      <div className="px-4">
        <EditIngredientList />
      </div>
      <Navigation />
    </div>
  );
};

export default EditContainer;

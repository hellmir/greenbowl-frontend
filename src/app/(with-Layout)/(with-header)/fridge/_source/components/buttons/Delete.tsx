import { deleteIngredients } from "../../actions/ingredient";

const Delete = ({ id }: { id: number[] }) => {
  const handleClick = () => deleteIngredients(id);

  return <button type="button" onClick={handleClick}></button>;
};

export default Delete;

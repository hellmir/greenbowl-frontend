import { deleteIngredient } from "../../actions/ingredient";

const Delete = ({ id }: { id: string }) => {
  const handleClick = () => deleteIngredient(id);

  return <button type="button" onClick={handleClick}></button>;
};

export default Delete;

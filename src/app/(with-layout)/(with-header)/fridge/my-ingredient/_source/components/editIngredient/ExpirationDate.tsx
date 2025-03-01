interface Props {
  expirationDate: string;
  handleClick: () => void;
}

const ExpirationDate = ({ expirationDate, handleClick }: Props) => {
  return (
    <div className="h-10 flex items-center justify-between ">
      <p className=" w-1/2">유통기한</p>
      <p
        onClick={handleClick}
        className="h-full w-1/2 flex justify-center items-center text-content-secondary border border-border-default rounded-[8px] hover:cursor-pointer"
      >
        {expirationDate} 까지
      </p>
    </div>
  );
};

export default ExpirationDate;

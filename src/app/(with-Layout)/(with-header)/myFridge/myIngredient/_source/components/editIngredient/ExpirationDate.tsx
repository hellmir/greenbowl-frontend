interface Props {
  expirationDate: string;
  handleClick: () => void;
}

const formatDate = (date: Date) =>
  `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;

const ExpirationDate = ({ expirationDate, handleClick }: Props) => {
  const formatExpirationDate = formatDate(new Date(expirationDate));

  return (
    <div className="h-10 flex items-center justify-between ">
      <p className=" w-1/2">유통기한</p>
      <p
        onClick={handleClick}
        className="h-full w-1/2 flex justify-center items-center text-content-secondary border border-border-default rounded-[8px] hover:cursor-pointer"
      >
        {formatExpirationDate} 까지
      </p>
    </div>
  );
};

export default ExpirationDate;

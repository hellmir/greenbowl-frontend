interface Props {
  expirationDate: string;
}

const formatDate = (date: Date) =>
  `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;

const ExpirationDate = ({ expirationDate }: Props) => {
  const formatExpirationDate = formatDate(new Date(expirationDate));

  return (
    <div className="h-40 flex items-center justify-between ">
      <p className=" w-1/2">유통기한</p>
      <p className=" w-1/2 flex justify-center text-content-secondary">
        {formatExpirationDate} 까지
      </p>
    </div>
  );
};

export default ExpirationDate;

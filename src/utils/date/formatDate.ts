const formatDate = (date: Date, separator: string = "-") =>
  `${date.getFullYear()}${separator}${`${(date.getMonth() + 1).toString().padStart(2, "0")}`}${separator}${date.getDate().toString().padStart(2, "0")}`;

export default formatDate;

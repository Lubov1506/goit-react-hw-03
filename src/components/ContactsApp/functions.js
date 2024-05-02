const getFormatNumber = (number) =>
  `${String(number).slice(0, 3)}-${String(number).slice(3, 5)}-${String(
    number
  ).slice(-2)}`;

export default getFormatNumber;

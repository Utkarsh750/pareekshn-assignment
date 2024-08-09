export const validateDate = (value) => {
  const selectedDate = new Date(value);
  const maxDate = new Date("2013-12-31");
  return selectedDate <= maxDate || "Date must be before the Year 2014";
};

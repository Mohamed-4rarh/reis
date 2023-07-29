export const useFilter = (data, value) => {
  const filteredData = data.filter((data) => data.id == value);
  return filteredData;
};

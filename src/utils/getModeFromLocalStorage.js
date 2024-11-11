export const getModeFromLocalStorage = () => {
  const data = localStorage.getItem("darkmode");
  console.log(data);
  return data;
};

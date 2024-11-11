export const getModeFromLocalStorage = () => {
  let data = localStorage.getItem("darkmode");
  data = JSON.parse(data);
  return data === true;
};

export const getMenu = async () => {
  const response = await fetch("../data/menu.json");
  return await response.json();
};

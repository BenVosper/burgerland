import { getMenu } from "./common.js";

const populateMenu = (container, menu) => {
  const menuTitle = document.createElement("h2");
  menuTitle.innerText = "Menu";
  container.appendChild(menuTitle);

  console.log(container, menu);

  // TODO: Add the rest of the content using menu data
};

const onButtonClick = () => {
  const url = "/order";

  const queryParams = new URLSearchParams();

  // TODO: Get selected meals from page and add IDs to query params
  queryParams.append("itemId", "1");
  queryParams.append("itemId", "3");

  window.location = `${url}?${queryParams.toString()}`;
};

const onPageLoad = async () => {
  const menu = await getMenu();

  const contentContainer = document.getElementById("content");
  populateMenu(contentContainer, menu);

  const orderButton = document.getElementById("orderButton");
  orderButton.addEventListener("click", onButtonClick);
};

document.addEventListener("DOMContentLoaded", onPageLoad);

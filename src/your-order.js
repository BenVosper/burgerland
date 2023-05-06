import { getMenu } from "./common.js";

const getOrderedItems = () => {
  const url = new URL(window.location);
  const queryParams = new URLSearchParams(url.search);
  return queryParams.getAll("itemId");
};

const populateOrder = (container, menu, orderedItems) => {
  // TODO: Add the order content using menu and ordered items
};

const onPageLoad = async () => {
  const menu = await getMenu();
  const orderedItems = getOrderedItems();
  console.log("orderedItems", orderedItems);

  const contentContainer = document.getElementById("content");
  populateOrder(contentContainer, menu, orderedItems);
};

document.addEventListener("DOMContentLoaded", onPageLoad);

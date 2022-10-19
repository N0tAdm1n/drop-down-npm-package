function createDropDownMenu(itemsArray, containerWidth = "10") {
  const container = document.querySelector(".drop-down-container");
  container.textContent = "=";

  const containerStyle = `
    position: relative;
    background-color: transparent;
    border: 2px solid black;
    width: ${containerWidth}rem;
    height: 1.3rem;
    margin-left: 100px;
  `;

  container.style.cssText = containerStyle;

  container.addEventListener("click", toggleDropDown);

  const itemsContainer = document.createElement("div");
  itemsContainer.classList.add("items-container");

  container.append(itemsContainer);

  let itemsContainerWidth;
  if (containerWidth < 10) {
    itemsContainerWidth = "fit-content";
  } else {
    itemsContainerWidth = "100%";
  }

  const itemsContainerStyle = `
    position: absolute;
    width: ${itemsContainerWidth};
    top: ${container.style.height};
    left: -2px;
    margin-left: auto;
    margin-right: auto;
    padding: 3px 5px;
    visibility: hidden;
    background-color: white;
    border: 2px solid black;
  `;

  itemsContainer.style.cssText = itemsContainerStyle;

  for (const item of itemsArray) {
    const newItem = document.createElement("a");

    newItem.textContent = item.name;
    newItem.href = item.link;
    newItem.classList.add("drop-down-item");

    const newItemStyle = `
      font-size: 1rem;
      display: block;
      text-decoration: none;
      color: black;
    `;

    itemsContainer.append(newItem);

    newItem.style.cssText = newItemStyle;
  }
}

function toggleDropDown() {
  const itemsContainer = document.querySelector(".items-container");
  if (itemsContainer.style.visibility == "visible") {
    itemsContainer.style.visibility = "hidden";
  } else {
    itemsContainer.style.visibility = "visible";
  }
}

export { createDropDownMenu };

const clear = require("./clear");
// const loadMain = require("./loadMain");

const formFactory = () => {
  clear();
  const mainDiv = document.querySelector("#container");
  const section = document.createElement("section");
  const nameInput = document.createElement("input");
  const descriptionInput = document.createElement("input");
  const dateInput = document.createElement("input");
  const saveButton = document.createElement("button");
  const cancelButton = document.createElement("button");
  const fragment = document.createDocumentFragment();
  const nameText = document.createTextNode("Name:");
  const descText = document.createTextNode("Description");
  const dateText = document.createTextNode("Due Date:");
  saveButton.textContent = "Save";
  cancelButton.textContent = "Cancel";
  cancelButton.setAttribute("id", "cancel");
  // cancelButton.addEventListener("click", loadMain);
  section.appendChild(nameText);
  section.appendChild(nameInput);
  section.appendChild(descText);
  section.appendChild(descriptionInput);
  section.appendChild(dateText);
  section.appendChild(dateInput);
  section.appendChild(saveButton);
  section.appendChild(cancelButton);
  fragment.appendChild(section);
  mainDiv.appendChild(fragment);
  console.log("Testing This Function"); 
};

module.exports = formFactory;
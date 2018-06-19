const clear = require("./clear");
// const loadMain = require("./loadMain");

const formFactory = () => {
  clear();
  const mainDiv = document.querySelector(".hero");
  const section = document.createElement("section");
  const pName = document.createElement("p");
  const nameInput = document.createElement("input");
  const nameSpan = document.createElement("span");
  const nameIcon = document.createElement("i");
  const pDescription = document.createElement("p");
  const descriptionInput = document.createElement("input");
  const descSpan = document.createElement("span");
  const descIcon = document.createElement("i");
  const pDate = document.createElement("p");
  const dateInput = document.createElement("input");
  const dateSpan = document.createElement("span");
  const dateIcon = document.createElement("i");
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
  pName.setAttribute("class","control has-icons-left");
  nameInput.setAttribute("class","input is-primary is-large");
  nameSpan.setAttribute("class","icon is-small is-left");
  nameIcon.setAttribute("class","fas fa-user-ninja");

  pDescription.setAttribute("class","control has-icons-left");
  descriptionInput.setAttribute("class","input is-info is-large");
  descSpan.setAttribute("class","icon is-small is-left");
  descIcon.setAttribute("class","fas fa-align-left");

  pDate.setAttribute("class","control has-icons-left");
  dateInput.setAttribute("class","input is-warning is-large");
  dateSpan.setAttribute("class","icon is-small is-left");
  dateIcon.setAttribute("class","fas fa-calendar-alt");

  section.setAttribute("class","hero is-light");

  saveButton.setAttribute("class","hero button is-primary");
  cancelButton.setAttribute("class","hero button is-light");

  section.appendChild(nameText);
  pName.appendChild(nameInput);
  pName.appendChild(nameSpan);
  nameSpan.appendChild(nameIcon);
  section.appendChild(pName);
  section.appendChild(descText);
  pDescription.appendChild(descriptionInput);
  pDescription.appendChild(descSpan);
  descSpan.appendChild(descIcon);
  section.appendChild(pDescription);
  section.appendChild(dateText);
  pDate.appendChild(dateInput);
  pDate.appendChild(dateSpan);
  dateSpan.appendChild(dateIcon);
  section.appendChild(pDate);
  section.appendChild(saveButton);
  section.appendChild(cancelButton);
  fragment.appendChild(section);
  mainDiv.appendChild(fragment);
  console.log("Testing This Function"); 
};

module.exports = formFactory;
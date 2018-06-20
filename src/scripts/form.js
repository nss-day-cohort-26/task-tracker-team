const clear = require("./clear");


const formFactory = () => {
  clear();
  const mainDiv = document.querySelector("#container");
  const section = document.createElement("section");
  const fieldDiv = document.createElement("div");
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
  const buttonDiv = document.createElement("div");
  const saveButton = document.createElement("button");
  const cancelButton = document.createElement("button");
  const fragment = document.createDocumentFragment();
  saveButton.textContent = "Save";
  saveButton.setAttribute("id", "save");
  cancelButton.textContent = "Cancel";
  cancelButton.setAttribute("id", "cancel");
  // cancelButton.addEventListener("click", loadMain);
  nameInput.setAttribute("id", "taskName");
  descriptionInput.setAttribute("id", "taskDescript");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("id", "taskDue");
  
  //styling for forms start
  fieldDiv.setAttribute("class","field");
  pName.setAttribute("class","field control has-icons-left");
  pName.setAttribute("id","pName");
  nameInput.setAttribute("class","input is-primary is-large");
  nameInput.setAttribute("placeholder","Name");
  nameSpan.setAttribute("class","icon is-small is-left");
  nameIcon.setAttribute("class","fas fa-user-ninja");

  pDescription.setAttribute("class","field control has-icons-left");
  descriptionInput.setAttribute("class","input is-info is-large");
  descriptionInput.setAttribute("placeholder","Description");
  descSpan.setAttribute("class","icon is-small is-left");
  descIcon.setAttribute("class","fas fa-align-left");

  pDate.setAttribute("class","field control has-icons-left");
  dateInput.setAttribute("class","input is-warning is-large");
  dateSpan.setAttribute("class","icon is-small is-left");
  dateIcon.setAttribute("class","fas fa-calendar-alt");

  section.setAttribute("class","hero-body is-light");

  buttonDiv.setAttribute("class","level");
  saveButton.setAttribute("class","hero-foot level-left is-medium button is-primary");
  cancelButton.setAttribute("class","hero-foot level-right is-medium button is-light");
  //styling for forms end

  pName.appendChild(nameInput);
  pName.appendChild(nameSpan);
  nameSpan.appendChild(nameIcon);
  fieldDiv.appendChild(pName);
  pDescription.appendChild(descriptionInput);
  pDescription.appendChild(descSpan);
  descSpan.appendChild(descIcon);
  fieldDiv.appendChild(pDescription);
  pDate.appendChild(dateInput);
  pDate.appendChild(dateSpan);
  dateSpan.appendChild(dateIcon);
  fieldDiv.appendChild(pDate);
  section.appendChild(fieldDiv);
  buttonDiv.appendChild(saveButton);
  buttonDiv.appendChild(cancelButton);
  section.appendChild(buttonDiv);
  fragment.appendChild(section);
  mainDiv.appendChild(fragment);
  console.log("Testing This Function"); 
};

module.exports = formFactory;
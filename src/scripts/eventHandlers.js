const loadForm = require("./form");
const loadMain = require("./loadMain");
const save = require("./save");

const body = document.querySelector("body");
body.addEventListener("click", () => {
  if (event.target.id === "cancel") {
    loadMain();
  } else if (event.target.id === "create") {
    loadForm();
  } else if (event.target.id === "save") {
    save();
  }
});
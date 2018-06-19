const database = require("./database");
const loadMain = require("./loadMain");
const dragons = require("./dragonDrop");

// const loadForm = require("./form");
if (localStorage.getItem("TaskDatabase") === null) {
  database.save(database, "TaskDatabase");
}
loadMain();
// loadForm();
dragons();
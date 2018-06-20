const database = require("./database");
// const dragons = require("./dragonDrop");

// const loadForm = require("./form");
if (localStorage.getItem("TaskDatabase") === null) {
  console.log(database);
  database.save(database, "TaskDatabase");
}
const loadMain = require("./loadMain");
loadMain();
// loadForm();
// dragons();
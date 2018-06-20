const database = require("./database");
const loadMain = require("./loadMain");
const setStatus = require("./setStatus");
// const dragons = require("./dragonDrop");

// const loadForm = require("./form");
if (database.load("TaskDatabase") === null) {
  console.log(database);
  database.save(database, "TaskDatabase");
}

loadMain();
setStatus();
// loadForm();
// dragons();
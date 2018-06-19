const database = require("./database")
const loadMain = require("./loadMain");

// const loadForm = require("./form");
if (localStorage.getItem("TaskDatabase") === null) {
  database.save(database, "TaskDatabase");
}
loadMain();
// loadForm();
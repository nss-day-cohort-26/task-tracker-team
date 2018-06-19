const database = require("./database")
const loadMain = require("./loadMain");

// const loadForm = require("./form");
database.save(database, "TaskDatabase")
loadMain();
// loadForm();
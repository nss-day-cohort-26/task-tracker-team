const database = require("./database");
const loadMain = require("./loadMain");

if (database.load("TaskDatabase") === null) {
  console.log(database);
  database.save(database, "TaskDatabase");
}

loadMain();

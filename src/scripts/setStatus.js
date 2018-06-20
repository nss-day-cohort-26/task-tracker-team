// change status of card when dropped
const Database = require("./database");
const database = Database.load("TaskDatabase");

const setStatus = () => {

  const allCards = document.querySelectorAll(".card");

  allCards.forEach(card => {
    const parentColumn = card.parentElement;
    const parentClass = parentColumn.classList;
    const targetObject = card.id.split("-")[1];
    console.log("targetObject", targetObject)
    console.log("parentClass", parentClass)

    switch (true) {
      case parentClass.contains("column--todo"):
        database.taskArray[targetObject].taskStatus = "todo";
        console.log("To do column");
        break;
      case parentClass.contains("column--doing"):
        database.taskArray[targetObject].taskStatus = "doing";
        console.log("Doing column");
        break;
      case parentClass.contains("column--done"):
        database.taskArray[targetObject].taskStatus = "done";
        console.log("Done column");
        break;
      default:
        break;
    }
  });
  Database.save(database, "TaskDatabase");
};
module.exports = setStatus;
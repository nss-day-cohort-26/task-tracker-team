const Database = require("./database");
const form = require("./form");

const savefunction = () => {

	//get user input
	let taskName = document.getElementById("taskName").value;
	let taskDescript = document.getElementById("taskDescript").value;
	let taskDue = document.getElementById("taskDue").value;
	// set values to database
	database = Database.load("TaskDatabase");
	const newTask = {
		taskName: taskName,
		taskDescription: taskDescript,
		taskDateCreated: new Date(),
		taskDateDue: taskDue,
		taskStatus: "To Do"
	};
	database.taskArray.push(newTask);
	Database.save(database, "TaskDatabase");

	// testing
	// console.log("data", Database.load("TaskDatabase"));
};
module.exports = savefunction;



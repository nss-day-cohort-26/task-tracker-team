const TaskDatabase = Object.create({}, {
	taskArray: {
		value: [
			{
				taskName: "Totally Awesome Demo!",
				taskDescription: "Present the product! Bask in the applause! High-fives all around!",
				taskDateCreated: 123,
				taskDateDue: "Today, 10:55",
				taskStatus: "todo" // also possible: "doing", "done"
			}
		],
		enumerable: true,
		writable: true
	},
	save: {
		value: (databaseObject, localStorageKey) => {
			const stringifiedDatabase = JSON.stringify(databaseObject);
			localStorage.setItem(localStorageKey, stringifiedDatabase);
		}
	},
	load: {
		value: localStorageKey => {
			const databaseString = localStorage.getItem(localStorageKey);
			return JSON.parse(databaseString);
		}
	}
});
module.exports = TaskDatabase;


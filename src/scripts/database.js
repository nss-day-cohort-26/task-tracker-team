const TaskDatabase = Object.create({}, {
	taskArray: {
		value: [
			{
				taskName: "Test",
				taskDescription: "Testing the task object",
				taskDateCreated: 123,
				taskDateDue: "Later",
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


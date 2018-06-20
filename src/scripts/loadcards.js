const database = require("./database");

const loadDatabase = () => {
    const fragment = document.createDocumentFragment();
    const storage = database.load("TaskDatabase");
    let idCounter = 0;
    storage.taskArray.forEach(key => {
    const section = document.createElement("section");
        section.setAttribute("id", `task-${idCounter}`);
        idCounter++;
        section.className = "card";
        const youEll = document.createElement("ul");
        const ellEyeDesc = document.createElement("li");
        const ellEyeName = document.createElement("li");
        const ellEyeDate = document.createElement("li");
        ellEyeName.textContent = `Name: ${key.taskName}`;
        ellEyeDesc.textContent = `Description: ${key.taskDescription}`;
        ellEyeDate.textContent = `Date Due: ${key.taskDateDue}`;
        section.setAttribute("class",`card ${key.taskStatus}`);
        youEll.appendChild(ellEyeName);
        youEll.appendChild(ellEyeDesc);
        youEll.appendChild(ellEyeDate);
        section.appendChild(youEll);
        fragment.appendChild(section);
    });
    return fragment;
};
module.exports = loadDatabase;


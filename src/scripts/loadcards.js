const database = require("./database");

const loadDatabase = () => {
   const fragment = document.createDocumentFragment();
   const storage = database.load("key");
   storage.forEach(item => {
       const section = document.createElement("section");
       const youEll = document.createElement("ul");
       const ellEyeDesc = document.createElement("li");
       const ellEyeName = document.createElement("li");
       const ellEyeDate = document.createElement("li");
       ellEyeName.textContent = `Name: ${item.taskName}`;
       ellEyeDesc.textContent = `Description: ${item.taskDescription}`;
       ellEyeDate.textContent = `Date Due: ${item.taskDateDue}`;
       youEll.appendChild(ellEyeName);
       youEll.appendChild(ellEyeDesc);
       youEll.appendChild(ellEyeDate);
       section.appendChild(youEll);
       fragment.appendChild(section);
   });
};


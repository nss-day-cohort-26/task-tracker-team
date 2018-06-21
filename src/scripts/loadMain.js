// require from database
// require from dealer
const loadCards = require("./loadcards");
const clear = require("./clear");
const dragonFunction = require("./dragonDrop");
const Database = require("./database");
// const setStatus = require("./setStatus");
//Getting return value from loadcards



const loadMain = () => {
    const cardDeck = loadCards();

    const secFrag = document.createDocumentFragment();
    // variables and create elements
    let body = document.querySelector("body");
    let heroHead = document.createElement("div");
    let h1Ref = document.createElement("h1");
    let heroBody = document.createElement("div");
    let div0Ref = document.createElement("div");
    let todoColumn = document.createElement("div");
    let doingColumn = document.createElement("div");
    let doneColumn = document.createElement("div");
    let heroFoot = document.createElement("div");
    let createButn = document.createElement("button");
    // set attributes
    body.setAttribute("class", "has-background-light");
    heroHead.setAttribute("class", "hero-head");
    h1Ref.setAttribute("class", "title is-1 has-text-centered");
    h1Ref.textContent = "Task Tracker : Click Winky Face to add tasks! ";
    heroBody.setAttribute("class", "hero-body is-light");
    div0Ref.setAttribute("class", "columns");
    todoColumn.setAttribute("class", "column column--todo has-background-info");
    todoColumn.textContent = "To-Do";
    doingColumn.setAttribute("class", "column column--doing has-background-link");
    doingColumn.textContent = "Doing";
    doneColumn.setAttribute("class", "column column--done has-background-primary");
    doneColumn.textContent = "Done";
    heroFoot.setAttribute("class", "hero-foot has-text-centered");
    createButn.setAttribute("class", "button button--create");
    createButn.setAttribute("id", "create");
    createButn.textContent = "😉";
    console.log("The form is being made");
    //appending cards from local storage to its column based on status
    // setStatus();

    const database = Database.load("TaskDatabase");
    database.taskArray.forEach((item, index) => {
        if (item.taskStatus === "todo") {
            console.log("To Do",item.taskStatus);
            todoColumn.appendChild(cardDeck[index]);
        } else if (item.taskStatus === "doing") {
            console.log("Doing", item.taskStatus);
            doingColumn.appendChild(cardDeck[index]);
        } else if (item.taskStatus === "done") {
            console.log("Done", item.taskStatus);
            doneColumn.appendChild(cardDeck[index]);
        }
    });
    // secFrag.appendChild(h1Ref);
    heroHead.appendChild(h1Ref);
    div0Ref.appendChild(todoColumn);
    div0Ref.appendChild(doingColumn);
    div0Ref.appendChild(doneColumn);
    heroBody.appendChild(div0Ref);
    h1Ref.appendChild(createButn);
    secFrag.appendChild(heroHead);
    secFrag.appendChild(heroBody);
    secFrag.appendChild(heroFoot);
    // secFrag.appendChild(todoColumn);
    // secFrag.appendChild(doingColumn);
    // secFrag.appendChild(doneColumn);
    // secFrag.appendChild(createButn);
    console.log("Things are appended to the fragment");
    const container = document.querySelector("#container");
    clear();
    console.log("The container is cleared");
    container.appendChild(secFrag);
    console.log("Child appended");
    dragonFunction();

};

module.exports = loadMain;



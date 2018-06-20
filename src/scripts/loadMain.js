// require from database
// require from dealer
const loadDatabase = require("./loadcards");
const clear = require("./clear");
const dragonFunction = require("./dragonDrop");
//Getting return value from loadcards



const loadMain = () => {
    const cardsFrag = loadDatabase();
    const secFrag = document.createDocumentFragment();
    // variables and create elements
    let heroHead = document.createElement("div");
    let h1Ref = document.createElement("h1");
    let heroBody = document.createElement("div");
    let div0Ref = document.createElement("div");
    let div1Ref = document.createElement("div");
    let div2Ref = document.createElement("div");
    let div3Ref = document.createElement("div");
    let heroFoot = document.createElement("div");
    let createButn = document.createElement("button");
    // set attributes
    heroHead.setAttribute("class","hero-head");
    h1Ref.textContent = "Task Tracker ;-)";
    heroBody.setAttribute("class","hero-body is-light");
    div0Ref.setAttribute("class","columns has-text-centered");
    div1Ref.setAttribute("class", "column column--todo");
    div1Ref.textContent = "To-Do";
    div2Ref.setAttribute("class", "column column--doing");
    div2Ref.textContent = "Doing";
    div3Ref.setAttribute("class", "column column--done");
    div3Ref.textContent = "Done";
    heroFoot.setAttribute("class","hero-foot");
    createButn.setAttribute("class", "button button--create");
    createButn.setAttribute("id", "create");
    createButn.textContent = "Create New Task";
    console.log("The form is being made");
    //appending cards from local storage to to do column
    div1Ref.appendChild(cardsFrag);
    loadDatabase();
    // secFrag.appendChild(h1Ref);
    heroHead.appendChild(h1Ref);
    div0Ref.appendChild(div1Ref);
    div0Ref.appendChild(div2Ref);
    div0Ref.appendChild(div3Ref);
    heroBody.appendChild(div0Ref);
    heroFoot.appendChild(createButn);
    secFrag.appendChild(heroHead);
    secFrag.appendChild(heroBody);
    secFrag.appendChild(heroFoot);
    // secFrag.appendChild(div1Ref);
    // secFrag.appendChild(div2Ref);
    // secFrag.appendChild(div3Ref);
    // secFrag.appendChild(createButn);
    console.log("Things are appended to the fragment");
    const container = document.querySelector(".hero");
    clear();
    console.log("The container is cleared");
    container.appendChild(secFrag);
    console.log("Child appended");
    dragonFunction();
};

module.exports = loadMain;



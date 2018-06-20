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
    let body = document.querySelector("body");
    let heroHead = document.createElement("div");
    let h1Ref = document.createElement("h1");
    let heroBody = document.createElement("div");
    let div0Ref = document.createElement("div");
    let div1Ref = document.createElement("div");
    let div2Ref = document.createElement("div");
    let div3Ref = document.createElement("div");
    // let heroFoot = document.createElement("div");
    let createButn = document.createElement("button");
    // set attributes
    body.setAttribute("class", "has-background-light");
    heroHead.setAttribute("class","hero-head has-text-centered");
    h1Ref.setAttribute("class","title is-1 has-text-centered");
    h1Ref.textContent = "Task Tracker ";
    heroBody.setAttribute("class","hero-body is-light");
    div0Ref.setAttribute("class","columns has-text-centered");
    div1Ref.setAttribute("class", "column column--todo has-background-info");
    div1Ref.textContent = "To-Do";
    div2Ref.setAttribute("class", "column column--doing has-background-link");
    div2Ref.textContent = "Doing";
    div3Ref.setAttribute("class", "column column--done has-background-primary");
    div3Ref.textContent = "Done";
    // heroFoot.setAttribute("class","hero-foot has-text-centered");
    createButn.setAttribute("class", "button button--create is-large");
    createButn.setAttribute("id", "create");
    createButn.textContent = "😉";
    console.log("The form is being made");
    //appending cards from local storage to to do column
    div1Ref.appendChild(cardsFrag);
    loadDatabase();
    // secFrag.appendChild(h1Ref);
    heroHead.appendChild(h1Ref);
    h1Ref.appendChild(createButn);
    div0Ref.appendChild(div1Ref);
    div0Ref.appendChild(div2Ref);
    div0Ref.appendChild(div3Ref);
    heroBody.appendChild(div0Ref);
    // heroFoot.appendChild(createButn);
    secFrag.appendChild(heroHead);
    secFrag.appendChild(heroBody);
    // secFrag.appendChild(heroFoot);
    // secFrag.appendChild(div1Ref);
    // secFrag.appendChild(div2Ref);
    // secFrag.appendChild(div3Ref);
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



// require from database
// require from dealer

const clear = require("./clear");



const loadMain = () => {
    const secFrag = document.createDocumentFragment();
    // variables and create elements
    let h1Ref = document.createElement("h1");
    let div1Ref = document.createElement("div");
    let div2Ref = document.createElement("div");
    let div3Ref = document.createElement("div");
    let createButn = document.createElement("button");
    // set attributes
    h1Ref.textContent = "Task Tracker ;-)";
    div1Ref.setAttribute("class", "column column--todo");
    div2Ref.setAttribute("class", "column column--doing");
    div3Ref.setAttribute("class", "column column--done");
    createButn.setAttribute("class", "button button--create");
    createButn.setAttribute("id", "create");
    createButn.textContent = "Create New Task";
    console.log("The form is being made");

    secFrag.appendChild(h1Ref);
    secFrag.appendChild(div1Ref);
    secFrag.appendChild(div2Ref);
    secFrag.appendChild(div3Ref);
    secFrag.appendChild(createButn);
    console.log("Things are appended to the fragment");
    const container = document.querySelector("#container");
    clear();
    console.log("The container is cleared");
    container.appendChild(secFrag);
    console.log("Child appended");

};

module.exports = loadMain;



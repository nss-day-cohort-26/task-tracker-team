// require from database
// require from dealer
const createForm = require("./form.js");
const clear = require("./clear.js");

const secFrag = document.createDocumentFragment();


const loadMain = () => {
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
    createButn.textContent = "Create New Task";

    secFrag.appendChild(h1Ref);
    secFrag.appendChild(div1Ref);
    secFrag.appendChild(div2Ref);
    secFrag.appendChild(div3Ref);
    secFrag.appendChild(createButn);

    const container = document.querySelector("#container");
    clear(container);
    container.appendChild(secFrag);

};

module.exports = loadMain();


// event lister on button to create form
const toCreateForm =document.querySelector(".button--create").addEventListener("click", createForm);
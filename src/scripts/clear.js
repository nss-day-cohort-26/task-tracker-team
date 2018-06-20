const clear = () => {
    const container = document.querySelector("#container");
    while (container.firstElementChild){
        container.removeChild(container.firstElementChild);
    }
};

module.exports = clear;

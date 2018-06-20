const clear = () => {
    const container = document.querySelector(".hero");
    while (container.firstElementChild){
        container.removeChild(container.firstElementChild);
    };
};

module.exports = clear;

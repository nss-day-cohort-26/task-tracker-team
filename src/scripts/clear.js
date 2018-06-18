const clear = (container) => {
    while( container.firstElementChild){
        container.removeChild(container.firstElementChild)
    }
};

module.exports = clear;

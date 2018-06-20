// add dragable ability

const dragonFunction = () => {
  const tasks = document.querySelectorAll(".card");

  tasks.forEach(item => {
    item.setAttribute("draggable", "true");
    item.addEventListener("dragstart", function(){
      event.dataTransfer.setData("text", event.target.id);
    });
  });

  const columns = document.querySelectorAll(".column");

  columns.forEach(item => {
    item.addEventListener("dragover", function(){
      event.preventDefault();
    });
    item.addEventListener("drop", function(){
      event.preventDefault();
        if(event.target.classList.contains("column")) {
          const cardId = event.dataTransfer.getData("text");
          const currentDragon = document.querySelector(`#${cardId}`);
          event.target.appendChild(currentDragon);
        }
    });
  });
};

module.exports = dragonFunction;
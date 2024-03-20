const itemsItem = document.querySelectorAll(".items-item");
const jsCell = document.querySelectorAll(".js-cell");

itemsItem.forEach((target) => {
  for (let i = 0; i < jsCell.length; i++) {
    jsCell[i].addEventListener("click", () => {
      target.classList.toggle("is-active");

      if (target.classList.contains("is-active")) {
        jsCell[i].innerHTML = target.innerHTML;
      }
    });
  }
});

// jsCell.addEventListener("click", () => {
//   console.log("click");
// });

const itemsItem = document.querySelectorAll(".items-item");
const jsCell = document.querySelectorAll(".js-cell");
const jsReset = document.querySelector(".btn-restart");

itemsItem.forEach((target) => {
  jsCell.forEach((cellTarget) => {
    // if (cellTarget.children.length === 0) {
    //   console.log(cellTarget);
    // }
    cellTarget.addEventListener("click", () => {
      target.classList.toggle("is-active");

      if (target.classList.contains("is-active")) {
        cellTarget.innerHTML = target.dataset.set;
      }
    });
  });
});

jsReset.addEventListener("click", () => {
  location.reload();
});
